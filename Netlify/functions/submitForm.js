const mysql = require('mysql2');

exports.handler = async (event) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'getsee_design',
  });

  const { name, email } = JSON.parse(event.body);

  try {
    await connection.promise().query(
      'INSERT INTO form_submission (name, email) VALUES (?, ?)',
      [name, email]
    );
    
    connection.end();
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form data submitted successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error submitting form data' }),
    };
  }
};
