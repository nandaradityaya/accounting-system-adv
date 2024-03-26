import { Route, Routes } from "react-router-dom";

import InputJurnalAudit from "../../pages/transaction/input-jurnal-audit";
import InputJournalDetailAudit from "../../pages/transaction/input-jurnal-audit/detail";
import AddNewInputJournalAudit from "../../pages/transaction/input-jurnal-audit/addNew";

export function InputJournalAuditRoute() {
  return (
    <Routes>
      <Route path="/" element={<InputJurnalAudit />} />
      <Route
        path="/add-new-input-journal-audit"
        element={<AddNewInputJournalAudit />}
      />
      <Route path="/:journalAuditId" element={<InputJournalDetailAudit />} />
    </Routes>
  );
}
