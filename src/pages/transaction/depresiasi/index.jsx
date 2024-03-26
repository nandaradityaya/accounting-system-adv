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
import CButtonEdit from "../../../components/BtnActionEdit";

export default function Depreciation() {
  const [filterText1, setFilterText1] = useState("");
  const [filter2, setFilter2] = useState("");

  // Table Depreciation Assets
  const columns1 = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "No. Depreciation",
      selector: (row) => row.noDepreciation,
      sortable: true,
    },
    {
      name: "No. Account",
      selector: (row) => row.noAccount,
      sortable: true,
    },
    {
      name: "Asset Code",
      selector: (row) => row.assetCode,
      sortable: true,
    },
    {
      name: "Asset Name",
      selector: (row) => row.assetName,
      sortable: true,
    },

    {
      name: "Start Date Depreciation",
      selector: (row) => row.startDateDepreciation,
      sortable: true,
    },
    {
      name: "Long Period",
      selector: (row) => row.longPeriod,
      sortable: true,
    },
    {
      name: "Depreciation Value",
      selector: (row) => row.depreciationValue,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Stop",
      selector: (row) => row.stop,
      sortable: true,
    },
    {
      name: "StopBy",
      selector: (row) => row.stopBy,
      sortable: true,
    },
    {
      name: "Stop Date",
      selector: (row) => row.stopDate,
      sortable: true,
    },
    {
      name: "Last Update",
      selector: (row) => row.lastUpdate,
      sortable: true,
    },
    {
      name: "Action",
      sortable: false,
      cell: () => (
        <div className="d-flex order-actions">
          <CButtonEdit modal={"modal"} modalTarget={"#editDepreciation"} />
          <CButtonDelete modal={"modal"} modalTarget={"#inactiveData"} />
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
      noDepreciation: "JNH/11/23010001",
      noAccount: "20/03/2024",
      assetCode: "20/03/2024",
      assetName: "179.098.519",
      startDateDepreciation: "89076352",
      longPeriod: "89076352",
      depreciationValue: "89076352",
      description: "89076352",
      stop: "89076352",
      stopBy: "89076352",
      stopDate: "89076352",
      lastUpdate: "89076352",
    },
    {
      id: 2,
      no: 2,
      noDepreciation: "JNH/11/23010001",
      noAccount: "20/03/2024",
      assetCode: "20/03/2024",
      assetName: "179.098.519",
      startDateDepreciation: "Lorem Ipsum",
      longPeriod: "89076352",
      depreciationValue: "89076352",
      description: "89076352",
      stop: "89076352",
      stopBy: "89076352",
      stopDate: "89076352",
      lastUpdate: "89076352",
    },
  ];

  const handleFilter1 = (e) => {
    const value = e.target.value || "";
    setFilterText1(value);
  };

  const filteredItems1 = data1.filter(
    (item) =>
      item.noDepreciation.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.noAccount.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.assetCode.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.assetName.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.startDateDepreciation
        .toLowerCase()
        .includes(filterText1.toLowerCase()) ||
      item.longPeriod.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.depreciationValue
        .toLowerCase()
        .includes(filterText1.toLowerCase()) ||
      item.description.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.stop.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.stopBy.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.stopDate.toLowerCase().includes(filterText1.toLowerCase()) ||
      item.lastUpdate.toLowerCase().includes(filterText1.toLowerCase())
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
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "End Date",
      selector: (row) => row.endDate,
      sortable: true,
    },
    {
      name: "Depreciation Value",
      selector: (row) => row.depreciationValue,
      sortable: true,
    },
    {
      name: "Nett Book Value",
      selector: (row) => row.nettBookValue,
      sortable: true,
    },
    {
      name: "Action",
      sortable: false,
      cell: () => (
        <div className="d-flex order-actions">
          <CButtonEdit modal={"modal"} modalTarget={"#editDepreciation"} />
          <CButtonDelete modal={"modal"} modalTarget={"#inactiveData"} />
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
      noJournal: "JNH/11/23010001",
      startDate: "20/03/2024",
      endDate: "20/03/2024",
      depreciationValue: "179.098.519",
      nettBookValue: "89076352",
    },
    {
      id: 2,
      no: 2,
      noJournal: "UIO/11/23010001",
      startDate: "20/03/2024",
      endDate: "20/03/2024",
      depreciationValue: "179.098.519",
      nettBookValue: "89076352",
    },
  ];

  const handleFilter2 = (e) => {
    const value = e.target.value || "";
    setFilter2(value);
  };

  const filteredItems2 = data2.filter(
    (item) =>
      item.noJournal.toLowerCase().includes(filter2.toLowerCase()) ||
      item.startDate.toLowerCase().includes(filter2.toLowerCase()) ||
      item.endDate.toLowerCase().includes(filter2.toLowerCase()) ||
      item.depreciationValue.toLowerCase().includes(filter2.toLowerCase()) ||
      item.nettBookValue.toLowerCase().includes(filter2.toLowerCase())
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
            textSecond={"Depreciation"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-lg-4 mb-3">
                  <div className="mb-3">
                    <label className="form-label">Total Depreciation</label>
                    <p className="text-black mb-0">8,741,000.00</p>
                  </div>
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <label className="form-label">Total Data</label>
                  <p className="text-black mb-0">20</p>
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <label className="form-label">Active</label>
                  <p className="text-black mb-0">19</p>
                </div>
              </div>
              <ul className="nav nav-tabs nav-primary" role="tablist">
                <TabComponent
                  id="tabMenu1"
                  // iconClass="bxs-home"
                  title="List of Depreciated Assets"
                  active={activeTab === "tabMenu1"}
                  handleClick={handleTabClick}
                />
                <TabComponent
                  id="tabMenu2"
                  // iconClass="bxs-user-pin"
                  title="Detailed Asset List of Depreciation"
                  active={activeTab === "tabMenu2"}
                  handleClick={handleTabClick}
                />
              </ul>
              <div className="tab-content py-3">
                <TabContent id="tabMenu1" active={activeTab === "tabMenu1"}>
                  <div className="d-flex align-items-center mb-4">
                    <div>
                      <h5 className="font-weight-bold mb-0">
                        Depreciation Assets
                      </h5>
                    </div>
                    <div className="ms-auto mt-2">
                      <CButton
                        className={"btn btn-primary d-flex align-items-center"}
                        modal={"modal"}
                        modalTarget={"#addNewDepreciation"}
                      >
                        <i className="bx bx-plus"></i>Add New
                      </CButton>
                    </div>
                  </div>
                  <CDataTable
                    onChange={handleFilter1}
                    columns={columns1}
                    data={filteredItems1}
                  />
                </TabContent>
                <TabContent id="tabMenu2" active={activeTab === "tabMenu2"}>
                  <div className="d-flex align-items-center mb-4">
                    <div>
                      <h5 className="font-weight-bold mb-0">
                        Depreciation Assets Detail
                      </h5>
                    </div>
                    <div className="ms-auto mt-2">
                      <CButton
                        className={"btn btn-primary d-flex align-items-center"}
                        modal={"modal"}
                        modalTarget={"#addNewDepreciation"}
                      >
                        <i className="bx bx-plus"></i>Add New
                      </CButton>
                    </div>
                  </div>
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

        {/* MODAL ADD NEW */}
        <div
          className="modal fade"
          id="addNewDepreciation"
          tabIndex={-1}
          aria-labelledby="addNewDepreciationLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addNewDepreciationLabel">
                  Add New Depreciation
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
          id="editDepreciation"
          tabIndex={-1}
          aria-labelledby="editDepreciationLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editDepreciationLabel">
                  Edit Depreciation
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
