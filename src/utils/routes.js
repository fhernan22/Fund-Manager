import Dashboard from "../components/Dashboard/Dashboard.component";
import Markets from "../components/MarketsComponent/Markets.component";

const routes = [
  {
    path: "/admin",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/dashboard",
  },
  {
    path: "/admin",
    name: "Markets",
    icon: "tim-icons icon-chart-bar-32",
    component: Markets,
    layout: "/markets",
  },
];

export default routes;
