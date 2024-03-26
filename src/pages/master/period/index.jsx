/* eslint-disable no-undef */
// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButtonDelete from "../../../components/BtnActionDelete";
import CButtonEdit from "../../../components/BtnActionEdit";
import CButton from "../../../components/Button";
import CCard from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import { useState } from "react";
import SelectTwo from "../../../components/Select2";
import BadgeStatus from "../../../components/Badge";
import CDataTable from "../../../components/DataTable";

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
      cell: (row) => <BadgeStatus status={row.status} />,
    },
    {
      name: "Fiskal Status",
      selector: (row) => row.fiskalStatus,
      sortable: true,
      cell: (row) => <BadgeStatus status={row.fiskalStatus} />,
    },
    {
      name: "Action",
      sortable: false,
      cell: () => (
        <div className="d-flex order-actions">
          <CButtonEdit modal={"modal"} modalTarget={"#editPeriod"} />
          <CButtonDelete modal={"modal"} modalTarget={"#inactiveData"} />
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

  const optionPeriod = [
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

  const [selectedPeriod, setselectedPeriod] = useState(null);

  const handleChange = (selectedPeriod) => {
    setselectedPeriod(selectedPeriod);
    console.log(`Option selected:`, selectedPeriod);
  };

  const optionStatus = [
    { value: "open", label: "Open" },
    { value: "closed", label: "Closed" },
  ];

  const [selectedStatus, setselectedStatus] = useState(null);

  const handleChangeStatus = (selectedStatus) => {
    setselectedStatus(selectedStatus);
    console.log(`Option selected:`, selectedStatus);
  };

  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState("");

  const handleYearChange = (e) => {
    let { value } = e.target;
    setSelectedYear(value);
    updateSelectedDate(selectedDate, selectedMonth, value);
  };

  const updateSelectedDate = (date, month, year) => {
    if (date && month && year) {
      let formats = [];
      const formattedDate = new Date(year, month - 1, date);
      setFinalDate(formattedDate.toISOString());
      const dt = new Date(formattedDate);
      formats.push({
        id: 1,
        label: "YYYY-MM-DD",
        date: dt.toISOString().slice(0, 10),
      });
      formats.push({
        id: 2,
        label: "MM/DD/YYYY",
        date: `${dt.getMonth() + 1}/${dt.getDate()}/${dt.getFullYear()}`,
      });
      formats.push({
        id: 3,
        label: "DD-MM-YYYY",
        date: `${dt.getDate()}-${dt.getMonth() + 1}-${dt.getFullYear()}`,
      });
      setFormats([...formats]);
    }
  };

  const renderYearOptions = () => {
    const yearOptions = [
      <option key={0} value={""} disabled>
        Select
      </option>,
    ];

    for (let i = currentYear; i >= 1900; i--) {
      yearOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return yearOptions;
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
                    className={"btn btn-primary d-flex align-items-center"}
                    modal={"modal"}
                    modalTarget={"#addNewPeriod"}
                  >
                    <i className="bx bx-plus"></i>Add New
                  </CButton>
                </div>
              </div>
              <CDataTable
                onChange={handleFilter}
                columns={columns}
                data={filteredItems}
              />
            </div>
          </CCard>
        </div>

        {/* MODAL ADD NEW PERIOD */}
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
                  <label className="form-label">Fiskal Year</label>
                  <select
                    className="form-select"
                    value={selectedYear}
                    onChange={handleYearChange}
                  >
                    {renderYearOptions()}
                  </select>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6 mb-3">
                    <SelectTwo
                      label={"Period"}
                      value={selectedPeriod}
                      onChange={handleChange}
                      options={optionPeriod}
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
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Start Date"}
                      type={"date"}
                      className={"form-control"}
                      id={"startDate"}
                      placeholder={"mm/dd/yyyy"}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"End Date"}
                      type={"date"}
                      className={"form-control"}
                      id={"endDate"}
                      placeholder={"mm/dd/yyyy"}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <SelectTwo
                    label={"Status"}
                    value={selectedStatus}
                    onChange={handleChangeStatus}
                    options={optionStatus}
                    isClearable={true}
                  />
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
        {/* END MODAL */}

        {/* MODAL EDIT */}
        <div
          className="modal fade"
          id="editPeriod"
          tabIndex={-1}
          aria-labelledby="editPeriodLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editPeriodLabel">
                  Edit Period
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
                  <label className="form-label">Fiskal Year</label>
                  <select
                    className="form-select"
                    value={selectedYear}
                    onChange={handleYearChange}
                  >
                    {renderYearOptions()}
                  </select>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6 mb-3">
                    <SelectTwo
                      label={"Period"}
                      value={selectedPeriod}
                      onChange={handleChange}
                      options={optionPeriod}
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
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Start Date"}
                      type={"date"}
                      className={"form-control"}
                      id={"startDate"}
                      placeholder={"mm/dd/yyyy"}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"End Date"}
                      type={"date"}
                      className={"form-control"}
                      id={"endDate"}
                      placeholder={"mm/dd/yyyy"}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <SelectTwo
                    label={"Status"}
                    value={selectedStatus}
                    onChange={handleChangeStatus}
                    options={optionStatus}
                    isClearable={true}
                  />
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
        {/* END MODAL */}

        {/* MODAL Delete */}
        <div
          className="modal fade"
          id="inactiveData"
          tabIndex={-1}
          aria-labelledby="inactiveDataLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="inactiveDataLabel">
                  Inactive Data
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <h6>Are you sure want to inactive this data?</h6>
              </div>
              <div className="modal-footer">
                <CButton className={"btn btn-outline-secondary"}>
                  Inactive
                </CButton>
              </div>
            </div>
          </div>
        </div>
        {/* MODAL Delete */}
      </div>
    </>
  );
}
