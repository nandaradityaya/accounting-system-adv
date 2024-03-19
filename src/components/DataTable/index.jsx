/* eslint-disable react/prop-types */
// import React from "react";
import TextInput from "../TextInput";
import DataTable from "react-data-table-component";

function CDataTable({ onChange, columns, data }) {
  return (
    <>
      <div className="row">
        <div className="col-12 col-lg-4">
          <TextInput
            label={"Search"}
            type={"text"}
            className={"form-control mb-3"}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="table-responsive">
        <DataTable columns={columns} data={data} pagination highlightOnHover />
      </div>
    </>
  );
}

export default CDataTable;
