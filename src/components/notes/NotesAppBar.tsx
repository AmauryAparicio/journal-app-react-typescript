import React, { FunctionComponent } from "react";

const NotesAppBar: FunctionComponent = () => {
  return (
    <div className="notes__appbar">
      <span>28 august 2020</span>
      <div>
        <button className="btn">Picture</button>
        <button className="btn">Save</button>
      </div>
    </div>
  );
};

export default NotesAppBar;
