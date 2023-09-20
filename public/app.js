// app.js

function submitclick() {
    console.log("Submitted");

    const usernameInput = document.querySelector(".usernameInput");
    const passwordInput = document.querySelector(".passwordInput");

    const username = usernameInput.value;
    const password = passwordInput.value;

    console.log(username);
    console.log(password);

    // Send a POST request to the server to check credentials
    fetch('/checkCredentials', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.isValid) {
            alert("Login successful");
        } else {
            alert("Login failed. Invalid credentials.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred while checking credentials.");
    });
}
