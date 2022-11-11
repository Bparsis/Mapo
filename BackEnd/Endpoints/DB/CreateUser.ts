import VerifUser from "../../Function/VerifUser";
import { hash } from "../../Function/Crypt";
import { MongoClient } from "mongodb";
import Data from "../../Data";

const CreateUser = async (dbName: string, collName: string, User: TUser) => {
  var response;
  var Error = VerifUser(User);
  if (Error.error) {
    response = Error;
  } else {
    const uri = Data.dbURI;
    const client = new MongoClient(uri);
    const database = client.db(dbName);
    const coll = database.collection(collName);
    try {
      var alreadyExist = await coll.findOne({ userName: User.userName })
      if (alreadyExist === null) {
        var newUser = { ...User, createdAt: new Date() }
        newUser.password = hash(User.password)
        // var result = await coll.insertOne({newUser});
        response = { error: false, result: "result", user: newUser};
      } else {
        response = { error: true, list: [{flag: "name", message: "Nickname already taken"}] };
      }
    } finally {
      await client.close();
    }
  }
  return response;
}

export default CreateUser;