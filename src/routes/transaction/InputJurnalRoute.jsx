import { Route, Routes } from "react-router-dom";

import InputJurnal from "../../pages/transaction/input-jurnal";
import InputJournalDetail from "../../pages/transaction/input-jurnal/detail";

export function InputJournalRoute() {
  return (
    <Routes>
      <Route path="/" element={<InputJurnal />} />
      <Route path="/:journalId" element={<InputJournalDetail />} />
    </Routes>
  );
}
