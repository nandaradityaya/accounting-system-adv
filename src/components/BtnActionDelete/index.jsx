/* eslint-disable react/prop-types */
// import React from "react";

function CButtonDelete({ modal, modalTarget, action }) {
  return (
    <a
      type="button"
      className="text-secondary bg-light-secondary border-0 me-3"
      onClick={action}
      data-bs-toggle={modal}
      data-bs-target={modalTarget}
    >
      {/* <i className="bx bxs-trash"></i> */}
      <i className="lni lni-close"></i>
    </a>
  );
}

export default CButtonDelete;
