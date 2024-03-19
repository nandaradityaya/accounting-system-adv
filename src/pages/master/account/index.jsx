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

export default function Account() {
  const [filterText, setFilterText] = useState("");
  const columns = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "No. Account",
      selector: (row) => row.noAccount,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Account Type",
      selector: (row) => row.accountType,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => <BadgeStatus status={row.status} />,
    },
    {
      name: "Action",
      sortable: false,
      cell: () => (
        <div className="d-flex order-actions">
          <CButtonEdit modal={"modal"} modalTarget={"#editData"} />
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
      noAccount: "111000",
      description: "BCA 397 301 1371 - GIRO",
      accountType: "ASSET",
      status: "Active",
    },
  ];

  const handleFilter = (e) => {
    const value = e.target.value || "";
    setFilterText(value);
  };

  const filteredItems = data.filter(
    (item) =>
      item.noAccount.toLowerCase().includes(filterText.toLowerCase()) ||
      item.description.toLowerCase().includes(filterText.toLowerCase()) ||
      item.accountType.toLowerCase().includes(filterText.toLowerCase()) ||
      item.status.toLowerCase().includes(filterText.toLowerCase())
  );

  const optionAccountType = [
    { value: "Asset", label: "Asset" },
    { value: "Kewajiban", label: "Kewajiban" },
    { value: "Biaya", label: "Biaya" },
    { value: "Pendapatan", label: "Pendapatan" },
    { value: "Ekuitas", label: "Ekuitas" },
    { value: "Others", label: "Others" },
    { value: "LabaBerjalan", label: "Laba Berjalan" },
    { value: "LabaDitahan", label: "Laba Ditahan" },
  ];

  const [selectedAccountType, setselectedAccountType] = useState(null);

  const handleChangeAccountType = (selectedAccountType) => {
    setselectedAccountType(selectedAccountType);
    console.log(`Option selected:`, selectedAccountType);
  };

  const optionTransactionType = [
    { value: "Debet", label: "Debet" },
    { value: "Credit", label: "Credit" },
  ];

  const [selectedTransactionType, setselectedTransactionType] = useState(null);

  const handleChangeTransactionType = (selectedTransactionType) => {
    setselectedTransactionType(selectedTransactionType);
    console.log(`Option selected:`, selectedTransactionType);
  };

  const optionGroupConsole = [
    { value: "g0048", label: "G0048 • Pajak Penghasilan" },
    { value: "g0028", label: "G0028 • Hutang Jangka Panjang Lainnya" },
    { value: "g0001", label: "G0001 • Kas dan Setara Kas" },
    { value: "g0002", label: "G0002 • Piutang - Netto" },
  ];

  const [selectedGroupConsole, setselectedGroupConsole] = useState(null);

  const handleChangeGroupConsole = (selectedGroupConsole) => {
    setselectedGroupConsole(selectedGroupConsole);
    console.log(`Option selected:`, selectedGroupConsole);
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Master"}
            textSecond={"Account"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <h5 className="font-weight-bold mb-0">List of Account</h5>
                </div>
                <div className="ms-auto mt-2">
                  <CButton
                    className={"btn btn-primary d-flex align-items-center"}
                    modal={"modal"}
                    modalTarget={"#addNewAccount"}
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

        {/* MODAL ADD NEW Account */}
        <div
          className="modal fade"
          id="addNewAccount"
          tabIndex={-1}
          aria-labelledby="addNewAccountLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addNewAccountLabel">
                  Add New Account
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
                    label={"No. Account"}
                    type={"number"}
                    className={"form-control"}
                    id={"noAccount"}
                    placeholder={"No. Account..."}
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    label={"Description"}
                    type={"text"}
                    className={"form-control"}
                    id={"description"}
                    placeholder={"Description..."}
                  />
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6 mb-3">
                    <SelectTwo
                      label={"Account Type"}
                      value={selectedAccountType}
                      onChange={handleChangeAccountType}
                      options={optionAccountType}
                      isClearable={true}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <SelectTwo
                      label={"Transaction Type"}
                      value={selectedTransactionType}
                      onChange={handleChangeTransactionType}
                      options={optionTransactionType}
                      isClearable={true}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <SelectTwo
                    label={"Status"}
                    value={selectedGroupConsole}
                    onChange={handleChangeGroupConsole}
                    options={optionGroupConsole}
                    isClearable={true}
                  />
                </div>
                <div className="row">
                  <div className="col-12 col-lg-4 mb-3">
                    <label className="form-label">Consolidation</label>
                    <select className="form-select" aria-label="Default">
                      <option selected>Select...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div className="col-12 col-lg-4 mb-3">
                    <label className="form-label">Default Cost Center</label>
                    <select className="form-select" aria-label="Default">
                      <option selected>Select...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div className="col-12 col-lg-4 mb-3">
                    <label className="form-label">Status</label>
                    <select className="form-select" aria-label="Default">
                      <option selected>Select...</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
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
          id="editData"
          tabIndex={-1}
          aria-labelledby="editDataLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editDataLabel">
                  Edit Account
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
                    label={"No. Account"}
                    type={"number"}
                    className={"form-control"}
                    id={"noAccount"}
                    placeholder={"No. Account..."}
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    label={"Description"}
                    type={"text"}
                    className={"form-control"}
                    id={"description"}
                    placeholder={"Description..."}
                  />
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6 mb-3">
                    <SelectTwo
                      label={"Account Type"}
                      value={selectedAccountType}
                      onChange={handleChangeAccountType}
                      options={optionAccountType}
                      isClearable={true}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <SelectTwo
                      label={"Transaction Type"}
                      value={selectedTransactionType}
                      onChange={handleChangeTransactionType}
                      options={optionTransactionType}
                      isClearable={true}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <SelectTwo
                    label={"Status"}
                    value={selectedGroupConsole}
                    onChange={handleChangeGroupConsole}
                    options={optionGroupConsole}
                    isClearable={true}
                  />
                </div>
                <div className="row">
                  <div className="col-12 col-lg-4 mb-3">
                    <label className="form-label">Consolidation</label>
                    <select className="form-select" aria-label="Default">
                      <option selected>Select...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div className="col-12 col-lg-4 mb-3">
                    <label className="form-label">Default Cost Center</label>
                    <select className="form-select" aria-label="Default">
                      <option selected>Select...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div className="col-12 col-lg-4 mb-3">
                    <label className="form-label">Status</label>
                    <select className="form-select" aria-label="Default">
                      <option selected>Select...</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
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
