const express = require("express");
const dotenv = require("dotenv");
const connectdB = require("./config/db");
const path = require("path");

const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();
//for the connection of the DB.
connectdB();
//object for the express.
const app = express();
//ALWAYS to do whenever you accept data from user.
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

//`````````````````````````````Deployment````````````````````````````````````
const _dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
//````````````````````````````Deployment.````````````````````````

//Middleware for not found and errorHandling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
//create webserver
app.listen(
  PORT,
  console.log(
    `Server is being running on port ${process.env.NODE_ENV} mode on port ${PORT}..`
  )
);
