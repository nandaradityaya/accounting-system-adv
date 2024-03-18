import { Route, Routes } from "react-router-dom";

import Period from "../../pages/master/period";

export function PeriodRoute() {
  return (
    <Routes>
      <Route path="/" element={<Period />} />
    </Routes>
  );
}
