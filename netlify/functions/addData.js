exports.handler = async function (event, context) {
    try {
        const requestBody = JSON.parse(event.body);
        const newData = requestBody.data;

        // You can store data in-memory for simplicity
        const database = [];
        database.push(newData);

        return {
            statusCode: 200,
            body: JSON.stringify({ data: newData }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to add data" }),
        };
    }
};
