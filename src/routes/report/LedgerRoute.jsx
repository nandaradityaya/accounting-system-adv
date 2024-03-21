import { Route, Routes } from "react-router-dom";

import Ledger from "../../pages/report/ledger";

export function LedgerRoute() {
  return (
    <Routes>
      <Route path="/" element={<Ledger />} />
    </Routes>
  );
}
