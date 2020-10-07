import React, { useContext } from "react";

import { globalThemeContext } from "../../contexts/globalThemeContext";
import AdminNavbar from "../AdminNavbar/AdminNavbar.component";

import { Row, Col, Card } from "react-bootstrap";

import "./MainPanel.styles.scss";

const MainPanel = () => {
  const { sidebarTheme, currentTheme, sidebarMini } = useContext(
    globalThemeContext
  );

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
        <AdminNavbar />

        <div
          className={`content ${
            sidebarMini ? "content-full-width" : "content-short-width"
          }`}
        >
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <Card.Header></Card.Header>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default MainPanel;
