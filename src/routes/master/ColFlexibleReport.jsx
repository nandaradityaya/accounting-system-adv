import { Route, Routes } from "react-router-dom";

import ColFlexibleReport from "../../pages/master/col-flexible-report";
import ColFlexibleReportDetail from "../../pages/master/col-flexible-report/detail";
import AddNewColFlexibleReport from "../../pages/master/col-flexible-report/addNew";

export function ColFlexibleReportRoute() {
  return (
    <Routes>
      <Route path="/" element={<ColFlexibleReport />} />
      <Route
        path="/add-new-flexible-report"
        element={<AddNewColFlexibleReport />}
      />
      <Route path="/:flexReportId" element={<ColFlexibleReportDetail />} />
    </Routes>
  );
}
