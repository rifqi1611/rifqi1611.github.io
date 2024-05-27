document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Dummy validation, replace with your actual validation logic
    if (username === "salwa" && password === "mutiara dan bintang") {
      // Redirect to another page
      window.location.href = "ultah.html";
    } else {
      // Display error message
      document.getElementById("message").textContent =
        "Username atau password salah. Silakan coba lagi.";
    }
  });
