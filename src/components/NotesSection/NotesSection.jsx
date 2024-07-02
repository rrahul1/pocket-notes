import { useContext, useState, useRef, useEffect } from "react";
import UserContext from "../context/NotesContext";
import { IoMdSend } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import dayjs from "dayjs";
import "../NotesSection/NotesStyle.css";

const NotesSection = () => {
   const { currentgroup, hideNotes } = useContext(UserContext);
   const [noteText, setNoteText] = useState("");
   const ref = useRef();

   const getInitials = (name) => {
      if (!name) return;
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

   const groups = JSON.parse(localStorage.getItem("groups"));
   let group = groups?.find((item) => item.name === currentgroup.name);
   const handleNotes = () => {
      if (noteText.length <= 0) {
         return;
      }
      const note = {
         text: noteText,
         date: dayjs().format("D MMM YYYY"),
         time: dayjs().format("hh:mm A"),
      };

      group.notes = [...group.notes, note];
      localStorage.setItem("groups", JSON.stringify(groups));
      setNoteText("");
   };

   useEffect(() => {
      if (noteText.length > 0) {
         ref.current.style.color = "blue";
         ref.current.disabled = false;
      } else {
         ref.current.style.color = "gray";
         ref.current.disabled = true;
      }
   }, [noteText]);

   return (
      <div className="notes-section">
         <div className="notes-header">
            <FaArrowLeft className="arrow" onClick={() => hideNotes(true)} />
            <div
               className="profile"
               style={{ backgroundColor: currentgroup.color }}
            >
               {getInitials(currentgroup.name)}
            </div>
            <div className="group-name">
               {formatUsername(currentgroup.name)}
            </div>
         </div>
         <div className="notes-body">
            {group &&
               group.notes &&
               group.notes.map((item, idx) => (
                  <div key={idx} className="note-body">
                     <div className="note-time">
                        <div className="">{item.time}</div>
                        <div className="">{item.date} </div>
                     </div>
                     <p>{item.text}</p>
                  </div>
               ))}
         </div>

         <div className="notes-input">
            <textarea
               cols="30"
               rows="10"
               placeholder="Enter your text here.........."
               value={noteText}
               onChange={(e) => setNoteText(e.target.value)}
            ></textarea>
            <span className="send" ref={ref}>
               <IoMdSend onClick={handleNotes} />
            </span>
         </div>
      </div>
   );
};

export default NotesSection;
