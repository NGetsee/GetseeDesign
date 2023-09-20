// JavaScript source code
document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('myForm');

    const responseDiv = document.getElementById('response');

 

    form.addEventListener('submit', function (e) {

        e.preventDefault(); // Prevent the default form submission

 

        const formData = new FormData(form);

 

        // Make a POST request to your Netlify serverless function

        fetch('/.netlify/functions/submitForm', {

            method: 'POST',

            body: JSON.stringify(Object.fromEntries(formData)),

            headers: {

                'Content-Type': 'application/json',

            },

        })

        .then(response => response.json())

        .then(data => {

            // Handle the response from the serverless function

            responseDiv.innerHTML = data.message;

        })

        .catch(error => {

            console.error('Error:', error);

            responseDiv.innerHTML = 'An error occurred while submitting the form.';

        });

    });

});

 