import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import MyNotes from "./Pages/MyNotes/MyNotes";
import CreateNote from "./Pages/CreateNote/CreateNote";
import EditNote from "./Pages/MyNotes/EditNote";
import Profile from "./Pages/Profile/Profile";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import { useState } from "react";
import SingleNote from "./Pages/MyNotes/SingleNote";
import PageNotFound from "./Pages/ErrorPage/PageNotFound";

const theme = createTheme({
  palette: {
    primary: {
      main: "#114b7a",
    },
    secondary: {
      main: "#2E3B55",
    },
  },
});

// <Route path="/profile" component={Profile} exact/>
const App = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header setSearch={(s) => setSearch(s)} />
        <main>
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/login" component={LoginPage} exact />
            <Route path="/register" component={RegisterPage} exact />
            <Route path="/createnote" component={CreateNote} exact />
            <Route path="/note/:id" component={EditNote} exact />
            <Route path="/singleNote/:id" component={SingleNote} exact />
            <Route path="/profile" component={Profile} exact />
            <Route
              path="/mynotes"
              component={() => <MyNotes search={search} />}
              exact
            />
            <Route component={PageNotFound} />
          </Switch>
        </main>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
