import { Route, Routes } from "react-router-dom";

import ConsolidationJournal from "../../pages/transaction/consolidation-journal";

export function ConsolidationJournalRoute() {
  return (
    <Routes>
      <Route path="/" element={<ConsolidationJournal />} />
    </Routes>
  );
}
