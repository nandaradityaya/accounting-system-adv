/* eslint-disable react/prop-types */
// import React from "react";

function CButtonViewDetail({ action }) {
  return (
    <button
      type="button"
      className="btn btn-primary btn-sm radius-30 px-4"
      onClick={action}
    >
      View Detail
    </button>
  );
}

export default CButtonViewDetail;
