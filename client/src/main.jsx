import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App.jsx";
import AdminContextProvider from "./AdminContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdminContextProvider>
      <ToastContainer position="top-center" />
      <App />
    </AdminContextProvider>
  </StrictMode>
);
