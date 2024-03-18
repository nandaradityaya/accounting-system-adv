/* eslint-disable react/prop-types */
// import React from "react";
import { Link } from "react-router-dom";

function CBreadcrumb({ textFirst, textSecond, textThird, urlSecond }) {
  return (
    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
      <div className="breadcrumb-title pe-3">{textFirst}</div>
      <div className="ps-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 p-0">
            <li className="breadcrumb-item">
              <a type="button">
                <i className="bx bx-home-alt text-primary"></i>
              </a>
            </li>

            {!textThird && (
              <li className="breadcrumb-item active" aria-current="page">
                {textSecond}
              </li>
            )}

            {textThird && (
              <li className="breadcrumb-item">
                <Link to={urlSecond}>{textSecond}</Link>
              </li>
            )}

            {textThird && (
              <li className="breadcrumb-item active" aria-current="page">
                {textThird}
              </li>
            )}
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default CBreadcrumb;
