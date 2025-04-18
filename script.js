// Function to set cookies
function setCookie(cookieName, cookieValue, expires = "", path = "/") {
    if (expires === "") {
        let currentDate = new Date();
        expires = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate()); // 1 year expiry
    }

    let cookie = `${cookieName}=${cookieValue};`;
    cookie += `expires=${(new Date(expires)).toUTCString()};`;
    cookie += `path=${path};`;
    document.cookie = cookie;
}

// Function to get a cookie
function getCookie(cookieName) {
    let key = cookieName + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(key) == 0) {
            return c.substring(key.length, c.length);
        }
    }
    return "";
}

// Function to create the cookie after user input
function createCookie() {
    let cookieInput = document.getElementById("usernamebox").value;
    setCookie("username", cookieInput); // Set the username in the cookie
}

// Function to check if the username is valid
function checkValidUser() {
    let user = document.getElementById('usernamebox').value;
    let check = /^[a-zA-Z0-9]{1,20}$/.test(user);

    if (check) {
        document.getElementById('updateUser').innerHTML = '👍 Looks good!';
        document.getElementById('updateUser').className = 'valid';
        document.getElementById('button-submit').disabled = false; 
    } else {
        document.getElementById('updateUser').innerHTML = '⚠️ Uh-oh! Use only letters and numbers (max 20 characters)!';
        document.getElementById('updateUser').className = 'invalid';
        document.getElementById('button-submit').disabled = true; 
    }
}

// Function to handle form submission
function onSignupSubmit() {
    createCookie(); // Create the cookie
    window.location.href = "page-welcome.html"; // Redirect to the welcome page
}

// Get the username from the cookie and display it
const username = getCookie("username");
if (username) {
    document.getElementById("user").innerText = username; // Show username in the welcome message
} else {
    document.getElementById("user").innerText = "Guest"; // Default if no username is set
}
