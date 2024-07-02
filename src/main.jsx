import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import NotesContextProvider from "./components/context/NotesProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <NotesContextProvider>
         <App />
      </NotesContextProvider>
   </React.StrictMode>
);
