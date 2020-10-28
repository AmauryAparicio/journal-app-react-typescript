import React, { FunctionComponent } from "react";
import JournalEntry from "./JournalEntry";
import { useSelector } from "react-redux";
import { iAppState, iNote, iNotesState } from "../../misc/Interfaces";

const JournalEntries: FunctionComponent = () => {
  const { notes } = useSelector<iAppState>(({ notes }) => notes) as iNotesState;
  return (
    <div className="journal__entries">
      {(notes as Array<iNote>).map((note) => (
        <JournalEntry key={note.id} {...note} />
      ))}
    </div>
  );
};

export default JournalEntries;
