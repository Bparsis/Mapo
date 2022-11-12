import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import Endpoints from './Endpoints/Endpoint';

const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/db/createUser", async (req, res) => {
	let param = req.body;
  const result = await Endpoints.CreateUser(param.dbName, param.collName, param.query);
  res.send(result);
});

app.post("/db/login", async (req, res) => {
	let param = req.body;
  const result = await Endpoints.Login(param.dbName, param.collName, param.query);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})