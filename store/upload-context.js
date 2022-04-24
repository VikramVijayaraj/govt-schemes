import { createContext, useState } from "react";

export const UploadContext = createContext({
  files: [],
  uploadFile: (file) => {},
});

export default function UploadContextProvider({ children }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  function uploadFile(file) {
    setUploadedFiles((currentFiles) => [...currentFiles, file]);
  }

  const value = {
    files: uploadedFiles,
    uploadFile: uploadFile,
  };

  return (
    <UploadContext.Provider value={value}>{children}</UploadContext.Provider>
  );
}
