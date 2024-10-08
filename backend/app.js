const { authRoute } = require("./routes");
const { errorHandler } = require("./middlewares");
const express = require("express");
const { connectMongodb } = require("./init/mongodb");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// init app
const app = express();

// connect database
connectMongodb();

// third-party middleware
app.use(express.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(morgan("dev"));

// route section
app.use("/api/v1/auth", authRoute);

app.get("/", (req, res) => {
    res
        .status(200)
        .json({ code: 200, status: true, message: "Server is running." });
});

app.use("*", (req, res) => {
    res.status(404).json({
        code: 404,
        status: false,
        message: "API not found",
    });
});

app.use(errorHandler);

module.exports = app;
