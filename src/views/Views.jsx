import React, { useContext } from "react";
import NotesSection from "../components/NotesSection/NotesSection";
import SecureBanner from "../components/Banner/SecureBanner";
import NotesContext from "../components/context/NotesContext";
const Views = () => {
   const { currentgroup } = useContext(NotesContext);
   return <>{currentgroup ? <NotesSection /> : <SecureBanner />}</>;
};

export default Views;
