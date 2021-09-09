// ================= VARIABLES =================
// INPUTS 
const inputName = document.querySelector("input[name=name");
const inputEmail = document.querySelector("input[name=email");
const inputPassword = document.querySelector("input[name=password");
const inputConfirmPassword = document.querySelector("input[name=confirmPassword");

// BUTTONS
const btnEntrar = document.querySelector("button[name=entrar");
const btnCadastrar = document.querySelector("button[name=cadastrar");

const btnSignIn = document.querySelector("button[name=signin");
const btnSignUp = document.querySelector("button[name=signup");

// LOADING
const loading = document.querySelector(".spinner-wrapper");

// SPANS

// ================= FUNCTIONS =================
btnEntrar.addEventListener("click",()=>{
    inputName.style.display = "none";
    inputConfirmPassword.style.display = "none";

    btnSignIn.style.display = "inline";
    btnSignUp.style.display = "none";

    btnCadastrar.classList.remove('active');
    btnEntrar.classList.add('active');
})

btnCadastrar.addEventListener("click",()=>{
    inputName.style.display = "block";
    inputConfirmPassword.style.display = "block";

    btnSignIn.style.display = "none";
    btnSignUp.style.display = "inline";

    btnCadastrar.classList.add('active');
    btnEntrar.classList.remove('active');
})

function setLoadScreen(){
    loading.style.display = "flex";
}

