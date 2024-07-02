import GroupedNotes from "./components/Group/GroupedNotes";
import Modal from "./components/GroupModal/Modal";
import Views from "./views/Views";
import { useState, useContext } from "react";
import NotesContext from "./components/context/NotesContext";
function App() {
   const { notes } = useContext(NotesContext);

   const [isModalOpen, setIsModalOpen] = useState(false);
   const open = () => {
      setIsModalOpen(true);
   };
   const close = () => {
      setIsModalOpen(false);
   };

   return (
      <div className="maindiv" style={{ display: "flex", width: "100%" }}>
         <GroupedNotes open={open} />
         {!notes && <Views />}
         {isModalOpen && (
            <Modal close={close} setIsModalOpen={setIsModalOpen} />
         )}
      </div>
   );
}

export default App;
