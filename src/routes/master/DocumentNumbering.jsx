import { Route, Routes } from "react-router-dom";

import DocumentNumbering from "../../pages/master/document-numbering";
import DocumentDetail from "../../pages/master/document-numbering/detail";
import AddNewNumbering from "../../pages/master/document-numbering/addNew";

export function DocumentNumberingRoute() {
  return (
    <Routes>
      <Route path="/" element={<DocumentNumbering />} />
      <Route path="/add-new-document" element={<AddNewNumbering />} />
      <Route path="/:documentId" element={<DocumentDetail />} />
    </Routes>
  );
}
