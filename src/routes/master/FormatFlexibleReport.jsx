import { Route, Routes } from "react-router-dom";

import FormatFlexibleReport from "../../pages/master/format-flexible-report";
import FormatFlexibleReportDetail from "../../pages/master/format-flexible-report/detail";

export function FormatFlexibleReportRoute() {
  return (
    <Routes>
      <Route path="/" element={<FormatFlexibleReport />} />
      <Route
        path="/:formatFlexReportId"
        element={<FormatFlexibleReportDetail />}
      />
    </Routes>
  );
}
