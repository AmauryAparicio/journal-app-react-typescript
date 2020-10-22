import React, { FunctionComponent } from "react";
import NoteScreen from "../notes/NoteScreen";
import Sidebar from "./Sidebar";

const JournalScreen: FunctionComponent = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        <NoteScreen />
      </main>
    </div>
  );
};

export default JournalScreen;
