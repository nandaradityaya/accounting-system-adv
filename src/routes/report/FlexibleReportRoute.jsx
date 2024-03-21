import { Route, Routes } from "react-router-dom";

import FlexibleReport from "../../pages/report/flexible-report";

export function FlexibleReportRoute() {
  return (
    <Routes>
      <Route path="/" element={<FlexibleReport />} />
    </Routes>
  );
}
