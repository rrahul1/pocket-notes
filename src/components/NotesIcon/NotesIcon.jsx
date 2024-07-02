import { useContext, useState } from "react";
import NotesContext from "../context/NotesContext";
import "./NotesIcon.css";

const NotesIcon = () => {
   const { setCurrentGroup, hideNotes } = useContext(NotesContext);
   const [active, Setactive] = useState("");

   const getInitials = (name) => {
      let take = name.substring(0, 1);

      const spacePos = name.indexOf(" ");
      if (spacePos !== -1) {
         take += name[spacePos + 1];
      }

      return take.toUpperCase();
   };

   const formatUsername = (name) => {
      let take = name[0].toUpperCase();
      for (let i = 1; i < name.length; i++) {
         if (name[i - 1] === " ") {
            take += name[i].toUpperCase();
         } else {
            take += name[i];
         }
      }
      return take;
   };
   const handleclick = (e, group) => {
      hideNotes(false);
      Setactive(group.name);
      setCurrentGroup(allGroup.find((item) => item.name === group.name));
   };

   const allGroup = JSON.parse(localStorage.getItem("groups"));

   return (
      <div className="container1">
         <div className="left">
            {allGroup &&
               allGroup.map((group) => (
                  <div
                     key={group.name}
                     onClick={(e) => handleclick(e, group)}
                     className={`profile-container ${
                        group.name === active ? "group active" : "group"
                     }`}
                  >
                     <div
                        className="profile-icon"
                        style={{ backgroundColor: group.color }}
                     >
                        <span>{getInitials(group.name)}</span>
                     </div>
                     <p>{formatUsername(group.name)}</p>
                  </div>
               ))}
         </div>
      </div>
   );
};

export default NotesIcon;
