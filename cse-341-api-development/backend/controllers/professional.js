const mongodb = require("../db/connect");

// Fetch real-time data documents straight from MongoDB Atlas
const getData = async (req, res, next) => {
  try {
    // 1. Establish pointer targeting your specific verified cluster collection name
    const result = await mongodb.getDb().db().collection("professional").find();

    // 2. Convert database stream documents into a standard JavaScript array list
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");

      // 3. Return the array collection package to your calling frontend with a 200 OK status
      res.status(200).json(lists);
    });
  } catch (error) {
    console.error("Database query failed inside controller routine:", error);
    res
      .status(500)
      .json({ message: "Internal server tracking engine failure." });
  }
};

module.exports = { getData };
