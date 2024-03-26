import { Route, Routes } from "react-router-dom";

import FormatFlexibleReport from "../../pages/master/format-flexible-report";
import FormatFlexibleReportDetail from "../../pages/master/format-flexible-report/detail";
import AddNewFormatFlexibleReport from "../../pages/master/format-flexible-report/addNew";

export function FormatFlexibleReportRoute() {
  return (
    <Routes>
      <Route path="/" element={<FormatFlexibleReport />} />
      <Route
        path="/add-new-format-flexible-report"
        element={<AddNewFormatFlexibleReport />}
      />
      <Route
        path="/:formatFlexReportId"
        element={<FormatFlexibleReportDetail />}
      />
    </Routes>
  );
}
