// JavaScript source code
// netlify/functions/submitForm.js

const mysql = require('mysql2/promise');

 

exports.handler = async (event, context) => {

  const { name, email, message } = JSON.parse(event.body);

 

  try {

    const connection = await mysql.createConnection({

      host: process.env.MYSQL_HOST,

      user: process.env.MYSQL_USER,

      password: process.env.MYSQL_PASSWORD,

      database: process.env.MYSQL_DATABASE,

    });

 

    await connection.execute(

      'INSERT INTO form_submissions (name, email, message) VALUES (?, ?, ?)',

      [name, email, message]

    );

 

    connection.end();

 

    return {

      statusCode: 200,

      body: JSON.stringify({ message: 'Form submitted successfully' }),

    };

  } catch (error) {

    return {

      statusCode: 500,

      body: JSON.stringify({ error: 'An error occurred while processing the form' }),

    };

  }

};

 