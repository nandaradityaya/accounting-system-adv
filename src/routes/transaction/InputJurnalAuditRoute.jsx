import { Route, Routes } from "react-router-dom";

import InputJurnalAudit from "../../pages/transaction/input-jurnal-audit";
import InputJournalDetailAudit from "../../pages/transaction/input-jurnal-audit/detail";

export function InputJournalAuditRoute() {
  return (
    <Routes>
      <Route path="/" element={<InputJurnalAudit />} />
      <Route path="/:journalAuditId" element={<InputJournalDetailAudit />} />
    </Routes>
  );
}
