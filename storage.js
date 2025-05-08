function setLocalData(name, value) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem(name, value);
        return true;
    }
    alert("Web storage is not supported!");
    return false;
}

function getLocalData(name) {
    if (typeof(Storage) !== "undefined") {
        return localStorage.getItem(name);
    }
    alert("Web storage is not supported!");
    return null;
}

function getAllLocalData() {
    if (typeof(Storage) !== "undefined") {
        return JSON.stringify(localStorage);
    }
    alert("Web storage is not supported!");
    return null;
}

function saveUsername() {
    const username = document.getElementById("usernamebox").value;
    if (setLocalData("username", username)) {
        window.location.href = "page-welcome.html";
    }
}

function checkValidUser() {
    const user = document.getElementById('usernamebox').value;
    const isValid = /^[a-zA-Z0-9]{1,20}$/.test(user);

    if (isValid) {
        document.getElementById('updateUser').innerHTML = '🧑‍🍳 Looks good!';
        document.getElementById('updateUser').className = 'valid';
        document.getElementById('submitbutton').disabled = false;
    } else {
        document.getElementById('updateUser').innerHTML = '⚠️ Use only letters/numbers (max 20 characters)';
        document.getElementById('updateUser').className = 'invalid';
        document.getElementById('submitbutton').disabled = true;
    }
}

function checkAuth() {
    const username = getLocalData("username");
    const currentPage = window.location.pathname;

    if (currentPage.includes("page-welcome.html") && !username) {
        window.location.href = "page-login.html";
    }
    else if (currentPage.includes("page-login.html") && username) {
        window.location.href = "page-welcome.html";
    }
    else if (username && document.getElementById("user")) {
        document.getElementById("user").innerText = username;
    }
}

checkAuth();

function usernameChecker() {
    const username = getLocalData("username");
    
    if (username) {
        window.location.href = "page-welcome.html";
    } else {
        window.location.href = "page-login.html";
    }
}