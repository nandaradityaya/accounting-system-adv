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
import BadgeStatus from "../../../components/Badge";
import CButtonDelete from "../../../components/BtnActionDelete";
import CButtonProcess from "../../../components/BtnActionProcess";

export default function PostingJournal() {
  const [filterText, setFilterText] = useState("");
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
          <CButtonProcess modal={"modal"} modalTarget={"#editLookup"} />
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

  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Master"}
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
                  <TextInput
                    label={"Fiskal Year"}
                    type={"text"}
                    className={"form-control mb-1"}
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
                  title="Detil"
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
                  <div>Accoun</div>
                </TabContent>
                <TabContent id="detailTab" active={activeTab === "detailTab"}>
                  <div>Detai</div>
                </TabContent>
                <TabContent id="byDocument" active={activeTab === "byDocument"}>
                  <div>Doc</div>
                </TabContent>
              </div>
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
