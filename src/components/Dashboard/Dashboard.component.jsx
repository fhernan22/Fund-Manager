import React from "react";

import Sidebar from "../SidebarComponent/Sidebar.component";
import ThemeSettings from "../ThemeSetting/ThemeSettings.component";
import MainPanel from "../MainPanel/MainPanel.component";

import { ThemeProvider } from "../../contexts/globalThemeContext";

import routes from "../../utils/routes";

const Dashboard = () => {
  return (
    <>
      <ThemeProvider>
        <Sidebar routes={routes} />
        <MainPanel />
        <ThemeSettings />
      </ThemeProvider>
    </>
  );
};

export default Dashboard;
