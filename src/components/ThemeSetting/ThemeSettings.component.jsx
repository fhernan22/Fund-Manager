import React, { useContext, useState } from "react";

import Switch from "react-bootstrap-switch";

import {
  globalThemeContext,
  globalThemeDispatchContext,
} from "../../contexts/globalThemeContext";

const ThemeSettings = () => {
  const { sidebarTheme, sidebarMini, currentTheme } = useContext(
    globalThemeContext
  );
  const dispatch = useContext(globalThemeDispatchContext);

  const [isSettingsDialogOpen, setIsSettingsDialogOpen] = useState(false);
  const [isThemeDark, setIsThemeDark] = useState(true);

  const handleClick = () => {
    setIsSettingsDialogOpen(!isSettingsDialogOpen);
  };

  const toggleSidebarMini = () => {
    dispatch({
      type: "TOGGLE_SIDEBAR_MINI",
      sidebarMini: !sidebarMini,
    });
  };

  const toggleTheme = () => {
    setIsThemeDark(!isThemeDark);
    dispatch({
      type: "TOGGLE_THEME",
      currentTheme: currentTheme === "darkMode" ? "lightMode" : "darkMode",
    });
  };

  return (
    <div className="fixed-plugin">
      <div className={isSettingsDialogOpen ? "dropdown show" : "dropdown"}>
        <a
          href="#fidel"
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          <i className="fa fa-cog fa-2x" />
        </a>
        <ul className="dropdown-menu show">
          <li className="header-title">SIDEBAR BACKGROUND</li>
          <li className="adjustments-line">
            <div className="badge-colors text-center">
              <span
                className={
                  sidebarTheme === "primary"
                    ? "badge filter badge-primary active"
                    : "badge filter badge-primary"
                }
                data-color="primary"
                onClick={() => {
                  dispatch({
                    type: "TOGGLE_SIDEBAR_THEME",
                    sidebarTheme: "primary",
                  });
                }}
              />
              <span
                className={
                  sidebarTheme === "blue"
                    ? "badge filter badge-info active"
                    : "badge filter badge-info"
                }
                data-color="info"
                onClick={() => {
                  dispatch({
                    type: "TOGGLE_SIDEBAR_THEME",
                    sidebarTheme: "blue",
                  });
                }}
              />
              <span
                className={
                  sidebarTheme === "green"
                    ? "badge filter badge-success active"
                    : "badge filter badge-success"
                }
                data-color="success"
                onClick={() => {
                  dispatch({
                    type: "TOGGLE_SIDEBAR_THEME",
                    sidebarTheme: "green",
                  });
                }}
              />
              <span
                className={
                  sidebarTheme === "orange"
                    ? "badge filter badge-warning active"
                    : "badge filter badge-warning"
                }
                data-color="warning"
                onClick={() => {
                  dispatch({
                    type: "TOGGLE_SIDEBAR_THEME",
                    sidebarTheme: "orange",
                  });
                }}
              />
              <span
                className={
                  sidebarTheme === "red"
                    ? "badge filter badge-danger active"
                    : "badge filter badge-danger"
                }
                data-color="danger"
                onClick={() => {
                  dispatch({
                    type: "TOGGLE_SIDEBAR_THEME",
                    sidebarTheme: "red",
                  });
                }}
              />
            </div>
          </li>
          <li className="header-title">SIDEBAR MINI</li>
          <li className="adjustments-line">
            <div className="togglebutton switch-sidebar-mini">
              <span className="label-switch">OFF</span>
              <Switch
                onChange={toggleSidebarMini}
                value={sidebarMini}
                onText=""
                offText=""
              />
              <span className="label-switch">ON</span>
            </div>
          </li>
          <li className="adjustments-line">
            <div className="togglebutton switch-sidebar-mini">
              <span className="label-switch">LIGHT MODE</span>
              <Switch
                onChange={toggleTheme}
                value={isThemeDark}
                onText=""
                offText=""
              />
              <span className="label-switch">DARK MODE</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ThemeSettings;
