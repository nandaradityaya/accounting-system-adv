import { Route, Routes } from "react-router-dom";

import Reference from "../../pages/master/reference";
// import DocumentNumbering from "../pages/master/document-numbering";

export function ReferenceRoute() {
  return (
    <Routes>
      <Route path="/" element={<Reference />} />
    </Routes>
  );
}
