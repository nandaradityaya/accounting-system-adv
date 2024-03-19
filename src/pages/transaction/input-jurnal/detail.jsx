// import React from "react";
import { useParams } from "react-router-dom";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButtonDelete from "../../../components/BtnActionDelete";
import CButtonEdit from "../../../components/BtnActionEdit";
import CButton from "../../../components/Button";
import CCard from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import { useState } from "react";
import CDataTable from "../../../components/DataTable";
import SelectTwo from "../../../components/Select2";

export default function InputJournalDetail() {
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
      name: "Name",
      selector: (row) => row.accountName,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.journalDescription,
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
      name: "No. Document",
      selector: (row) => row.noDocument,
      sortable: true,
    },
    {
      name: "Action",
      cell: () => (
        <div className="d-flex order-actions">
          <CButtonEdit modal={"modal"} modalTarget={"#editDetail"} />
          <CButtonDelete modal={"modal"} modalTarget={"#deleteLookupCode"} />
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
      accountName: "Pretty Cash",
      journalDescription: "REFILL PETTY CASH FINANCE 01-30 DESEMBER 2022",
      debet: "0.00",
      credit: "3.000.000.00",
      noDocument: "001/01/2023/JAKCI/FI/OT",
    },
  ];

  const handleFilter = (e) => {
    const value = e.target.value || "";
    setFilterText(value);
  };

  const filteredItems = data.filter(
    (item) =>
      item.noAccount.toLowerCase().includes(filterText.toLowerCase()) ||
      item.accountName.toLowerCase().includes(filterText.toLowerCase()) ||
      item.journalDescription
        .toLowerCase()
        .includes(filterText.toLowerCase()) ||
      item.debet.toLowerCase().includes(filterText.toLowerCase()) ||
      item.credit.toLowerCase().includes(filterText.toLowerCase()) ||
      item.noDocument.toLowerCase().includes(filterText.toLowerCase())
  );

  let { referenceId } = useParams();
  console.log("params >>");
  console.log(referenceId);

  const optionAccount = [
    { value: "11100", label: "11100 • PETTY CASH" },
    { value: "53002", label: "53002 • RENT - MOTOR BIKE" },
  ];

  const [selectedAccount, setselectedAccount] = useState(null);

  const handleChangeAccount = (selectedAccount) => {
    setselectedAccount(selectedAccount);
    console.log(`Option selected:`, selectedAccount);
  };

  const optionBusinessUnit = [
    { value: "ot", label: "OT" },
    { value: "ka", label: "KA" },
    { value: "at", label: "AT" },
    { value: "ct", label: "CT" },
  ];

  const [selectedBusinessUnit, setselectedBusinessUnit] = useState(null);

  const handleChangeBusinessUnit = (selectedBusinessUnit) => {
    setselectedBusinessUnit(selectedBusinessUnit);
    console.log(`Option selected:`, selectedBusinessUnit);
  };

  const optionCostCenter = [
    { value: "ai", label: "AI" },
    { value: "opc", label: "OPC" },
    { value: "us", label: "US" },
    { value: "co", label: "CO" },
  ];

  const [selectedCostCenter, setselectedCostCenter] = useState(null);

  const handleChangeCostCenter = (selectedCostCenter) => {
    setselectedCostCenter(selectedCostCenter);
    console.log(`Option selected:`, selectedCostCenter);
  };

  const optionBranch = [
    { value: "ai", label: "AI" },
    { value: "opc", label: "OPC" },
    { value: "us", label: "US" },
    { value: "co", label: "CO" },
  ];

  const [selectedBranch, setselectedBranch] = useState(null);

  const handleChangeBranch = (selectedBranch) => {
    setselectedBranch(selectedBranch);
    console.log(`Option selected:`, selectedBranch);
  };

  const optionPIC = [
    { value: "REG7", label: "REG7" },
    { value: "REGJ", label: "REGJ" },
    { value: "REG2", label: "REG2" },
    { value: "REG5", label: "REG5" },
  ];

  const [selectedPIC, setselectedPIC] = useState(null);

  const handleChangePIC = (selectedPIC) => {
    setselectedPIC(selectedPIC);
    console.log(`Option selected:`, selectedPIC);
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Master"}
            textSecond={"Input Journal"}
            textThird={"Detail Journal"}
            urlSecond={"/transaction/input-jurnal"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <div>
                  <h5 className="font-weight-bold mb-2">Detail Journal</h5>
                  <p>JNH/11/23010001</p>
                </div>
                <div className="ms-auto mt-2">
                  <CButton
                    className={"btn btn-primary d-flex align-items-center"}
                    modal={"modal"}
                    modalTarget={"#addNewDetail"}
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

              <div className="text-end mt-3">
                <h6 className="mb-3">UNBALANCE</h6>
                <div className="d-flex align-items-center justify-content-end mb-3">
                  <p className="mb-0 me-2">Total Debet:</p>
                  <input
                    className="form-control width-250"
                    type="text"
                    value={"5.400.000"}
                    aria-label="Disabled input"
                    disabled
                  />
                </div>
                <div className="d-flex align-items-center justify-content-end mb-2">
                  <p className="mb-0 me-2">Total Credit:</p>
                  <input
                    className="form-control width-250"
                    type="text"
                    value={"0.0"}
                    aria-label="Disabled input"
                    disabled
                  />
                </div>
              </div>
            </div>
          </CCard>
        </div>

        {/* MODAL ADD NEW */}
        <div
          className="modal fade"
          id="addNewDetail"
          tabIndex={-1}
          aria-labelledby="addNewDetailLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addNewDetailLabel">
                  Add New Detail Journal
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
                  <div className="col-12 col-lg-6 mb-3">
                    <SelectTwo
                      label={"Account"}
                      value={selectedAccount}
                      onChange={handleChangeAccount}
                      options={optionAccount}
                      isClearable={true}
                      placeholder={"Select Account..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <SelectTwo
                      label={"Business Unit"}
                      value={selectedBusinessUnit}
                      onChange={handleChangeBusinessUnit}
                      options={optionBusinessUnit}
                      isClearable={true}
                      placeholder={"Business Unit..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <SelectTwo
                      label={"Cost Center"}
                      value={selectedCostCenter}
                      onChange={handleChangeCostCenter}
                      options={optionCostCenter}
                      isClearable={true}
                      placeholder={"Cost Center..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <SelectTwo
                      label={"Branch"}
                      value={selectedBranch}
                      onChange={handleChangeBranch}
                      options={optionBranch}
                      isClearable={true}
                      placeholder={"Branch..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <SelectTwo
                      label={"PIC"}
                      value={selectedPIC}
                      onChange={handleChangePIC}
                      options={optionPIC}
                      isClearable={true}
                      placeholder={"PIC..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"No. Document"}
                      type={"text"}
                      className={"form-control"}
                      id={"noDocument"}
                      placeholder={"No. Document..."}
                    />
                  </div>
                  <div className="col-12 col-lg-12 mb-3">
                    <TextInput
                      label={"Description Journal"}
                      type={"text"}
                      className={"form-control"}
                      id={"descriptionJournal"}
                      placeholder={"Description Journal..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Debet"}
                      type={"number"}
                      className={"form-control"}
                      id={"debet"}
                      placeholder={"Debet..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Credit"}
                      type={"number"}
                      className={"form-control"}
                      id={"credit"}
                      placeholder={"Credit..."}
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
          id="editDetail"
          tabIndex={-1}
          aria-labelledby="editDetailLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editDetailLabel">
                  Edit Detail Journal
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
                  <div className="col-12 col-lg-6 mb-3">
                    <SelectTwo
                      label={"Account"}
                      value={selectedAccount}
                      onChange={handleChangeAccount}
                      options={optionAccount}
                      isClearable={true}
                      placeholder={"Select Account..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <SelectTwo
                      label={"Business Unit"}
                      value={selectedBusinessUnit}
                      onChange={handleChangeBusinessUnit}
                      options={optionBusinessUnit}
                      isClearable={true}
                      placeholder={"Business Unit..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <SelectTwo
                      label={"Cost Center"}
                      value={selectedCostCenter}
                      onChange={handleChangeCostCenter}
                      options={optionCostCenter}
                      isClearable={true}
                      placeholder={"Cost Center..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <SelectTwo
                      label={"Branch"}
                      value={selectedBranch}
                      onChange={handleChangeBranch}
                      options={optionBranch}
                      isClearable={true}
                      placeholder={"Branch..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <SelectTwo
                      label={"PIC"}
                      value={selectedPIC}
                      onChange={handleChangePIC}
                      options={optionPIC}
                      isClearable={true}
                      placeholder={"PIC..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"No. Document"}
                      type={"text"}
                      className={"form-control"}
                      id={"noDocument"}
                      placeholder={"No. Document..."}
                    />
                  </div>
                  <div className="col-12 col-lg-12 mb-3">
                    <TextInput
                      label={"Description Journal"}
                      type={"text"}
                      className={"form-control"}
                      id={"descriptionJournal"}
                      placeholder={"Description Journal..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Debet"}
                      type={"number"}
                      className={"form-control"}
                      id={"debet"}
                      placeholder={"Debet..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Credit"}
                      type={"number"}
                      className={"form-control"}
                      id={"credit"}
                      placeholder={"Credit..."}
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

        {/* MODAL Delete */}
        <div
          className="modal fade"
          id="deleteLookupCode"
          tabIndex={-1}
          aria-labelledby="deleteLookupCodeLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteLookupCodeLabel">
                  Delete Lookup Code
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
