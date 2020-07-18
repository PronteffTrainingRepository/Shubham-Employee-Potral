import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard"));
const Profile = React.lazy(() => import("./views/Profile"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/profile", name: "Profile", component: Profile },
];

export default routes;
