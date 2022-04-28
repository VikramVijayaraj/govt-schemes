import { createContext, useState } from "react";

export const AppliedContext = createContext();

export default function AppliedContextProvider({ children }) {
  const [appliedSchemes, setAppliedSchemes] = useState([]);

  function applyScheme() {}

  return <AppliedContext.Provider>{children}</AppliedContext.Provider>;
}
