const { MongoClient } = require("mongodb");

exports.handler = async function(event, context) {
    const uri = "mongodb+srv://20099872:<gETSEE23>@cluster0.xhiwwbp.mongodb.net/";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const collection = client.db("Getsee Design").collection("Project 0");
        const data = JSON.parse(event.body);

        // Store the form data in MongoDB
        await collection.insertOne(data);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Form data stored successfully" }),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "An error occurred while storing form data" }),
        };
    } finally {
        await client.close();
    }
};
