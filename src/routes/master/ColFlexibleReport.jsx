import { Route, Routes } from "react-router-dom";

import ColFlexibleReport from "../../pages/master/col-flexible-report";
import ColFlexibleReportDetail from "../../pages/master/col-flexible-report/detail";

export function ColFlexibleReportRoute() {
  return (
    <Routes>
      <Route path="/" element={<ColFlexibleReport />} />
      <Route path="/:flexReportId" element={<ColFlexibleReportDetail />} />
    </Routes>
  );
}
