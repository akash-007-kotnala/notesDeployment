import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
const Footer = () => {
  return (
    <>
      <AppBar position="static" style={{ background: "#114b7a" }}>
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © 2021 SkyNotes
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Footer;
