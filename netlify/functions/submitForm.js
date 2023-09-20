// netlify/functions/submitForm.js
const faunadb = require('faunadb');
const q = faunadb.query;

exports.handler = async (event, context) => {
  try {
    const formData = JSON.parse(event.body);

    const client = new faunadb.Client({
      secret: 'fnAFOUm_ZXAAzm-JYrD_-8liO15MlOC_EWDJo-Mk',
    });

    // Use the FaunaDB client to insert data into your collection
    const result = await client.query(
      q.Create(q.Collection('GetseeDesign'), { data: formData })
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully', result }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred while submitting the form' }),
    };
  }
};
