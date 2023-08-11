import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import { routing } from "./common/routing";
import Home from "./pages/Home";
import ViewCharacter from "./pages/ViewCharacter";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path={routing.home} element={<Home />} />
      <Route
        path={`${routing.viewCharacter}/:id`}
        element={<ViewCharacter />}
      />
    </RouterRoutes>
  );
};

export default Routes;
