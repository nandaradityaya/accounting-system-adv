import { Route, Routes } from "react-router-dom";

import MenuAuthorization from "../../pages/utility/menu-authorization";
import DetailAuthorizationMenu from "../../pages/utility/menu-authorization/detail";

export function MenuAuthorizationRoute() {
  return (
    <Routes>
      <Route path="/" element={<MenuAuthorization />} />
      <Route
        path="/:authorizationMenuId"
        element={<DetailAuthorizationMenu />}
      />
    </Routes>
  );
}
