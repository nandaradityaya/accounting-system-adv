import { Route, Routes } from "react-router-dom";

import InquiryTrialBalance from "../../pages/report/inquiry-trial-balance";

export function InquiryTrialBalanceRoute() {
  return (
    <Routes>
      <Route path="/" element={<InquiryTrialBalance />} />
    </Routes>
  );
}
