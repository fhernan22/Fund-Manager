import Dashboard from "../components/Dashboard/Dashboard.component";
import Markets from "../components/MarketsComponent/Markets.component";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "",
  },
  {
    path: "/dashboard/markets",
    name: "Markets",
    icon: "tim-icons icon-chart-bar-32",
    component: Markets,
    layout: "",
  },
];

export default routes;
