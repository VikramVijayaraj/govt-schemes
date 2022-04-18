import { createContext, useState } from "react";

export const SchemesCountContext = createContext({
  schemesCount: 0,
  setSchemesCount: () => {},
});

export default function SchemesCountContextProvider({ children }) {
  const [schemesCount, setSchemesCount] = useState(0);

  const value = { schemesCount, setSchemesCount };

  return (
    <SchemesCountContext.Provider value={value}>
      {children}
    </SchemesCountContext.Provider>
  );
}
