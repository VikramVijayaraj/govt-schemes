import axios from "axios";

const BASE_URL = "https://schemes-8c091-default-rtdb.firebaseio.com";

export async function schemesList() {
  const response = await axios.get(BASE_URL + `/schemes.json`);
  return response.data;
}

export async function getStates() {
  const schemes = await schemesList();
  const states = [];

  for (const state in schemes) {
    states.push(state);
  }
}

export async function getBeneficiaries() {
  const schemes = await schemesList();
  let beneficiaries = [];

  for (const state in schemes) {
    const stateSchemes = schemes[state];
    for (const schemeId in stateSchemes) {
      const schemeFields = stateSchemes[schemeId];
      for (const fields in schemeFields) {
        if (fields === "seligible") {
          beneficiaries.push(schemeFields[fields].trim());
        }
      }
    }
  }

  beneficiaries = [...new Set(beneficiaries)];
  return beneficiaries;
}

export async function getFilteredSchemes(state, beneficiary) {
  const response = await axios.get(BASE_URL + `/schemes/${state}/.json`);
  
  const stateSchemes = response.data;
  const filteredList = [];
  
  Object.keys(stateSchemes).map((item) => {
    if (stateSchemes[item].seligible.trim() === beneficiary.trim()) {
      filteredList.push(stateSchemes[item]);
    }
  }); 

  return filteredList;
}
