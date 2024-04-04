/* eslint-disable react/prop-types */
// import React from "react";
// import { Button } from "react-bootstrap";

function CButton({
  children,
  action,
  loading,
  disabled,
  className,
  modal,
  modalTarget,
  type,
}) {
  return (
    <button
      type={type}
      className={`radius-6 ${className}`}
      onClick={action}
      disabled={disabled}
      data-bs-toggle={modal}
      data-bs-target={modalTarget}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
export default CButton;
