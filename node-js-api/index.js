const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user-routes");
const adminRoutes = require("./routes/admin-routes");
const HttpError = require("./utils/http-error");

const port = 3000;
app.use(bodyparser.json());
//routes
app.use("api/v1/user", userRoutes);
app.use("api/v1/admin", adminRoutes);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Role"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use((req, res, next) => {
  const error = new HttpError("error found", 404)
  return error;
});

app.use((error, req, res, next) => {
  res.status(error.code);
  res.status({
    message: error.message || "unknown error occured",
    code: error.code,
  });
});

mongoose
  .connect(
    "mongodb+srv://dimplegulwani:yTnmFF6wlcuijQM7@mernstackcluster.lnrw7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`app running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
