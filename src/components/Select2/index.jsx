/* eslint-disable react/prop-types */
import Select from "react-select";

function SelectTwo({ label, value, onChange, options, isClearable }) {
  return (
    <>
      <label className="form-label">{label}</label>
      <Select
        value={value}
        onChange={onChange}
        options={options}
        isClearable={isClearable}
      />
    </>
  );
}

export default SelectTwo;
