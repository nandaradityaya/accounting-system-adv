/* eslint-disable react/prop-types */
// import React from "react";

function TextArea({
  label,
  type,
  className,
  id,
  placeholder,
  value,
  onChange,
  rows,
}) {
  return (
    <>
      <label className="form-label">{label}</label>
      <textarea
        type={type}
        className={className}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
      />
    </>
  );
}

export default TextArea;
