import { Route, Routes } from "react-router-dom";

import DocumentNumbering from "../../pages/master/document-numbering";
import DocumentDetail from "../../pages/master/document-numbering/detail";

export function DocumentNumberingRoute() {
  return (
    <Routes>
      <Route path="/" element={<DocumentNumbering />} />
      <Route path="/:documentId" element={<DocumentDetail />} />
    </Routes>
  );
}
