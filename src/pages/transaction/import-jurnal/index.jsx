// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButtonDelete from "../../../components/BtnActionDelete";
import CButtonEdit from "../../../components/BtnActionEdit";
import CButton from "../../../components/Button";
import CCard from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import { useState } from "react";
import CDataTable from "../../../components/DataTable";
import SelectTwo from "../../../components/Select2";

export default function ImportJournal() {
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
      name: "Fiskal Year",
      selector: (row) => row.fiskalYear,
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
      name: "Create By",
      selector: (row) => row.createdBy,
      sortable: true,
    },
    {
      name: "Create Date",
      selector: (row) => row.createdDate,
      sortable: true,
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
      fiskalYear: "01/01/2024",
      debet: "179.098.519",
      credit: "245.877.234",
      createdBy: "Nanda",
      createdDate: "19/03/2024",
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
      item.fiskalYear.toLowerCase().includes(filterText.toLowerCase()) ||
      item.debet.toLowerCase().includes(filterText.toLowerCase()) ||
      item.credit.toLowerCase().includes(filterText.toLowerCase()) ||
      item.createdBy.toLowerCase().includes(filterText.toLowerCase()) ||
      item.createdDate.toLowerCase().includes(filterText.toLowerCase())
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

  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Master"}
            textSecond={"Import Journal"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <div>
                  <h5 className="font-weight-bold mb-0">List Journal</h5>
                </div>
                <div className="ms-auto mt-2">
                  <CButton
                    className={"btn btn-primary d-flex align-items-center"}
                    modal={"modal"}
                    modalTarget={"#addNewJournal"}
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
          id="addNewJournal"
          tabIndex={-1}
          aria-labelledby="addNewJournalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addNewJournalLabel">
                  Add New Journal
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
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    label={"Import"}
                    type={"file"}
                    className={"form-control mb-1"}
                    id={"formFile"}
                    placeholder={"Import..."}
                  />
                  <div>
                    Download template{" "}
                    <u type="button" className="text-primary">
                      Here
                    </u>
                  </div>
                </div>
                <div className="mb-3">
                  Notes:
                  <ul>
                    <li>The imported file must be an Excel file (xlsx)</li>
                    <li>
                      The imported Excel file ensures that there are no hidden
                      rows
                    </li>
                    <li>The imported excel file must match the template</li>
                    <li>
                      Date format must be dd/mm/yyyy and make sure the text
                      format
                    </li>
                  </ul>
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
                  Edit Journal
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
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    label={"Import"}
                    type={"file"}
                    className={"form-control mb-1"}
                    id={"formFile"}
                    placeholder={"Import..."}
                  />
                  <div>
                    Download template{" "}
                    <u type="button" className="text-primary">
                      Here
                    </u>
                  </div>
                </div>
                <div className="mb-3">
                  Notes:
                  <ul>
                    <li>The imported file must be an Excel file (xlsx)</li>
                    <li>
                      The imported Excel file ensures that there are no hidden
                      rows
                    </li>
                    <li>The imported excel file must match the template</li>
                    <li>
                      Date format must be dd/mm/yyyy and make sure the text
                      format
                    </li>
                  </ul>
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
