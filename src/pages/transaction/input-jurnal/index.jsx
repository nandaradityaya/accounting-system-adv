// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButtonDelete from "../../../components/BtnActionDelete";
import CButtonEdit from "../../../components/BtnActionEdit";
import CButton from "../../../components/Button";
import CButtonViewDetail from "../../../components/ButtonViewDetail";
import CCard from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CDataTable from "../../../components/DataTable";
import BadgeStatus from "../../../components/Badge";
import SelectTwo from "../../../components/Select2";

export default function InputJurnal() {
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
      name: "No. Jurnal",
      selector: (row) => row.noJurnal,
      sortable: true,
    },
    {
      name: "Jurnal Date",
      selector: (row) => row.jurnalDate,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Period",
      selector: (row) => row.period,
      sortable: true,
    },
    {
      name: "Debet",
      selector: (row) => row.debet,
      sortable: true,
    },
    {
      name: "Credit",
      selector: (row) => row.credit,
      sortable: true,
    },
    {
      name: "No. Ref",
      selector: (row) => row.noRef,
      sortable: true,
    },
    {
      name: "Reverse Date",
      selector: (row) => row.reverseDate,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => <BadgeStatus status={row.status} />,
    },
    {
      name: "View Detail",
      cell: () => (
        <CButtonViewDetail
          action={() => navigate("/transaction/input-jurnal/9090")}
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
          <CButtonEdit modal={"modal"} modalTarget={"#editLookup"} />
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
      noJurnal: "JNH/11/23010001",
      jurnalDate: "01/01/2024",
      year: "2024",
      period: "1",
      debet: "179.098.519",
      credit: "245.877.234",
      noRef: "Import",
      reverseDate: "",
      status: "Posting",
    },
  ];

  const handleFilter = (e) => {
    const value = e.target.value || "";
    setFilterText(value);
  };

  const filteredItems = data.filter(
    (item) =>
      item.company.toLowerCase().includes(filterText.toLowerCase()) ||
      item.noJurnal.toLowerCase().includes(filterText.toLowerCase()) ||
      item.jurnalDate.toLowerCase().includes(filterText.toLowerCase()) ||
      item.year.toLowerCase().includes(filterText.toLowerCase()) ||
      item.period.toLowerCase().includes(filterText.toLowerCase()) ||
      item.debet.toLowerCase().includes(filterText.toLowerCase()) ||
      item.credit.toLowerCase().includes(filterText.toLowerCase()) ||
      item.noRef.toLowerCase().includes(filterText.toLowerCase()) ||
      item.reverseDate.toLowerCase().includes(filterText.toLowerCase()) ||
      item.status.toLowerCase().includes(filterText.toLowerCase())
  );

  const optionCompany = [
    { value: "adv", label: "PT. Advantage SCM" },
    { value: "makmur", label: "PT. Makmur" },
  ];

  const [selectedCompany, setselectedCompany] = useState(null);

  const handleChangeCompany = (selectedCompany) => {
    setselectedCompany(selectedCompany);
    console.log(`Option selected:`, selectedCompany);
  };

  const optionPeriod = [
    { value: "1", label: "01 - Period 01 Jan 2024 to 31 Jan 2024" },
    { value: "2", label: "02 - Period 01 Feb 2024 to 31 Feb 2024" },
  ];

  const [selectedPeriod, setselectedPeriod] = useState(null);

  const handleChangePeriod = (selectedPeriod) => {
    setselectedPeriod(selectedPeriod);
    console.log(`Option selected:`, selectedPeriod);
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Master"}
            textSecond={"Input Journal"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <div>
                  <h5 className="font-weight-bold mb-0">List Lookup</h5>
                </div>
                <div className="ms-auto mt-2">
                  <CButton
                    className={"btn btn-primary d-flex align-items-center"}
                    modal={"modal"}
                    modalTarget={"#addNewJurnal"}
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

        {/* MODAL ADD NEW */}
        <div
          className="modal fade"
          id="addNewJurnal"
          tabIndex={-1}
          aria-labelledby="addNewJurnalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addNewJurnalLabel">
                  Add New Jurnal
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 col-lg-12 mb-3">
                    <SelectTwo
                      label={"Company"}
                      value={selectedCompany}
                      onChange={handleChangeCompany}
                      options={optionCompany}
                      isClearable={true}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"No. Jurnal"}
                      type={"text"}
                      className={"form-control"}
                      id={"noJurnal"}
                      placeholder={"No. Jurnal..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Jurnal Date"}
                      type={"date"}
                      className={"form-control"}
                      id={"jurnalDate"}
                      placeholder={"Jurnal Date..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Fiskal Year"}
                      type={"text"}
                      className={"form-control"}
                      id={"fiskalYear"}
                      placeholder={"Fiskal Year..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <SelectTwo
                      label={"Period"}
                      value={selectedPeriod}
                      onChange={handleChangePeriod}
                      options={optionPeriod}
                      isClearable={true}
                    />
                  </div>
                  <div className="col-12 col-lg-12 mb-3">
                    <TextInput
                      label={"Reference"}
                      type={"text"}
                      className={"form-control"}
                      id={"reference"}
                      placeholder={"Reference..."}
                    />
                  </div>
                  <div className="col-12 col-lg-12 mb-3">
                    <TextInput
                      label={"Reverse Date"}
                      type={"date"}
                      className={"form-control"}
                      id={"reverseDate"}
                      placeholder={"Reverse Date..."}
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
                <CButton className={"btn btn-primary"}>Save</CButton>
              </div>
            </div>
          </div>
        </div>
        {/* END MODAL ADD NEW */}

        {/* MODAL EDIT */}
        <div
          className="modal fade"
          id="editLookup"
          tabIndex={-1}
          aria-labelledby="editLookupLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editLookupLabel">
                  Edit Lookup Code
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 col-lg-12 mb-3">
                    <SelectTwo
                      label={"Company"}
                      value={selectedCompany}
                      onChange={handleChangeCompany}
                      options={optionCompany}
                      isClearable={true}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"No. Jurnal"}
                      type={"text"}
                      className={"form-control"}
                      id={"noJurnal"}
                      placeholder={"No. Jurnal..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Jurnal Date"}
                      type={"date"}
                      className={"form-control"}
                      id={"jurnalDate"}
                      placeholder={"Jurnal Date..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Fiskal Year"}
                      type={"text"}
                      className={"form-control"}
                      id={"fiskalYear"}
                      placeholder={"Fiskal Year..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <SelectTwo
                      label={"Period"}
                      value={selectedPeriod}
                      onChange={handleChangePeriod}
                      options={optionPeriod}
                      isClearable={true}
                    />
                  </div>
                  <div className="col-12 col-lg-12 mb-3">
                    <TextInput
                      label={"Reference"}
                      type={"text"}
                      className={"form-control"}
                      id={"reference"}
                      placeholder={"Reference..."}
                    />
                  </div>
                  <div className="col-12 col-lg-12 mb-3">
                    <TextInput
                      label={"Reverse Date"}
                      type={"date"}
                      className={"form-control"}
                      id={"reverseDate"}
                      placeholder={"Reverse Date..."}
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
                <CButton className={"btn btn-primary"}>Save</CButton>
              </div>
            </div>
          </div>
        </div>
        {/* MODAL EDIT */}

        {/* MODAL DELETE */}
        <div
          className="modal fade"
          id="deleteData"
          tabIndex={-1}
          aria-labelledby="deleteDataLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteDataLabel">
                  Delete Data
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <h6>Are you sure want to delete this data?</h6>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <CButton className={"btn btn-danger"}>Delete</CButton>
              </div>
            </div>
          </div>
        </div>
        {/* MODAL Delete */}
      </div>
    </>
  );
}
