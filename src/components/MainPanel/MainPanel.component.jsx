import React, { useContext, useState } from "react";
import { Switch, Redirect, Route, useHistory } from "react-router-dom";

import { globalThemeContext } from "../../contexts/globalThemeContext";
import AdminNavbar from "../AdminNavbar/AdminNavbar.component";

import "./MainPanel.styles.scss";

import routes from "../../utils/routes";

const MainPanel = () => {
  const { sidebarTheme, currentTheme, sidebarMini } = useContext(
    globalThemeContext
  );

  const pathname = useHistory().location.pathname;
  const NavTitle = pathname
    .substring(pathname.lastIndexOf("/") + 1, pathname.length)
    .toUpperCase();

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.path === "/admin") {
        return (
          <Route
            path={prop.path + prop.layout}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div
        className={
          currentTheme === "darkMode"
            ? "main-panel"
            : "main-panel white-content"
        }
        data={sidebarTheme}
      >
        <AdminNavbar title={NavTitle} />

        <div
          className={`content ${
            sidebarMini ? "content-full-width" : "content-short-width"
          }`}
        >
          <Switch>
            {getRoutes(routes)}
            <Redirect from="*" to="/admin/dashboard" />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default MainPanel;
