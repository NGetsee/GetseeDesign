const faunadb = require("faunadb");
const q = faunadb.query;

exports.handler = async function (event, context) {
  try {
    const client = new faunadb.Client({
      secret: process.env.FAUNA_SECRET, // Access FaunaDB API key from environment variable
    });

    // Data to be added to FaunaDB
    const data = JSON.parse(event.body);

    // Create a new document in the "your_collection" collection
    const result = await client.query(
      q.Create(q.Collection("GetseeDesign"), { data })
    );

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to submit data to FaunaDB" }),
    };
  }
};
