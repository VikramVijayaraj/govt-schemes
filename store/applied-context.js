import { createContext, useState } from "react";

export const AppliedContext = createContext({
  schemes: "",
  applyScheme: (scheme) => {},
});

export default function AppliedContextProvider({ children }) {
  const [appliedSchemes, setAppliedSchemes] = useState([]);

  function applyScheme(scheme) {
    // for (let i = 0; i <= appliedSchemes.length; i++) {
    //   if (appliedSchemes[i].name !== scheme.name) {
        setAppliedSchemes((currentSchemes) => [...currentSchemes, scheme]);
    //   }
    // }
  }

  const value = {
    schemes: appliedSchemes,
    applyScheme: applyScheme,
  };

  return (
    <AppliedContext.Provider value={value}>{children}</AppliedContext.Provider>
  );
}
