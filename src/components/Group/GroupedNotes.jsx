import React from "react";
import NotesIcon from "../NotesIcon/NotesIcon";
import "./GroupedNotes.css";

const GroupedNotes = ({ open }) => {
   return (
      <div className="leftcontainer">
         <h1 className="title" style={{ marginTop: "35px" }}>
            Pocket Notes
         </h1>
         <div className="create-grp" onClick={open}>
            + Create Notes Group
         </div>
         <NotesIcon />
      </div>
   );
};

export default GroupedNotes;
