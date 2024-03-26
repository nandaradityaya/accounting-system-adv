import { Route, Routes } from "react-router-dom";

import InputJurnal from "../../pages/transaction/input-jurnal";
import InputJournalDetail from "../../pages/transaction/input-jurnal/detail";
import AddNewInputJournal from "../../pages/transaction/input-jurnal/addNew";

export function InputJournalRoute() {
  return (
    <Routes>
      <Route path="/" element={<InputJurnal />} />
      <Route path="/add-new-input-journal" element={<AddNewInputJournal />} />
      <Route path="/:journalId" element={<InputJournalDetail />} />
    </Routes>
  );
}
