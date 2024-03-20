/* eslint-disable react/prop-types */
// import React from "react";

function CButtonProcess({ modal, modalTarget, action }) {
  return (
    <a
      type="button"
      className="text-primary bg-light-primary border-0 me-3"
      onClick={action}
      data-bs-toggle={modal}
      data-bs-target={modalTarget}
    >
      <i className="bx bx-refresh"></i>
    </a>
  );
}

export default CButtonProcess;
