// import React from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GrTransaction } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { GoGear } from "react-icons/go";

function Sidebar() {
  // const navigate = useNavigate();
  return (
    <>
      <div className="sidebar-wrapper" data-simplebar="true">
        <div className="sidebar-header">
          <Link type="button" to="/home">
            <div className="d-flex ms-2">
              <div>
                <img src="/logo.png" alt="logo icon" width={28} height={28} />
              </div>
              <div>
                <h6 className="logo-text font-16 text-white mt-1 ms-3">
                  General Ledger
                </h6>
              </div>
            </div>
          </Link>
          <div className="toggle-icon ms-auto">
            <i className="bx bx-first-page" />
          </div>
        </div>
        {/*navigation*/}
        <ul className="metismenu" id="menu">
          <li className="menu-label">Menu</li>
          <li>
            <a href="#" className="has-arrow">
              <div className="parent-icon">
                <i className="lni lni-home" />
              </div>
              <div className="menu-title">Master</div>
            </a>
            <ul>
              <li>
                {" "}
                <Link type="button" to="/master/reference">
                  <i className="bx bx-right-arrow-alt" />
                  Reference
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/master/document-numbering">
                  <i className="bx bx-right-arrow-alt" />
                  Numbering
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/master/period">
                  <i className="bx bx-right-arrow-alt" />
                  Period
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/master/account">
                  <i className="bx bx-right-arrow-alt" />
                  Account
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/master/col-flexible-report">
                  <i className="bx bx-right-arrow-alt" />
                  Col. Flexible Report
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/master/format-flexible-report">
                  <i className="bx bx-right-arrow-alt" />
                  Format Flexible Report
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="has-arrow">
              <div className="parent-icon">
                <GrTransaction />
              </div>
              <div className="menu-title">Transaction</div>
            </a>
            <ul>
              <li>
                {" "}
                <Link type="button" to="/transaction/input-jurnal">
                  <i className="bx bx-right-arrow-alt" />
                  Input Journal
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/transaction/input-jurnal-audit">
                  <i className="bx bx-right-arrow-alt" />
                  Input Journal Audit
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/transaction/import-journal">
                  <i className="bx bx-right-arrow-alt" />
                  Import Journal
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/transaction/posting-journal">
                  <i className="bx bx-right-arrow-alt" />
                  Posting/Unposting Journal
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/transaction/transfer-journal">
                  <i className="bx bx-right-arrow-alt" />
                  Transfer Journal
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/transaction/consolidation-journal">
                  <i className="bx bx-right-arrow-alt" />
                  Consolidation Journal
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/transaction/close-month-year">
                  <i className="bx bx-right-arrow-alt" />
                  Close Month/Year
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/transaction/open-period">
                  <i className="bx bx-right-arrow-alt" />
                  Open Period
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/transaction/depreciation">
                  <i className="bx bx-right-arrow-alt" />
                  Depreciation
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="has-arrow">
              <div className="parent-icon">
                <TbReportSearch />
              </div>
              <div className="menu-title">Report</div>
            </a>
            <ul>
              <li>
                {" "}
                <Link type="button" to="/report/ledger">
                  <i className="bx bx-right-arrow-alt" />
                  Ledger
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/report/trial-balance">
                  <i className="bx bx-right-arrow-alt" />
                  Trial Balance
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/report/inquiry-trial-balance">
                  <i className="bx bx-right-arrow-alt" />
                  Inquiry Trial Balance
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/report/flexible-report">
                  <i className="bx bx-right-arrow-alt" />
                  Flexible Report
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/report/bank-in-out">
                  <i className="bx bx-right-arrow-alt" />
                  Bank In Out
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="has-arrow">
              <div className="parent-icon">
                <GoGear />
              </div>
              <div className="menu-title">Utility</div>
            </a>
            <ul>
              <li>
                {" "}
                <Link type="button" to="/utility/menu">
                  <i className="bx bx-right-arrow-alt" />
                  Menu
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/utility/menu-control">
                  <i className="bx bx-right-arrow-alt" />
                  Menu Control
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/utility/user-group">
                  <i className="bx bx-right-arrow-alt" />
                  User Group
                </Link>
              </li>
              <li>
                {" "}
                <Link type="button" to="/utility/menu-authorization">
                  <i className="bx bx-right-arrow-alt" />
                  Menu Authorization
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        {/*end navigation*/}
      </div>
    </>
  );
}

export default Sidebar;
