import React, { FunctionComponent } from "react";
import NoteScreen from "../notes/NoteScreen";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { iAppState } from "../../misc/Interfaces";
import { iNotesState } from "./../../misc/Interfaces";
import NothingSelected from "./NothingSelected";

const JournalScreen: FunctionComponent = () => {
  const { active } = useSelector<iAppState>(
    ({ notes }) => notes
  ) as iNotesState;

  return (
    <div className="journal__main-content animate__animated animate__fadeIn">
      <Sidebar />
      <main>{active ? <NoteScreen /> : <NothingSelected />}</main>
    </div>
  );
};

export default JournalScreen;
