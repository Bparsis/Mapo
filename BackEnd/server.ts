import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";

const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})