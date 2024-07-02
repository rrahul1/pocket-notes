import React, { useState } from "react";
import NotesContext from "./NotesContext";

const NotesContextProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [backgroundColor, setBackgroundColor] = useState("");
   const [currentgroup, setCurrentGroup] = useState("");
   const [notes, hideNotes] = useState(false);
   return (
      <NotesContext.Provider
         value={{
            user,
            setUser,
            backgroundColor,
            setBackgroundColor,
            currentgroup,
            setCurrentGroup,
            hideNotes,
            notes,
         }}
      >
         {children}
      </NotesContext.Provider>
   );
};

export default NotesContextProvider;
