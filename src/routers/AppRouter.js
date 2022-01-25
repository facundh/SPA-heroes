import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";

import { Navbar } from "../components/ui/Navbar";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRouter = () => {
  return (
    <Router>

      <Routes>

        <Route path="/login" element={
          <PublicRoute>
                <LoginScreen />
          </PublicRoute>
        } />
        <Route path='/*' element= { 
              <PrivateRoute >
                <DashBoardRoutes />
              </PrivateRoute>
        }/>
       
      </Routes>
    </Router>
  );
};

export default AppRouter;
