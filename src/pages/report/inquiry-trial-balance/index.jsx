// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CCard from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import { useState } from "react";
import SelectTwo from "../../../components/Select2";
import "react-tabs/style/react-tabs.css";
import CButton from "../../../components/Button";
import CDataTable from "../../../components/DataTable";
import "react-tabs/style/react-tabs.css";
import { TabComponent, TabContent } from "../../../components/Tabs";

export default function InquiryTrialBalance() {
  const [filterText1, setFilterText1] = useState("");
  const [filter2, setFilter2] = useState("");
  const [filter3, setFilter3] = useState("");

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
      name: "Beginning Balance",
      selector: (row) => row.beginningBalance,
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
      name: "Ending Balance",
      selector: (row) => row.endingBalance,
      sortable: true,
    },
  ];

  const data1 = [
    {
      id: 1,
      no: 1,
      noAccount: "JNH/11/23010001",
      description: "Test",
      beginningBalance: "0",
      debit: "179.098.519",
      credit: "0",
      endingBalance: "180.000.000",
    },
    {
      id: 2,
      no: 2,
      noAccount: "KKL/11/23010001",
      description: "Lorem",
      beginningBalance: "0",
      debit: "179.098.519",
      credit: "0",
      endingBalance: "180.000.000",
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
      item.beginningBalance.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.debit.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.credit.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.endingBalance.toLowerCase().includes(filterText1.toLowerCase())
  );

  // Table Transfer History Here
  const columns2 = [
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
      name: "No. Ref",
      selector: (row) => row.noRef,
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
  ];

  const data2 = [
    {
      id: 1,
      no: 1,
      noJournal: "ULA/87/908",
      noRef: "4567",
      debit: "256.000.000",
      credit: "0",
    },
    {
      id: 2,
      no: 2,
      noJournal: "PRA/87/908",
      noRef: "4567",
      debit: "342.000.000",
      credit: "0",
    },
  ];

  const handleFilter2 = (e) => {
    const value = e.target.value || "";
    setFilter2(value);
  };

  const filteredItems2 = data2.filter(
    (item) =>
      item.noJournal.toLowerCase().includes(filter2.toLowerCase()) ||
      item.noRef.toLowerCase().includes(filter2.toLowerCase()) ||
      item.debit.toLowerCase().includes(filter2.toLowerCase()) ||
      item.credit.toLowerCase().includes(filter2.toLowerCase())
  );

  // Table Journal Detail Here
  const columns3 = [
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
      name: "Description Account",
      selector: (row) => row.descriptionAccount,
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
  ];

  const data3 = [
    {
      id: 1,
      no: 1,
      noAccount: "098763",
      descriptionAccount: "Test",
      description: "Lorem Ipsum",
      debit: "179.098.519",
      credit: "245.877.234",
    },
    {
      id: 2,
      no: 2,
      noAccount: "763529",
      descriptionAccount: "Testing",
      description: "Lorem Apsum",
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
      item.noAccount.toLowerCase().includes(filter3.toLowerCase()) ||
      item.descriptionAccount.toLowerCase().includes(filter3.toLowerCase()) ||
      item.description.toLowerCase().includes(filter3.toLowerCase()) ||
      item.debit.toLowerCase().includes(filter3.toLowerCase()) ||
      item.credit.toLowerCase().includes(filter3.toLowerCase())
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

  const [selectedPeriod, setSelectedPeriod] = useState(null);

  const handleChangePeriod = (selectedPeriod) => {
    setSelectedPeriod(selectedPeriod);
    console.log(`Option selected:`, selectedPeriod);
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
            textFirst={"Report"}
            textSecond={"Inquiry Trial Balance"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-header">
              <div className="row">
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Type</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="recapAccount">
                      Recap (Natural Account)
                    </option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
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
                  <label className="form-label">Account</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">SBU</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Account</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Cost Center</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Account</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">No. Account</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Account</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Pool</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Account</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">P.I.C</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="balanceTransaction"
                />
                <label
                  className="form-check-label"
                  htmlFor="balanceTransaction"
                >
                  Balance/Transaction
                </label>
              </div>
              <div className="d-flex justify-content-end">
                <CButton
                  className={"btn btn-primary d-flex align-items-center"}
                  modal={"modal"}
                  modalTarget={"#addNewLookup"}
                >
                  Apply
                </CButton>
              </div>
            </div>
            <div className="card-body">
              <ul className="nav nav-tabs nav-primary" role="tablist">
                <TabComponent
                  id="tabMenu1"
                  // iconClass="bxs-home"
                  title="List Trial Balance"
                  active={activeTab === "tabMenu1"}
                  handleClick={handleTabClick}
                />
                <TabComponent
                  id="tabMenu2"
                  // iconClass="bxs-user-pin"
                  title="List Journal"
                  active={activeTab === "tabMenu2"}
                  handleClick={handleTabClick}
                />
                <TabComponent
                  id="tabMenu3"
                  // iconClass="bxs-microphone"
                  title="Detail Account"
                  active={activeTab === "tabMenu3"}
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
                </TabContent>
                <TabContent id="tabMenu2" active={activeTab === "tabMenu2"}>
                  <CDataTable
                    onChange={handleFilter2}
                    columns={columns2}
                    data={filteredItems2}
                  />
                  <div className="d-flex align-items-center justify-content-end mb-3">
                    <p className="mb-0 me-2">Total:</p>
                    <TextInput
                      type={"text"}
                      className={"form-control width-250"}
                      id={"grandTotalConsolidation"}
                      value={"0.00"}
                      disabled
                    />
                  </div>
                </TabContent>
                <TabContent id="tabMenu3" active={activeTab === "tabMenu3"}>
                  <CDataTable
                    onChange={handleFilter3}
                    columns={columns3}
                    data={filteredItems3}
                  />
                </TabContent>
              </div>
            </div>
          </CCard>
        </div>
      </div>
    </>
  );
}
