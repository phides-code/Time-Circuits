const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getAllUsers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("new_project");
    console.log("connected.");

    const allUsers = await db.collection("users").find().toArray();

    return res.status(200).json({ status: 200, allUsers: allUsers });
  } catch (err) {
    console.log(`caught error: `);
    console.log(err.message);
    return res.status(500).json({ status: 500, message: err.message });
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

const userLogin = async (req, res) => {
  console.log(`got req.body: `);
  console.log(req.body);

  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("new_project");
    console.log("connected.");

    const foundUser = await db
      .collection("users")
      .findOne({ _id: req.body.email });

    if (foundUser) {
      console.log(`user already in DB`);
      return res
        .status(200)
        .json({ status: 200, message: "user already in DB" });
    } else {
      console.log(`adding user...`);
      // add user to DB
      const resultOfInsert = await db.collection("users").insertOne({
        _id: req.body.email,
        ...req.body,
      });
      return res
        .status(200)
        .json({ status: 200, message: "adding new user to DB..." });
    }
  } catch (err) {
    console.log(`caught error: `);
    console.log(err.message);
    return res.status(500).json({ status: 500, message: err.message });
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

module.exports = { getAllUsers, userLogin };
