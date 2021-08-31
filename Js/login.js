let email = document.getElementById("user").value;
let password = document.getElementById("password").value;
let button = document.getElementsByClassName("button")[0];

function entrar(){
    console.log(email);
    login(email, password);
}