/* eslint-disable react/prop-types */
// import React from "react";

function CButtonEdit({ modal, modalTarget, action }) {
  return (
    <a
      type="button"
      className="text-primary bg-light-primary border-0 me-3"
      onClick={action}
      data-bs-toggle={modal}
      data-bs-target={modalTarget}
    >
      <i className="bx bxs-edit"></i>
    </a>
  );
}

export default CButtonEdit;
