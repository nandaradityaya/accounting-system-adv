import { Route, Routes } from "react-router-dom";

import Reference from "../../pages/master/reference";
import ReferenceDetail from "../../pages/master/reference/detail";

export function ReferenceRoute() {
  return (
    <Routes>
      <Route path="/" element={<Reference />} />
      <Route path="/:referenceId" element={<ReferenceDetail />} />
    </Routes>
  );
}
