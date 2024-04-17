const cookieParser = require("cookie-parser");
const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/User");

const PORT = process.env.PORT || 4000;

mongoose
  .connect("mongodb://127.0.0.1:27017/Authentication")
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((error) => {
    console.log("DB connection failed");
    console.error(error);
    process.exit(1);
  });

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api/v1/auth", userRoutes);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
