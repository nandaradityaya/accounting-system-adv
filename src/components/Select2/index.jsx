/* eslint-disable react/prop-types */
import Select from "react-select";

function SelectTwo({
  label,
  value,
  onChange,
  options,
  isClearable,
  placeholder,
}) {
  return (
    <>
      <label className="form-label">{label}</label>
      <Select
        value={value}
        onChange={onChange}
        options={options}
        isClearable={isClearable}
        placeholder={placeholder}
      />
    </>
  );
}

export default SelectTwo;
