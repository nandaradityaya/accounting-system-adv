// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButton from "../../../components/Button";
import CCard from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import { useState } from "react";
import CDataTable from "../../../components/DataTable";
import SelectTwo from "../../../components/Select2";
import "react-tabs/style/react-tabs.css";
import { TabComponent, TabContent } from "../../../components/Tabs";
import CButtonDelete from "../../../components/BtnActionDelete";
import CButtonProcess from "../../../components/BtnActionProcess";

export default function ConsolidationJournal() {
  const [filterText1, setFilterText1] = useState("");
  const [filter2, setFilter2] = useState("");

  // Table Document lIst
  const columns1 = [
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
      name: "HIBA",
      selector: (row) => row.hiba,
      sortable: true,
    },
    {
      name: "HILOG",
      selector: (row) => row.hilog,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row) => row.total,
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
      name: "Total Consolidation",
      selector: (row) => row.totalConsolidation,
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
      noAccount: "HJF7438482",
      description: "Lorem Apsum",
      hiba: "ASSET",
      hilog: "lorem ipsum",
      total: "89076352",
      debit: "89076352",
      credit: "89076352",
      totalConsolidation: "89076352",
    },
    {
      id: 2,
      no: 2,
      noAccount: "HJF7438482",
      description: "Lorem Ipsum",
      hiba: "ASSET",
      hilog: "lorem ipsum",
      total: "89076352",
      debit: "89076352",
      credit: "89076352",
      totalConsolidation: "89076352",
    },
  ];

  const handleFilter1 = (e) => {
    const value = e.target.value || "";
    setFilterText1(value);
  };

  const filteredItems1 = data1.filter(
    (item) =>
      item.noAccount.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.description.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.hiba.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.hilog.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.total.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.debit.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.credit.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.totalConsolidation.toLowerCase().includes(filterText1.toLowerCase())
  );

  // Table TB Consolidation All Here
  const columns2 = [
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
      name: "ADV",
      selector: (row) => row.adv,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row) => row.total,
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
      name: "Total Consolidation",
      selector: (row) => row.totalConsolidation,
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
      noAccount: "KL9873",
      description: "Lorem Ipsum",
      adv: "ADV",
      total: "87,000.999",
      debit: "SOURCE",
      credit: "245.877.234",
      totalConsolidation: "098765",
    },
    {
      id: 2,
      no: 2,
      noAccount: "KL9873",
      description: "Lorem Apsum",
      adv: "ADV",
      total: "87,000.999",
      debit: "SOURCE",
      credit: "245.877.234",
      totalConsolidation: "098765",
    },
  ];

  const handleFilter2 = (e) => {
    const value = e.target.value || "";
    setFilter2(value);
  };

  const filteredItems2 = data2.filter(
    (item) =>
      item.noAccount.toLowerCase().includes(filter2.toLowerCase()) ||
      item.description.toLowerCase().includes(filter2.toLowerCase()) ||
      item.adv.toLowerCase().includes(filter2.toLowerCase()) ||
      item.total.toLowerCase().includes(filter2.toLowerCase()) ||
      item.debit.toLowerCase().includes(filter2.toLowerCase()) ||
      item.credit.toLowerCase().includes(filter2.toLowerCase()) ||
      item.totalConsolidation.toLowerCase().includes(filter2.toLowerCase())
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

  const optionPeriodConsoleAll = [
    { value: "01", label: "01 Jan 2024 - 31 Jan 2024" },
    { value: "02", label: "01 Feb 2024 - 31 Feb 2024" },
    { value: "03", label: "01 Mar 2024 - 31 Mar 2024" },
  ];

  const [selectedPeriodConsoleAll, setselectedPeriodConsoleAll] =
    useState(null);

  const handleChangePeriodConsoleAll = (selectedPeriodConsoleAll) => {
    setselectedPeriodConsoleAll(selectedPeriodConsoleAll);
    console.log(`Option selected:`, selectedPeriodConsoleAll);
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
            <div className="card-body">
              <ul className="nav nav-tabs nav-primary" role="tablist">
                <TabComponent
                  id="tabMenu1"
                  // iconClass="bxs-home"
                  title="TB Consolidation"
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
              </ul>
              <div className="tab-content py-3">
                <TabContent id="tabMenu1" active={activeTab === "tabMenu1"}>
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
                  </div>
                  <hr />
                  <CDataTable
                    onChange={handleFilter1}
                    columns={columns1}
                    data={filteredItems1}
                  />

                  <div className="d-flex align-items-center justify-content-end mb-3">
                    <p className="mb-0 me-2">Grand Total:</p>
                    <TextInput
                      type={"text"}
                      className={"form-control width-250"}
                      id={"grandTotal"}
                      value={"0.00"}
                      disabled
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-end mb-3">
                    <p className="mb-0 me-2">Total Debit:</p>
                    <TextInput
                      type={"text"}
                      className={"form-control width-250"}
                      id={"totalDebit"}
                      value={"0.00"}
                      disabled
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-end mb-3">
                    <p className="mb-0 me-2">Total Credit:</p>
                    <TextInput
                      type={"text"}
                      className={"form-control width-250"}
                      id={"totalCredit"}
                      value={"0.00"}
                      disabled
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-end mb-3">
                    <p className="mb-0 me-2">Grand Total Consolidation:</p>
                    <TextInput
                      type={"text"}
                      className={"form-control width-250"}
                      id={"grandTotalConsolidation"}
                      value={"0.00"}
                      disabled
                    />
                  </div>
                </TabContent>
                <TabContent id="tabMenu2" active={activeTab === "tabMenu2"}>
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-3">
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
                        value={selectedPeriodConsoleAll}
                        onChange={handleChangePeriodConsoleAll}
                        options={optionPeriodConsoleAll}
                        isClearable={true}
                      />
                    </div>
                  </div>
                  <hr />
                  <CDataTable
                    onChange={handleFilter2}
                    columns={columns2}
                    data={filteredItems2}
                  />
                </TabContent>
              </div>
            </div>
          </CCard>
        </div>

        {/* MODAL Process */}
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
                  Edit Journal
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
        {/* MODAL Process */}

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
