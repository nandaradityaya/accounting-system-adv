/* eslint-disable react/prop-types */
// import React from 'react';

const BadgeStatus = ({ status }) => {
  const getStatusColor = (status) => {
    return status === "Active" || status === "Open" ? "primary" : "secondary";
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
