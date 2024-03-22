import { Route, Routes } from "react-router-dom";

import MenuUtils from "../../pages/utility/menu";

export function MenuRoute() {
  return (
    <Routes>
      <Route path="/" element={<MenuUtils />} />
    </Routes>
  );
}
