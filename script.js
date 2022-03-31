var ul = document.querySelector("ul");
var buttonUp =document.getElementById('signUp');
var buttonDown =document.getElementById('signIn');
database = [];

function form(event) {
    event.preventDefault();
    var username= document.getElementById("usernameInput").value;
    var password= document.getElementById("passwordInput").value;
    if (username !== "" && password !== "") {
        link(username,password)
         //console.log("working",username,password);
    }
}
function link(uid,pwd) {
    database.push({user:uid, code:pwd});
    createUser();
    //console.log(database);
}
function createUser() {
    var username = document.getElementById("usernameInput");
    var password = document.getElementById("passwordInput");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(`user: ${username.value} || code: ${password.value}`));
        ul.appendChild(li);
        username.value = "";
        password.value = "";
    
    
}

buttonUp.addEventListener('click', form); 



var userInput= document.getElementById("userInput");
var passCode= document.getElementById("passInput");

function signIn(event){
    event.preventDefault();
    if (userInput.value !== "" && passCode.value !== "") {
        if (isValid()) {
            alert(`Welcome ${userInput.value}`);
        }
        else {
            alert('Invalid User');
        } 
    }
    
    userInput.value = "";
    passCode.value = "";
}

function isValid(){
    for (var i = 0; i < database.length; i++) {
        if (userInput.value === database[i].user && passCode.value === database[i].code) { 
            return true;
        };
    }
    return false;

   
}
buttonDown.addEventListener('click', signIn);