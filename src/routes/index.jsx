import { Navigate, Route, Routes } from "react-router-dom";

import { ReferenceRoute } from "./master/ReferenceRoute";
import { DocumentNumberingRoute } from "./master/DocumentNumbering";
import { PeriodRoute } from "./master/PeriodRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="master/reference/*" element={<ReferenceRoute />} />
      <Route
        path="master/document-numbering/*"
        element={<DocumentNumberingRoute />}
      />
      <Route path="master/period/*" element={<PeriodRoute />} />

      <Route path="" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}

// pathnya kasih bintang supaya dia bisa akses href yg ada di halaman dashboard, klo gapake bintang malah jadi blank purih klo mau pindah halaman yg hrefnya ada di dashboard
// klo pathnya kosong atau slash doang maka navigate ke dashboard
// <GuardRoute> (children) </GuardRoute> | childrennya itu berarti route dashboard
