import { Route, Routes } from "react-router-dom";

import ImportJournal from "../../pages/transaction/import-jurnal";

export function ImportJournalRoute() {
  return (
    <Routes>
      <Route path="/" element={<ImportJournal />} />
      {/* <Route path="/:journalId" element={<InputJournalDetail />} /> */}
    </Routes>
  );
}
