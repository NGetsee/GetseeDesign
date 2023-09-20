document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('quote-form');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the default form submission behavior
  
      // Collect form data
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
  
      // Send data to the serverless function
      fetch('/.netlify/functions/submitForm', {
        method: 'POST',
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(result => {
          // Handle the response from the serverless function
          console.log(result);
          // You can also redirect the user to a thank-you page or display a confirmation message.
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
  });
  