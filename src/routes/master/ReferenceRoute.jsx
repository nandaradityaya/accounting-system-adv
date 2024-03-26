import { Route, Routes } from "react-router-dom";

import Reference from "../../pages/master/reference";
import ReferenceDetail from "../../pages/master/reference/detail";
import AddNewLookup from "../../pages/master/reference/addNew";

export function ReferenceRoute() {
  return (
    <Routes>
      <Route path="/" element={<Reference />} />
      <Route path="/add-new-lookup" element={<AddNewLookup />} />
      <Route path="/:referenceId" element={<ReferenceDetail />} />
    </Routes>
  );
}
