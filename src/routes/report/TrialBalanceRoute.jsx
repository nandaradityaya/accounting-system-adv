import { Route, Routes } from "react-router-dom";

import TrialBalance from "../../pages/report/trial-balance";

export function TrialBalanceRoute() {
  return (
    <Routes>
      <Route path="/" element={<TrialBalance />} />
    </Routes>
  );
}
