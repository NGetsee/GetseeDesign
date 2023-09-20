const faunadb = require("faunadb");
const q = faunadb.query;

exports.handler = async function (event, context) {
    try {
        const client = new faunadb.Client({
            secret: process.env.FAUNADB_SECRET,
        });

        const requestBody = JSON.parse(event.body);
        const newData = requestBody.data;

        // Create a new document in the FaunaDB collection
        const result = await client.query(
            q.Create(q.Collection("GetseeDesign"), {
                data: {
                    value: newData,
                },
            })
        );

        return {
            statusCode: 200,
            body: JSON.stringify(result),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to submit data" }),
        };
    }
};
