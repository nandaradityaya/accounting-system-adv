/* eslint-disable react/prop-types */
// import React from 'react';

const BadgeStatus = ({ status }) => {
  // const getStatusColor = (status) => {
  //   return status === "Active" || status === "Open" || status === "Posted"
  //     ? "primary"
  //     : "secondary";
  // };
  const getStatusColor = (status) => {
    const lowercaseStatus = status.toLowerCase();
    switch (lowercaseStatus) {
      case "open":
      case "posted":
      case "posting":
      case "active":
        return "primary";
      case "delete":
        return "danger";
      default:
        return "secondary";
    }
  };
  return (
    <div
      className={`badge rounded-pill text-${getStatusColor(
        status
      )} bg-light-${getStatusColor(status)} p-2 text-uppercase px-3`}
    >
      {status}
    </div>
  );
};

export default BadgeStatus;
