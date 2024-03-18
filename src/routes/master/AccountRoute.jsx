import { Route, Routes } from "react-router-dom";

import Account from "../../pages/master/account";

export function AccountRoute() {
  return (
    <Routes>
      <Route path="/" element={<Account />} />
    </Routes>
  );
}
