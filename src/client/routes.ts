import React, { lazy } from "react";

import LandingPage from "./pages/landing";
import DetalesPage from "./pages/details";

const routes = [
  {
    exact: true,
    path: "/",
    name: "Landing Page",
    component: LandingPage,
  },
  {
    exact: true,
    path: "/details",
    name: "Detales Page",
    component: DetalesPage,
  },
];

export default routes;
