/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

function TabComponent({ id, iconClass, title, active, handleClick }) {
  return (
    <li className="nav-item" role="presentation">
      <a
        type="button"
        className={`nav-link ${active ? "active" : ""}`}
        onClick={() => handleClick(id)}
        role="tab"
        aria-selected={active ? "true" : "false"}
      >
        <div className="d-flex align-items-center">
          <div className="tab-icon">
            <i className={`bx ${iconClass} font-18 me-1`} />
          </div>
          <div className="tab-title">{title}</div>
        </div>
      </a>
    </li>
  );
}

function TabContent({ id, active, children }) {
  return (
    <div
      className={`tab-pane fade ${active ? "show active" : ""}`}
      id={id}
      role="tabpanel"
    >
      {children}
    </div>
  );
}

export { TabComponent, TabContent };
