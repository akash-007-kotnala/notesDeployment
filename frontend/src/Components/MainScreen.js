import { Container } from "@material-ui/core";
import React from "react";
import "./MainScreen.css";

const MainScreen = ({ title, children }) => {
  return (
    <div className="mainback">
      <Container>
        <div className="page">
          {title && (
            <>
              <h1 className="heading">{title}</h1>
              <hr />
            </>
          )}

          {children}
        </div>
      </Container>
    </div>
  );
};

export default MainScreen;
