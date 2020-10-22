import React, { FunctionComponent } from "react";

const NothingSelected: FunctionComponent = () => {
  return (
    <div className="nothing__main-content">
      <p>
        Select something...
        <br />
        Or
        <br />
        Create an entry!
      </p>
      <i className="far fa-star fa-4x mt-5"></i>
    </div>
  );
};

export default NothingSelected;
