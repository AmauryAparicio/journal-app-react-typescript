import React, { FunctionComponent } from "react";
import JournalEntry from "./JournalEntry";

const JournalEntries: FunctionComponent = () => {
  const entries = [1, 2, 3, 4, 5, 6];
  return (
    <div className="journal__entries">
      {entries.map((value) => (
        <JournalEntry key={value} />
      ))}
    </div>
  );
};

export default JournalEntries;
