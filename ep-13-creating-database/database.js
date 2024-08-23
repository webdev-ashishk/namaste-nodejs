const { MongoClient } = require("mongodb");

const URL =
  "mongodb+srv://webdev-ashishk:aGO6uT78UXXMuJgb@namastenode-by-webdev.awo3c.mongodb.net/";

const client = new MongoClient(URL);
const dbName = "HelloWorld";

async function Start() {
  await client.connect();
  console.log("connected successfully to server ");
  const db = client.db(dbName);
  const collection = db.collection("User");
  const data = {
    firstname: "anju",
    lastname: "singh",
    city: "gorakhpur",
    phoneNumber: "8939399382",
  };
  const data2 = {
    firstname: "deepika",
    lastname: "singh",
    city: "gorakhpur2",
    phoneNumber: "348843939493",
  };
  const insertResult = await collection.insertMany([data, data2]);
  console.log("Inserted documents =>", insertResult);

  return "done";
}
Start()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
