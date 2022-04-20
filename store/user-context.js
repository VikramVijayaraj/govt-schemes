import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userData, setUserData] = useState({
    email: "",
    uid: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    category: "",
    maritalStatus: "",
    pwdStatus: "",
  });

  const value = { userData, setUserData };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
