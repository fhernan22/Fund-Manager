import React from "react";

import Sidebar from "../SidebarComponent/Sidebar.component";
import ThemeSettings from "../ThemeSetting/ThemeSettings.component";
import MainPanel from "../MainPanel/MainPanel.component";

import { ThemeProvider } from "../../contexts/globalThemeContext";

const Dashboard = () => {
  return (
    <>
      <ThemeProvider>
        <Sidebar />
        <MainPanel />
        <ThemeSettings />
      </ThemeProvider>
    </>
  );
};

export default Dashboard;
