// how to accept user input in JavaScript

//1. easy way = window prompt
//2. professional way = html textbox

// let username;

// username = window.prompt(`Enter your username: `);

// console.log(username);

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Welcome ${username}`;
}


