/* eslint-disable no-undef */
// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButton from "../../../components/Button";
import CCard from "../../../components/Card";
import { useState } from "react";
import CDataTable from "../../../components/DataTable";
import SelectTwo from "../../../components/Select2";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { TabComponent, TabContent } from "../../../components/Tabs";
import BadgeStatus from "../../../components/Badge";
import CButtonDelete from "../../../components/BtnActionDelete";
import CButtonProcess from "../../../components/BtnActionProcess";

export default function PostingJournal() {
  const [filterText, setFilterText] = useState("");
  const [filterByAccount, setFilterByAccount] = useState("");
  const [filterDetail, setFilterDetail] = useState("");
  const [filterByDocument, setFilterByDocument] = useState("");
  const columns = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => <BadgeStatus status={row.status} />,
    },
    {
      name: "No. Jurnal",
      selector: (row) => row.noJurnal,
      sortable: true,
    },

    {
      name: "No. Ref",
      selector: (row) => row.noRef,
      sortable: true,
    },
    {
      name: "Journal Date",
      selector: (row) => row.journalDate,
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
      name: "Action",
      sortable: false,
      cell: () => (
        <div className="d-flex order-actions">
          <CButtonProcess modal={"modal"} modalTarget={"#processModal"} />
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
      status: "Posted",
      noJurnal: "JNH/11/23010001",
      noRef: "01/01/2024",
      journalDate: "179.098.519",
      debet: "179.098.519",
      credit: "245.877.234",
    },
    {
      id: 2,
      no: 2,
      status: "Unposting",
      noJurnal: "JNH/11/23010001",
      noRef: "01/01/2024",
      journalDate: "179.098.519",
      debet: "179.098.519",
      credit: "245.877.234",
    },
  ];

  const handleFilter = (e) => {
    const value = e.target.value || "";
    setFilterText(value);
  };

  const filteredItems = data.filter(
    (item) =>
      item.status.toLowerCase().includes(filterText.toLowerCase()) ||
      item.noJurnal.toLowerCase().includes(filterText.toLowerCase()) ||
      item.noRef.toLowerCase().includes(filterText.toLowerCase()) ||
      item.journalDate.toLowerCase().includes(filterText.toLowerCase()) ||
      item.debet.toLowerCase().includes(filterText.toLowerCase()) ||
      item.credit.toLowerCase().includes(filterText.toLowerCase())
  );

  // Table By Account Here
  const columnsByAccount = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "No. Jurnal",
      selector: (row) => row.noJurnal,
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
          <CButtonDelete modal={"modal"} modalTarget={"#inactiveData"} />
        </div>
      ),
      //   button: true, // Set button property to true
      ignoreRowClick: true,
      allowOverflow: true,
    },
  ];

  const dataByAccount = [
    {
      id: 1,
      no: 1,
      noJurnal: "JH8898",
      noAccount: "4567",
      description: "01/01/2024",
      debit: "179.098.519",
      credit: "245.877.234",
    },
    {
      id: 2,
      no: 2,
      noJurnal: "5235345345",
      noAccount: "8927",
      description: "01/01/2024",
      debit: "179.098.519",
      credit: "245.877.234",
    },
  ];

  const handleFilterByAccount = (e) => {
    const value = e.target.value || "";
    setFilterByAccount(value);
  };

  const filteredItemsByAccount = dataByAccount.filter(
    (item) =>
      item.noJurnal.toLowerCase().includes(filterByAccount.toLowerCase()) ||
      item.noAccount.toLowerCase().includes(filterByAccount.toLowerCase()) ||
      item.description.toLowerCase().includes(filterByAccount.toLowerCase()) ||
      item.debit.toLowerCase().includes(filterByAccount.toLowerCase()) ||
      item.credit.toLowerCase().includes(filterByAccount.toLowerCase())
  );

  // Table Detail Here
  const columnsDetail = [
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
      name: "No. Document",
      selector: (row) => row.noDocument,
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
          <CButtonDelete modal={"modal"} modalTarget={"#inactiveData"} />
        </div>
      ),
      //   button: true, // Set button property to true
      ignoreRowClick: true,
      allowOverflow: true,
    },
  ];

  const dataDetail = [
    {
      id: 1,
      no: 1,
      noAccount: "4567",
      description: "01/01/2024",
      noDocument: "JK893",
      debit: "179.098.519",
      credit: "245.877.234",
    },
    {
      id: 2,
      no: 2,
      noAccount: "8927",
      description: "01/01/2024",
      noDocument: "5235345345",
      debit: "179.098.519",
      credit: "245.877.234",
    },
  ];

  const handleFilterDetail = (e) => {
    const value = e.target.value || "";
    setFilterDetail(value);
  };

  const filteredItemsDetail = dataDetail.filter(
    (item) =>
      item.noAccount.toLowerCase().includes(filterDetail.toLowerCase()) ||
      item.description.toLowerCase().includes(filterDetail.toLowerCase()) ||
      item.noDocument.toLowerCase().includes(filterDetail.toLowerCase()) ||
      item.debit.toLowerCase().includes(filterDetail.toLowerCase()) ||
      item.credit.toLowerCase().includes(filterDetail.toLowerCase())
  );

  // Table By Document Here
  const columnsByDocument = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "No. Journal",
      selector: (row) => row.noJournal,
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
          <CButtonDelete modal={"modal"} modalTarget={"#inactiveData"} />
        </div>
      ),
      //   button: true, // Set button property to true
      ignoreRowClick: true,
      allowOverflow: true,
    },
  ];

  const dataByDocument = [
    {
      id: 1,
      no: 1,
      noJournal: "6969",
      noDocument: "0909",
      noAccount: "3000",
      description: "01/01/2024",
      debit: "179.098.519",
      credit: "245.877.234",
    },
    {
      id: 1,
      no: 1,
      noJournal: "6423",
      noDocument: "4311",
      noAccount: "1221",
      description: "01/01/2024",
      debit: "179.098.519",
      credit: "245.877.234",
    },
  ];

  const handleFilterByDocument = (e) => {
    const value = e.target.value || "";
    setFilterByDocument(value);
  };

  const filteredItemsByDocument = dataByDocument.filter(
    (item) =>
      item.noJournal.toLowerCase().includes(filterByDocument.toLowerCase()) ||
      item.noDocument.toLowerCase().includes(filterByDocument.toLowerCase()) ||
      item.noAccount.toLowerCase().includes(filterByDocument.toLowerCase()) ||
      item.description.toLowerCase().includes(filterByDocument.toLowerCase()) ||
      item.debit.toLowerCase().includes(filterByDocument.toLowerCase()) ||
      item.credit.toLowerCase().includes(filterByDocument.toLowerCase())
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

  const [activeTab, setActiveTab] = useState("listJournal");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // ---------------------
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
          <CBreadcrumb
            textFirst={"Transaction"}
            textSecond={"Posting/Unposting Journal"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-header">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <div>
                  <h5 className="font-weight-bold mb-0">
                    Posting/Unposting Journal
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-4 mb-3">
                  <label className="form-label">Journal Type</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="daily">Daily</option>
                    <option value="audit">Audit</option>
                  </select>
                </div>
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
                  <label className="form-label">Fiskal Year</label>
                  <select
                    className="form-select"
                    value={selectedYear}
                    onChange={handleYearChange}
                  >
                    {renderYearOptions()}
                  </select>
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
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Status</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="posted">Posted</option>
                    <option value="unposted">Unposted</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="card-body">
              <ul className="nav nav-tabs nav-primary" role="tablist">
                <TabComponent
                  id="listJournal"
                  // iconClass="bxs-home"
                  title="List Journal"
                  active={activeTab === "listJournal"}
                  handleClick={handleTabClick}
                />
                <TabComponent
                  id="byAccount"
                  // iconClass="bxs-user-pin"
                  title="By Account"
                  active={activeTab === "byAccount"}
                  handleClick={handleTabClick}
                />
                <TabComponent
                  id="detailTab"
                  // iconClass="bxs-microphone"
                  title="Detail"
                  active={activeTab === "detailTab"}
                  handleClick={handleTabClick}
                />
                <TabComponent
                  id="byDocument"
                  // iconClass="bxs-microphone"
                  title="By Document"
                  active={activeTab === "byDocument"}
                  handleClick={handleTabClick}
                />
              </ul>
              <div className="tab-content py-3">
                <TabContent
                  id="listJournal"
                  active={activeTab === "listJournal"}
                >
                  <CDataTable
                    onChange={handleFilter}
                    columns={columns}
                    data={filteredItems}
                  />
                </TabContent>
                <TabContent id="byAccount" active={activeTab === "byAccount"}>
                  <CDataTable
                    onChange={handleFilterByAccount}
                    columns={columnsByAccount}
                    data={filteredItemsByAccount}
                  />
                  <div className="d-flex align-items-center justify-content-end mt-3">
                    <p className="mb-0 me-2">Total:</p>
                    <input
                      className="form-control width-250"
                      type="text"
                      value={"5.400.000"}
                      aria-label="Disabled input"
                      disabled
                    />
                  </div>
                </TabContent>
                <TabContent id="detailTab" active={activeTab === "detailTab"}>
                  <CDataTable
                    onChange={handleFilterDetail}
                    columns={columnsDetail}
                    data={filteredItemsDetail}
                  />
                </TabContent>
                <TabContent id="byDocument" active={activeTab === "byDocument"}>
                  <CDataTable
                    onChange={handleFilterByDocument}
                    columns={columnsByDocument}
                    data={filteredItemsByDocument}
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
