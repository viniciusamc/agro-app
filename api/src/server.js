require("express-async-errors");
require("dotenv").config();

const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");
const AppError = require("./utils/AppError.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      statusCode: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    message: "internal server error",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
