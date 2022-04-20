import { createContext, useState } from "react";

export const SchemesCountContext = createContext({
  count: 0,
  updateSchemesCount: () => {},
});

export default function SchemesCountContextProvider({ children }) {
  const [schemesCount, setSchemesCount] = useState(0);

  function updateSchemesCount(listLength) {
    setSchemesCount(listLength);
  }

  const value = {
    count: schemesCount,
    updateSchemesCount: updateSchemesCount,
  };

  return (
    <SchemesCountContext.Provider value={value}>
      {children}
    </SchemesCountContext.Provider>
  );
}
