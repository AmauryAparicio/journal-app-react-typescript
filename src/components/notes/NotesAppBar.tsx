import React, { ChangeEvent, FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { iAppState, iNote, iNotesState } from "./../../misc/Interfaces";
import { startSavenote, startUploading } from "./../../actions/notes";
import moment from "moment";

const NotesAppBar: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { active } = useSelector<iAppState>(
    ({ notes }) => notes
  ) as iNotesState;

  const handleSave = () => {
    dispatch(startSavenote(active as iNote));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      dispatch(startUploading(file));
    }
  };

  const handlePictureUpload = () => {
    (document.querySelector("#fileSelector") as HTMLInputElement).click();
  };

  const noteDate = moment((active as iNote).date);
  return (
    <div className="notes__appbar">
      <span>{noteDate.format("dddd, MMMM Do YYYY, h:mm:ss a")}</span>
      <input
        type="file"
        id="fileSelector"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div>
        <button className="btn" onClick={handlePictureUpload}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
