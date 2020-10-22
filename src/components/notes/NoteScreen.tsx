import React, { FunctionComponent } from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen: FunctionComponent = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          name=""
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          name=""
          placeholder="What happened today?"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
