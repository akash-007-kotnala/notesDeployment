import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../actions/userActions";
import "./Profile.css";
import Loading from "../../Components/Loading";
import MainScreen from "../../Components/MainScreen";
import ErrorAlert from "../../Components/ErrorAlert";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

//import {Button,Grid, Col} from '@mui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "115vh",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Profile = ({ location, history }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [picMessage, setPicMessage] = useState(null);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error } = userUpdate;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setPic(userInfo.pic);
    }
  }, [history, userInfo]);

  const postDetails = (pics) => {
    setPicMessage(null);

    if (!pics) {
      return setPicMessage("Please Select an Image");
    }

    setPicMessage(null);

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();

      data.append("file", pics);
      data.append("upload_preset", "skynotes");
      data.append("cloud_name", "sky004");
      fetch("https://api.cloudinary.com/v1_1/sky004/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateProfile({ name, email, password, pic }));

    history.push("/");
  };

  return (
    <div>
      <MainScreen title={`Want to Edit Profile ?`}>
        <form onSubmit={submitHandler}>
          <Grid container>
            {loading && <Loading />}
            {error && <ErrorAlert data={error} />}
            <Grid items sm={8} xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="User Name"
                name="name"
                autoFocus
                value={name}
                onChange={(e) => {
                  return setName(e.target.value);
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                value={email}
                onChange={(e) => {
                  return setEmail(e.target.value);
                }}
              />

              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="password"
                label="Password"
                name="Password"
                type="password"
                autoFocus
                value={password}
                onChange={(e) => {
                  return setPassword(e.target.value);
                }}
              />

              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                name="Confirm Password"
                type="password"
                autoFocus
                value={confirmPassword}
                onChange={(e) => {
                  return setconfirmPassword(e.target.value);
                }}
              />
              {picMessage && <ErrorAlert data={picMessage} />}
              <input
                accept="image/*"
                className={classes.input}
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                type="file"
                onChange={(e) => postDetails(e.target.files[0])}
              />
              <label htmlFor="raised-button-file">
                <Button
                  variant="contained"
                  component="span"
                  className={classes.button}
                  color="primary"
                >
                  Upload Profile Pic
                </Button>
              </label>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={
                  confirmPassword === password &&
                  email.length !== 0 &&
                  name.length !== 0
                    ? false
                    : true
                }
                style={{ marginLeft: "4px" }}
              >
                Update
              </Button>
            </Grid>

            <Grid
              items
              sm={4}
              xs={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={pic} alt={name} className="profilePic" />
            </Grid>
          </Grid>
        </form>
      </MainScreen>
    </div>
  );
};

export default Profile;
