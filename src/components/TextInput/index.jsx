/* eslint-disable react/prop-types */
// import React from "react";

function TextInput({
  label,
  type,
  className,
  id,
  placeholder,
  value,
  onChange,
}) {
  return (
    <>
      <label className="form-label">{label}</label>
      <input
        type={type}
        className={className}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default TextInput;
