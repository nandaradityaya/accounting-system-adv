import { Route, Routes } from "react-router-dom";

import Depreciation from "../../pages/transaction/depresiasi";

export function DepreciationRoute() {
  return (
    <Routes>
      <Route path="/" element={<Depreciation />} />
    </Routes>
  );
}
