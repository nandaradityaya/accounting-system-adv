import { Route, Routes } from "react-router-dom";

import MenuControl from "../../pages/utility/menu-control";

export function MenuControlRoute() {
  return (
    <Routes>
      <Route path="/" element={<MenuControl />} />
    </Routes>
  );
}
