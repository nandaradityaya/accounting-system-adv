import { Route, Routes } from "react-router-dom";

import DocumentNumbering from "../../pages/master/document-numbering";

export function DocumentNumberingRoute() {
  return (
    <Routes>
      <Route path="/" element={<DocumentNumbering />} />
    </Routes>
  );
}
