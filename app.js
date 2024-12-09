import express from "express";
import path from "path";
import logger from "./middlewares/logger.js";
import handleError from "./middlewares/handleError.js";

const port = process.env.PORT || 8000;

const app = express();
// app.use(logger);
app.set("view engine", "ejs");
app.use(express.static(path.resolve("public")));
app.use(express.json());
app
  .route("/")
  .get(logger, (req, res, next) => {
    res.render('home', {
      title: 'Arka Jana'
    })
  })
  .post((req, res) => {
    // res.setHeader('Content-Type', 'text/html')
    // res.status(400).send({data: ""});
    // console.log(req.query)
    console.log(req.body);
    res.status(200).sendFile(path.resolve("public", "home.txt"));
  });
app.use(handleError);
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
