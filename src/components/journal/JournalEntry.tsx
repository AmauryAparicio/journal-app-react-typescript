import React, { FunctionComponent } from "react";
import { iNote } from "../../misc/Interfaces";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

const JournalEntry: FunctionComponent<iNote> = ({
  id,
  date,
  title,
  body,
  imageUrl,
}) => {
  const dispatch = useDispatch();
  const noteDate = moment(date);

  const handleEntryClick = () => {
    dispatch(activeNote(id, { title, date, body, imageUrl }));
  };

  return (
    <div
      className="journal__entry pointer animate__animated animate__backInLeft animate__faster"
      onClick={handleEntryClick}
    >
      {imageUrl && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("Do")}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
