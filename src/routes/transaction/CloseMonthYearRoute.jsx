import { Route, Routes } from "react-router-dom";

import CloseMonthYear from "../../pages/transaction/close-month-year";

export function CloseMonthYearRoute() {
  return (
    <Routes>
      <Route path="/" element={<CloseMonthYear />} />
    </Routes>
  );
}
