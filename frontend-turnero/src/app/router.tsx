import { BrowserRouter, Routes, Route } from "react-router-dom";
import OfficePage from "@/presentational/offices/OfficePage";
import Home from "@/pages/Home";
import ManagerPage from "@/presentational/managers/managerPage";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/offices" element={<OfficePage />} />
      <Route path="/managers" element={<ManagerPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;