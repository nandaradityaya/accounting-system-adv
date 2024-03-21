import { Route, Routes } from "react-router-dom";

import BankInOut from "../../pages/report/bank-in-out";

export function BankInOutRoute() {
  return (
    <Routes>
      <Route path="/" element={<BankInOut />} />
    </Routes>
  );
}
