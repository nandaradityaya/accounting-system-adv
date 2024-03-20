import { Navigate, Route, Routes } from "react-router-dom";

import { ReferenceRoute } from "./master/ReferenceRoute";
import { DocumentNumberingRoute } from "./master/DocumentNumbering";
import { PeriodRoute } from "./master/PeriodRoute";
import { AccountRoute } from "./master/AccountRoute";
import { ColFlexibleReportRoute } from "./master/ColFlexibleReport";
import { FormatFlexibleReportRoute } from "./master/FormatFlexibleReport";
import { InputJournalRoute } from "./transaction/InputJurnalRoute";
import { InputJournalAuditRoute } from "./transaction/InputJurnalAuditRoute";
import { ImportJournalRoute } from "./transaction/ImportJournal";
import { PostingJournalRoute } from "./transaction/PostingJournal";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="master/reference/*" element={<ReferenceRoute />} />
      <Route
        path="master/document-numbering/*"
        element={<DocumentNumberingRoute />}
      />
      <Route path="master/period/*" element={<PeriodRoute />} />
      <Route path="master/account/*" element={<AccountRoute />} />
      <Route
        path="master/col-flexible-report/*"
        element={<ColFlexibleReportRoute />}
      />
      <Route
        path="master/format-flexible-report/*"
        element={<FormatFlexibleReportRoute />}
      />

      <Route
        path="transaction/input-jurnal/*"
        element={<InputJournalRoute />}
      />

      <Route
        path="transaction/input-jurnal-audit/*"
        element={<InputJournalAuditRoute />}
      />

      <Route
        path="transaction/import-journal/*"
        element={<ImportJournalRoute />}
      />

      <Route
        path="transaction/posting-journal/*"
        element={<PostingJournalRoute />}
      />

      <Route path="" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}

// pathnya kasih bintang supaya dia bisa akses href yg ada di halaman dashboard, klo gapake bintang malah jadi blank purih klo mau pindah halaman yg hrefnya ada di dashboard
// klo pathnya kosong atau slash doang maka navigate ke dashboard
// <GuardRoute> (children) </GuardRoute> | childrennya itu berarti route dashboard
