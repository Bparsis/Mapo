import VerifUser from "../../Function/VerifUser";
import { hashCheck } from "../../Function/Crypt";
import { MongoClient } from "mongodb";
import Data from "../../Data";

const Login = async (dbName: string, collName: string, User: TLoginUser) => {
  var response;

  const uri = Data.dbURI;
  const client = new MongoClient(uri);
  const database = client.db(dbName);
  const coll = database.collection(collName);

  try {
    var findUser;
    var findByName = await coll.findOne({ userName: User.login })
    if (findByName === null) {
      var findByMail = await coll.findOne({ mail: User.login })
      if (findByMail === null){
        response = {error: true, list: [{flag: "login", message: "Nickname/Mail and password dont match"}]}
      } else {
        findUser = findByMail;
      }
    } else {
      findUser = findByName;
    }
    if (!response && findUser) {
      response
      if (hashCheck(User.password, findUser.password)){
        response = {error: false, user: findUser};
      } else {
        response = {error: true, list: [{flag: "login", message: "Nickname/Mail and password dont match 2"}]}
      }
    }
  } finally {
    await client.close();
  }

  return response;
}

export default Login;