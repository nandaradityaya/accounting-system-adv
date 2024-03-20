// import React from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GrTransaction } from "react-icons/gr";

function Sidebar() {
  // const navigate = useNavigate();
  return (
    <>
      <div className="sidebar-wrapper" data-simplebar="true">
        <div className="sidebar-header">
          <div className="d-flex ms-2">
            <div>
              <img src="/logo.png" alt="logo icon" width={28} height={28} />
            </div>
            <div>
              <h6 className="text-white mt-1 ms-3">General Ledger</h6>
            </div>
          </div>
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
                <i className="bx bx-home" />
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
        </ul>
        {/*end navigation*/}
      </div>
    </>
  );
}

export default Sidebar;
