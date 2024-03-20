import { Route, Routes } from "react-router-dom";

import OpenPeriod from "../../pages/transaction/open-period";

export function OpenPeriodRoute() {
  return (
    <Routes>
      <Route path="/" element={<OpenPeriod />} />
    </Routes>
  );
}
