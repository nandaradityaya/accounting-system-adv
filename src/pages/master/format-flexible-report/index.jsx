// import React from "react";
// import DataTable from "react-data-table-component";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButtonDelete from "../../../components/BtnActionDelete";
import CButtonEdit from "../../../components/BtnActionEdit";
import CButton from "../../../components/Button";
import CButtonViewDetail from "../../../components/ButtonViewDetail";
import CCard from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SelectTwo from "../../../components/Select2";
import CDataTable from "../../../components/DataTable";

export default function FormatFlexibleReport() {
  const navigate = useNavigate();
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
      name: "ID Report",
      selector: (row) => row.idReport,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "View Detail",
      cell: () => (
        <CButtonViewDetail
          action={() => navigate("/master/format-flexible-report/8080")}
        />
      ),
      sortable: false,
      // button: true, // Set button property to true
      ignoreRowClick: true,
      allowOverflow: true,
    },
    {
      name: "Action",
      sortable: false,
      cell: () => (
        <div className="d-flex order-actions">
          <CButtonEdit modal={"modal"} modalTarget={"#editReport"} />
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
      idReport: "BS_SUB_GL",
      type: "Neraca",
      title: "BS SUB GL",
    },
    {
      id: 2,
      no: 2,
      company: "PT. Makmur",
      idReport: "PL_SUB",
      type: "Laba/Rugi",
      title: "Profit & Lost",
    },
  ];

  const handleFilter = (e) => {
    const value = e.target.value || "";
    setFilterText(value);
  };

  const filteredItems = data.filter(
    (item) =>
      item.company.toLowerCase().includes(filterText.toLowerCase()) ||
      item.idReport.toLowerCase().includes(filterText.toLowerCase()) ||
      item.type.toLowerCase().includes(filterText.toLowerCase()) ||
      item.title.toLowerCase().includes(filterText.toLowerCase())
  );

  const optionCompany = [
    { value: "11", label: "PT. Advantage SCM" },
    { value: "12", label: "PT. Lorem Ipsum" },
  ];

  const [selectedCompany, setselectedCompany] = useState(null);

  const handleChangeCompany = (selectedCompany) => {
    setselectedCompany(selectedCompany);
    console.log(`Option selected:`, selectedCompany);
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Master"}
            textSecond={"Format Flexible Report"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div>
                  <h5 className="font-weight-bold mb-0">
                    Format Flexible Report
                  </h5>
                </div>
                <div className="ms-auto mt-2">
                  <CButton
                    className={"btn btn-primary d-flex align-items-center"}
                    action={() =>
                      navigate(
                        "/master/format-flexible-report/add-new-format-flexible-report"
                      )
                    }
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

        {/* MODAL EDIT */}
        <div
          className="modal fade"
          id="editReport"
          tabIndex={-1}
          aria-labelledby="editReportLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editReportLabel">
                  Edit Report
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
                  <SelectTwo
                    label={"Company"}
                    value={selectedCompany}
                    onChange={handleChangeCompany}
                    options={optionCompany}
                    isClearable={true}
                    placeholder={"Select Company..."}
                  />
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6 mb-3">
                    <label className="form-label">Report Type</label>
                    <select className="form-select" aria-label="Default">
                      <option selected>Select...</option>
                      <option value="normal">Normal</option>
                      <option value="costcenter">Cost Center</option>
                    </select>
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"ID Report"}
                      type={"text"}
                      className={"form-control"}
                      id={"idReport"}
                      placeholder={"ID Report..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Title Report"}
                      type={"text"}
                      className={"form-control"}
                      id={"titleReport"}
                      placeholder={"Title Report..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Total Column"}
                      type={"number"}
                      className={"form-control"}
                      id={"totalColumn"}
                      placeholder={"Total Column..."}
                    />
                  </div>
                  <div className="col-12 col-lg-12 mb-3">
                    <label className="form-label">Period</label>
                    <select className="form-select" aria-label="Default">
                      <option selected>Select...</option>
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                    </select>
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
                <CButton className={"btn btn-primary"}>Save</CButton>
              </div>
            </div>
          </div>
        </div>
        {/* MODAL EDIT */}

        {/* MODAL DELETE */}
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
