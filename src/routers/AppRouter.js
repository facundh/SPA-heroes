import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";

import { Navbar } from "../components/ui/Navbar";
import { DashBoardRoutes } from "./DashBoardRoutes";

const AppRouter = () => {
  return (
    <Router>

      <Routes>
        <Route path="/login" element={<LoginScreen />} />

        <Route path='/*' element={ <DashBoardRoutes/> }/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
