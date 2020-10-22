import React, { FunctionComponent } from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen: FunctionComponent = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
    </div>
  );
};

export default NoteScreen;
