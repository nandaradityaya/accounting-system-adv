import { Route, Routes } from "react-router-dom";

// import ColFlexibleReportDetail from "../../pages/master/col-flexible-report/detail";
import FormatFlexibleReport from "../../pages/master/format-flexible-report";

export function FormatFlexibleReportRoute() {
  return (
    <Routes>
      <Route path="/" element={<FormatFlexibleReport />} />
      {/* <Route path="/:formatFlexReportId" element={<ColFlexibleReportDetail />} /> */}
    </Routes>
  );
}
