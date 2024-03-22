import { Route, Routes } from "react-router-dom";

import UserGroup from "../../pages/utility/user-group";

export function UserGroupRoute() {
  return (
    <Routes>
      <Route path="/" element={<UserGroup />} />
    </Routes>
  );
}
