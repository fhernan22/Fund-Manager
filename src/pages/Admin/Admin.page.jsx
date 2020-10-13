import React from "react";

import Sidebar from "../../components/SidebarComponent/Sidebar.component";
import ThemeSettings from "../../components/ThemeSetting/ThemeSettings.component";
import MainPanel from "../../components/MainPanel/MainPanel.component";

import { ThemeProvider } from "../../contexts/globalThemeContext";

import routes from "../../utils/routes";

const Admin = () => {
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

export default Admin;
