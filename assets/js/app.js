// app.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Get form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const formData = {
        name: "John Doe",
        email: "john@example.com",
    };
    
    fetch("/.netlify/functions/submitForm", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // Specify JSON content type
        },
        body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
        // Handle the response
    })
    .catch((error) => {
        // Handle errors
    });
  
      // Send a POST request to the Netlify function
      fetch("/.netlify/functions/submitForm", {
        method: "POST",
        body: JSON.stringify({ name, email }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Display a success message or handle the response as needed
          if (data.message) {
            alert("Data submitted successfully!");
          } else {
            alert("Failed to submit data. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred while submitting the form.");
        });
    });
  });
  