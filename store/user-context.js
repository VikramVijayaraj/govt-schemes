import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userData, setUserData] = useState({
    email: "",
    uid: "",
    // applied: {},
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    category: "",
    maritalStatus: "",
    pwdStatus: "",
    beneficiaryType: "",
  });

  const value = { userData, setUserData };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
