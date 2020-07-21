import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard"));
const Profile = React.lazy(() => import("./views/Profile"));
const PaySlips = React.lazy(() => import("./views/PaySlips"));
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/payslips", name: "PaySlips", component: PaySlips },
];

export default routes;
