// import React from "react";
import DataTable from "react-data-table-component";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButtonDelete from "../../../components/BtnActionDelete";
import CButtonEdit from "../../../components/BtnActionEdit";
import CButton from "../../../components/Button";
import CCard from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import { useState } from "react";
import SelectTwo from "../../../components/Select2";

export default function Period() {
  const [filterText, setFilterText] = useState("");
  const columns = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "Company",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "Fiskal Year",
      selector: (row) => row.fiskalYear,
      sortable: true,
    },
    {
      name: "Period",
      selector: (row) => row.period,
      sortable: true,
    },
    {
      name: "No. Period",
      selector: (row) => row.noPeriod,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "End Date",
      selector: (row) => row.endDate,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <div
          className={`badge rounded-pill text-${getStatusColor(
            row.status
          )} bg-light-${getStatusColor(row.status)} p-2 text-uppercase px-3`}
        >
          {row.status}
        </div>
      ),
    },
    {
      name: "Fiskal Status",
      selector: (row) => row.fiskalStatus,
      sortable: true,
      cell: (row) => (
        <div
          className={`badge rounded-pill text-${getStatusColor(
            row.fiskalStatus
          )} bg-light-${getStatusColor(
            row.fiskalStatus
          )} p-2 text-uppercase px-3`}
        >
          {row.fiskalStatus}
        </div>
      ),
    },
    {
      name: "Action",
      sortable: false,
      cell: () => (
        <div className="d-flex order-actions">
          <CButtonEdit modal={"modal"} modalTarget={"#editDocument"} />
          <CButtonDelete modal={"modal"} modalTarget={"#deleteData"} />
        </div>
      ),
      //   button: true, // Set button property to true
      ignoreRowClick: true,
      allowOverflow: true,
    },
  ];

  const data = [
    {
      id: 1,
      no: 1,
      company: "PT. Advantage SCM",
      fiskalYear: "2021",
      period: "Maret",
      noPeriod: "12",
      startDate: "12",
      endDate: "12",
      status: "Open",
      fiskalStatus: "Active",
    },
  ];
  const getStatusColor = (status) => {
    return status === "Active" || status == "Open" ? "primary" : "secondary";
  };

  const handleFilter = (e) => {
    const value = e.target.value || "";
    setFilterText(value);
  };

  const filteredItems = data.filter(
    (item) =>
      item.company.toLowerCase().includes(filterText.toLowerCase()) ||
      item.fiskalYear.toLowerCase().includes(filterText.toLowerCase()) ||
      item.period.toLowerCase().includes(filterText.toLowerCase()) ||
      item.noPeriod.toLowerCase().includes(filterText.toLowerCase()) ||
      item.startDate.toLowerCase().includes(filterText.toLowerCase()) ||
      item.endDate.toLowerCase().includes(filterText.toLowerCase()) ||
      item.status.toLowerCase().includes(filterText.toLowerCase()) ||
      item.fiskalStatus.toLowerCase().includes(filterText.toLowerCase())
  );

  const options = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb textFirst={"Master"} textSecond={"Period"}></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <div>
                  <h5 className="font-weight-bold mb-0">List of Period</h5>
                </div>
                <div className="ms-auto mt-2">
                  <CButton
                    className={
                      "btn btn-primary radius-8 d-flex align-items-center"
                    }
                    modal={"modal"}
                    modalTarget={"#addNewPeriod"}
                  >
                    <i className="bx bx-plus"></i>Add New
                  </CButton>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-4">
                  <TextInput
                    label={"Search"}
                    type={"text"}
                    className={"form-control mb-3"}
                    onChange={handleFilter}
                  />
                </div>
              </div>
              <div className="table-responsive">
                <DataTable
                  columns={columns}
                  data={filteredItems}
                  pagination
                  highlightOnHover
                />
              </div>
            </div>
          </CCard>
        </div>

        <div
          className="modal fade"
          id="addNewPeriod"
          tabIndex={-1}
          aria-labelledby="addNewPeriodLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addNewPeriodLabel">
                  Add New Period
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <TextInput
                    label={"Company"}
                    type={"text"}
                    className={"form-control"}
                    id={"company"}
                    placeholder={"Company..."}
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    label={"Fiskal Year"}
                    type={"text"}
                    className={"form-control"}
                    id={"fiskalYear"}
                    placeholder={"Fiskal Year..."}
                  />
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6 mb-3">
                    <SelectTwo
                      label={"Status"}
                      value={selectedOption}
                      onChange={handleChange}
                      options={options}
                      isClearable={true}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"No. Period"}
                      type={"number"}
                      className={"form-control"}
                      id={"noPeriod"}
                      placeholder={"No. Period..."}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
