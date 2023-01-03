import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import "./PageNotFound.css";
import errorImage from "./error.png";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <div className="Warning">
        <h1 className="TextStyle">404 - Page Not Found</h1>
        <Link to="/">
          <Typography>Go Back</Typography>
        </Link>
      </div>
      <img src={errorImage} alt="Page not found" />
    </div>
  );
};

export default PageNotFound;
