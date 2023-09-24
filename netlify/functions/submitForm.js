// submitForm.js

const sqlite3 = require('sqlite3').verbose();

exports.handler = async (event, context) => {
    const body = JSON.parse(event.body);

    // Extract name and email from the form submission
    const { name, email } = body;

    // Create or open the SQLite database
    const db = new sqlite3.Database('mydatabase.db');

    // Define the SQL query to insert data into the table
    const sql = `INSERT INTO submissions (name, email) VALUES (?, ?)`;

    // Execute the query with the provided data
    db.run(sql, [name, email], function (err) {
        if (err) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Failed to submit data' }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Data submitted successfully' }),
        };
    });

    // Close the database connection
    db.close();
};
