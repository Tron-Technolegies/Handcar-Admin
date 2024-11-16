import React, { createContext, useState } from "react";

export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  return (
    <AdminContext.Provider value={{ setShowDeletePopup, showDeletePopup }}>
      {children}
    </AdminContext.Provider>
  );
}
