import { Route, Routes } from "react-router-dom";

import ChangePassword from "../../pages/utility/change-password";

export function ChangePasswordRoute() {
  return (
    <Routes>
      <Route path="/" element={<ChangePassword />} />
    </Routes>
  );
}
