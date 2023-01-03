import { Button, Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  return (
    <div className="main">
      <Container>
        <div className="intro-text">
          <div>
            <h1 className="title">Welcome to Sky Notes</h1>
            <p className="subtitle">One Safe place for all your notes.</p>
          </div>
          <div className="buttonContainer">
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                variant="contained"
                disableElevation
                className="landingbutton"
                color="default"
              >
                Login
              </Button>
            </Link>

            <Link
              to="/register"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                variant="contained"
                disableElevation
                className="landingbutton"
                color="primary"
              >
                Signup
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
