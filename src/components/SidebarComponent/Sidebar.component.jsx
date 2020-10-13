import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { globalThemeContext } from "../../contexts/globalThemeContext";

import { Nav } from "reactstrap";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";

import "./Sidebar.styles.scss";

const Sidebar = ({ routes }) => {
  const { sidebarTheme, sidebarMini } = useContext(globalThemeContext);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCLick = (index) => {
    setActiveIndex(index);
  };

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

  const createLinks = () => {
    return routes.map((prop, key) => {
      return (
        <li
          key={key}
          className={activeIndex === key ? "active" : ""}
          onClick={() => handleCLick(key)}
        >
          <Link to={prop.path + prop.layout} data-toggle="collapse">
            <i className={prop.icon} />
            {<p>{prop.name}</p>}
          </Link>
        </li>
      );
    });
  };

  return (
    <div className={setSidebarMini()}>
      <div className="sidebar " data={sidebarTheme}>
        <div className="sidebar-wrapper">
          <div className="logo">
            <div className="logo-img">
              <DonutLargeIcon
                style={{ width: "100%", fontSize: "3rem", color: "#fefefe" }}
              />
            </div>
          </div>
          <Nav>{createLinks()}</Nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
