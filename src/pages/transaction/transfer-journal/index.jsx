// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButton from "../../../components/Button";
import CCard from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import { useState } from "react";
import CDataTable from "../../../components/DataTable";
import SelectTwo from "../../../components/Select2";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { TabComponent, TabContent } from "../../../components/Tabs";
import CButtonDelete from "../../../components/BtnActionDelete";
import CButtonProcess from "../../../components/BtnActionProcess";

export default function TransferJournal() {
  const [filterText1, setFilterText1] = useState("");
  const [filter2, setFilter2] = useState("");
  const [filter3, setFilter3] = useState("");
  const [filter4, setFilter4] = useState("");

  // Table Document lIst
  const columns1 = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "Posting Date",
      selector: (row) => row.postingDate,
      sortable: true,
    },

    {
      name: "No. Document",
      selector: (row) => row.noDocument,
      sortable: true,
    },
    {
      name: "Document Source",
      selector: (row) => row.documentSource,
      sortable: true,
    },
    {
      name: "Transaction Value",
      selector: (row) => row.transactionValue,
      sortable: true,
    },
    {
      name: "No. Reference",
      selector: (row) => row.noReference,
      sortable: true,
    },
    {
      name: "Action",
      sortable: false,
      cell: () => (
        <div className="d-flex order-actions">
          <CButtonProcess modal={"modal"} modalTarget={"#processModal"} />
          <CButtonDelete modal={"modal"} modalTarget={"#deleteData"} />
        </div>
      ),
      //   button: true, // Set button property to true
      ignoreRowClick: true,
      allowOverflow: true,
    },
  ];

  const data1 = [
    {
      id: 1,
      no: 1,
      postingDate: "18/09/2024",
      noDocument: "JNH/11/23010001",
      documentSource: "ASSET",
      transactionValue: "179.098.519",
      noReference: "89076352",
    },
    {
      id: 2,
      no: 2,
      postingDate: "18/09/2024",
      noDocument: "JNH/11/23010001",
      documentSource: "ASSET",
      transactionValue: "179.098.519",
      noReference: "89076352",
    },
  ];

  const handleFilter1 = (e) => {
    const value = e.target.value || "";
    setFilterText1(value);
  };

  const filteredItems1 = data1.filter(
    (item) =>
      item.postingDate.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.noDocument.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.documentSource.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.transactionValue.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.noReference.toLowerCase().includes(filterText1.toLowerCase())
  );

  // Table Transfer History Here
  const columns2 = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "Transfer Date",
      selector: (row) => row.transferDate,
      sortable: true,
    },

    {
      name: "No. Journal",
      selector: (row) => row.noJournal,
      sortable: true,
    },
    {
      name: "Posting Date",
      selector: (row) => row.postingDate,
      sortable: true,
    },
    {
      name: "No. Document",
      selector: (row) => row.noDocument,
      sortable: true,
    },
    {
      name: "Document Source",
      selector: (row) => row.documentSource,
      sortable: true,
    },
    {
      name: "Transaction Value",
      selector: (row) => row.transactionValue,
      sortable: true,
    },
    {
      name: "No. Reference",
      selector: (row) => row.noReference,
      sortable: true,
    },
    {
      name: "Action",
      sortable: false,
      cell: () => (
        <div className="d-flex order-actions">
          <CButtonProcess modal={"modal"} modalTarget={"#processModal"} />
          <CButtonDelete modal={"modal"} modalTarget={"#deleteData"} />
        </div>
      ),
      //   button: true, // Set button property to true
      ignoreRowClick: true,
      allowOverflow: true,
    },
  ];

  const data2 = [
    {
      id: 1,
      no: 1,
      transferDate: "20/03/2024",
      noJournal: "4567",
      postingDate: "01/01/2024",
      noDocument: "JK786",
      documentSource: "SOURCE",
      transactionValue: "245.877.234",
      noReference: "098765",
    },
    {
      id: 2,
      no: 2,
      transferDate: "20/03/2024",
      noJournal: "4567",
      postingDate: "01/01/2024",
      noDocument: "JK786",
      documentSource: "SARA",
      transactionValue: "245.877.234",
      noReference: "098765",
    },
  ];

  const handleFilter2 = (e) => {
    const value = e.target.value || "";
    setFilter2(value);
  };

  const filteredItems2 = data2.filter(
    (item) =>
      item.transferDate.toLowerCase().includes(filter2.toLowerCase()) ||
      item.noJournal.toLowerCase().includes(filter2.toLowerCase()) ||
      item.postingDate.toLowerCase().includes(filter2.toLowerCase()) ||
      item.noDocument.toLowerCase().includes(filter2.toLowerCase()) ||
      item.documentSource.toLowerCase().includes(filter2.toLowerCase()) ||
      item.transactionValue.toLowerCase().includes(filter2.toLowerCase()) ||
      item.noReference.toLowerCase().includes(filter2.toLowerCase())
  );

  // Table Journal Detail Here
  const columns3 = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "Document Date",
      selector: (row) => row.documentDate,
      sortable: true,
    },
    {
      name: "No. Document",
      selector: (row) => row.noDocument,
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
      name: "No. Reference",
      selector: (row) => row.noReference,
      sortable: true,
    },
    {
      name: "Debit",
      selector: (row) => row.debit,
      sortable: true,
    },
    {
      name: "Credit",
      selector: (row) => row.credit,
      sortable: true,
    },
    {
      name: "Action",
      sortable: false,
      cell: () => (
        <div className="d-flex order-actions">
          <CButtonProcess modal={"modal"} modalTarget={"#processModal"} />
          <CButtonDelete modal={"modal"} modalTarget={"#deleteData"} />
        </div>
      ),
      //   button: true, // Set button property to true
      ignoreRowClick: true,
      allowOverflow: true,
    },
  ];

  const data3 = [
    {
      id: 1,
      no: 1,
      documentDate: "15/03/2024",
      noDocument: "7843",
      noAccount: "24093",
      description: "Lorem Ipsum",
      noReference: "JK893",
      debit: "179.098.519",
      credit: "245.877.234",
    },
    {
      id: 2,
      no: 2,
      documentDate: "15/03/2024",
      noDocument: "7843",
      noAccount: "24093",
      description: "Lorem Apsum",
      noReference: "JK893",
      debit: "179.098.519",
      credit: "245.877.234",
    },
  ];

  const handleFilter3 = (e) => {
    const value = e.target.value || "";
    setFilter3(value);
  };

  const filteredItems3 = data3.filter(
    (item) =>
      item.documentDate.toLowerCase().includes(filter3.toLowerCase()) ||
      item.noDocument.toLowerCase().includes(filter3.toLowerCase()) ||
      item.noAccount.toLowerCase().includes(filter3.toLowerCase()) ||
      item.description.toLowerCase().includes(filter3.toLowerCase()) ||
      item.noReference.toLowerCase().includes(filter3.toLowerCase()) ||
      item.debit.toLowerCase().includes(filter3.toLowerCase()) ||
      item.credit.toLowerCase().includes(filter3.toLowerCase())
  );

  // Table Summary Here
  const columns4 = [
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
      name: "Debit",
      selector: (row) => row.debit,
      sortable: true,
    },
    {
      name: "Credit",
      selector: (row) => row.credit,
      sortable: true,
    },
    {
      name: "Action",
      sortable: false,
      cell: () => (
        <div className="d-flex order-actions">
          <CButtonProcess modal={"modal"} modalTarget={"#processModal"} />
          <CButtonDelete modal={"modal"} modalTarget={"#deleteData"} />
        </div>
      ),
      //   button: true, // Set button property to true
      ignoreRowClick: true,
      allowOverflow: true,
    },
  ];

  const data4 = [
    {
      id: 1,
      no: 1,
      noAccount: "7826",
      description: "Lala lala",
      debit: "179.098.519",
      credit: "245.877.234",
    },
    {
      id: 2,
      no: 2,
      noAccount: "4542",
      description: "lulu lula",
      debit: "179.098.519",
      credit: "245.877.234",
    },
  ];

  const handleFilter4 = (e) => {
    const value = e.target.value || "";
    setFilter4(value);
  };

  const filteredItems4 = data4.filter(
    (item) =>
      item.noAccount.toLowerCase().includes(filter4.toLowerCase()) ||
      item.description.toLowerCase().includes(filter4.toLowerCase()) ||
      item.debit.toLowerCase().includes(filter4.toLowerCase()) ||
      item.credit.toLowerCase().includes(filter4.toLowerCase())
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
    { value: "01", label: "01 Jan 2024 - 31 Jan 2024" },
    { value: "02", label: "01 Feb 2024 - 31 Feb 2024" },
    { value: "03", label: "01 Mar 2024 - 31 Mar 2024" },
  ];

  const [selectedPeriod, setselectedPeriod] = useState(null);

  const handleChangePeriod = (selectedPeriod) => {
    setselectedPeriod(selectedPeriod);
    console.log(`Option selected:`, selectedPeriod);
  };

  const optionDocumentNumber = [
    { value: "01", label: "JH6781" },
    { value: "02", label: "RK8976" },
    { value: "03", label: "YU1453" },
  ];

  const [selectedDocumentNumber, setselectedDocumentNumber] = useState(null);

  const handleChangeDocumentNumber = (selectedDocumentNumber) => {
    setselectedDocumentNumber(selectedDocumentNumber);
    console.log(`Option selected:`, selectedDocumentNumber);
  };

  const [activeTab, setActiveTab] = useState("tabMenu1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Transaction"}
            textSecond={"Transfer Journal"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-header">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <div>
                  <h5 className="font-weight-bold mb-0">Transfer Journal</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-4 mb-3">
                  <SelectTwo
                    label={"Company"}
                    value={selectedCompany}
                    onChange={handleChangeCompany}
                    options={optionCompany}
                    isClearable={true}
                  />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <TextInput
                    label={"Fiskal Year"}
                    type={"text"}
                    className={"form-control mb-1"}
                    id={"fiskalYear"}
                    placeholder={"Fiskal Year..."}
                  />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <SelectTwo
                    label={"Period"}
                    value={selectedPeriod}
                    onChange={handleChangePeriod}
                    options={optionPeriod}
                    isClearable={true}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Document Source</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="ap">AP</option>
                    <option value="ar">AR</option>
                    <option value="sp">SP</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <SelectTwo
                    label={"No. Document"}
                    value={selectedDocumentNumber}
                    onChange={handleChangeDocumentNumber}
                    options={optionDocumentNumber}
                    isClearable={true}
                  />
                </div>
              </div>
            </div>
            <div className="card-body">
              <ul className="nav nav-tabs nav-primary" role="tablist">
                <TabComponent
                  id="tabMenu1"
                  // iconClass="bxs-home"
                  title="List Document"
                  active={activeTab === "tabMenu1"}
                  handleClick={handleTabClick}
                />
                <TabComponent
                  id="tabMenu2"
                  // iconClass="bxs-user-pin"
                  title="Journal Transfer History"
                  active={activeTab === "tabMenu2"}
                  handleClick={handleTabClick}
                />
                <TabComponent
                  id="tabMenu3"
                  // iconClass="bxs-microphone"
                  title="Journal Detail"
                  active={activeTab === "tabMenu3"}
                  handleClick={handleTabClick}
                />
                <TabComponent
                  id="tabMenu4"
                  // iconClass="bxs-microphone"
                  title="Journal Summary"
                  active={activeTab === "tabMenu4"}
                  handleClick={handleTabClick}
                />
              </ul>
              <div className="tab-content py-3">
                <TabContent id="tabMenu1" active={activeTab === "tabMenu1"}>
                  <CDataTable
                    onChange={handleFilter1}
                    columns={columns1}
                    data={filteredItems1}
                  />
                  <div className="row">
                    <div className="col-12 col-lg-3">
                      <TextInput
                        label={"Change Date"}
                        type={"date"}
                        className={"form-control"}
                        id={"changeDate"}
                        placeholder={"mm/dd/yyyy"}
                      />
                    </div>
                  </div>
                </TabContent>
                <TabContent id="tabMenu2" active={activeTab === "tabMenu2"}>
                  <CDataTable
                    onChange={handleFilter2}
                    columns={columns2}
                    data={filteredItems2}
                  />
                </TabContent>
                <TabContent id="tabMenu3" active={activeTab === "tabMenu3"}>
                  <CDataTable
                    onChange={handleFilter3}
                    columns={columns3}
                    data={filteredItems3}
                  />
                </TabContent>
                <TabContent id="tabMenu4" active={activeTab === "tabMenu4"}>
                  <CDataTable
                    onChange={handleFilter4}
                    columns={columns4}
                    data={filteredItems4}
                  />
                </TabContent>
              </div>
            </div>
          </CCard>
        </div>

        {/* MODAL EDIT */}
        <div
          className="modal fade"
          id="processModal"
          tabIndex={-1}
          aria-labelledby="processModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="processModalLabel">
                  Process
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">Fill Content</div>
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
