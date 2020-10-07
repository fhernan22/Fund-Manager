import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import { globalThemeContext } from "../../contexts/globalThemeContext";

// reactstrap components
import { Nav, Collapse } from "react-bootstrap";

const Sidebar = () => {
  const { sidebarTheme, sidebarMini } = useContext(globalThemeContext);

  const setSidebarMini = () => {
    if (sidebarMini) {
      if (window.innerWidth < 993) {
        return "sidebar-mini nav-open";
      } else {
        return "sidebar-mini";
      }
    } else {
      return "";
    }
  };

  return (
    <div className={setSidebarMini()}>
      <div className="sidebar " data={sidebarTheme}>
        <div className="sidebar-wrapper">
          <div className="logo">hello</div>
          <Nav></Nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
