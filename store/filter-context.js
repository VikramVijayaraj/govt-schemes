import { createContext, useState } from "react";

export const FilterContext = createContext({
  state: "",
  department: "",
  beneficiary: "",
  updateState: (state) => {},
  updateDepartment: (department) => {},
  updateBeneficiary: (beneficiary) => {},
});

export default function FilterContextProvider({ children }) {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedBeneficiary, setSelectedBeneficiary] = useState("");

  function updateState(state) {
    setSelectedState(state);
  }

  function updateDepartment(department) {
    setSelectedDepartment(department);
  }

  function updateBeneficiary(beneficiary) {
    setSelectedBeneficiary(beneficiary);
  }

  const value = {
    state: selectedState,
    department: selectedDepartment,
    beneficiary: selectedBeneficiary,
    updateState: updateState,
    updateDepartment: updateDepartment,
    updateBeneficiary: updateBeneficiary,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}
