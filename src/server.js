require("./db/connection");
const express = require("express");
const movieRouter = require("./routes/movie.routes");
const app = express();
const port = process.env.PORT || 5000;
const userRouter = require('./routes/user.routes')

app.use(express.json());
app.use(userRouter);
app.use(movieRouter);

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
}) 