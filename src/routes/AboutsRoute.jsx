import { Route, Routes } from "react-router-dom";

import About from "../pages/about/about";

export function AboutsRoute() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
    </Routes>
  );
}
