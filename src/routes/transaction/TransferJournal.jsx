import { Route, Routes } from "react-router-dom";

import TransferJournal from "../../pages/transaction/transfer-journal";

export function TransferJournalRoute() {
  return (
    <Routes>
      <Route path="/" element={<TransferJournal />} />
    </Routes>
  );
}
