const buttonSignUp = document.querySelector("button[name=singup]");
const buttonSignIn = document.querySelector("button[name=singin]");

const inputEmail = document.querySelector("input[name=email");
const inputSenha = document.querySelector("input[name=password");
const inputNome = document.querySelector("input[name=nome");

const divUser = document.querySelector(".user");
const spanName = document.querySelector("span.name");
const btLogout = document.querySelector(".logout");
const btReset = document.querySelector(".reset-password");

const auth = firebase.auth();

const handleAuthError = (error) => {

    if (error.code) {
        switch (error.code) {
            case 'auth/weak-password':
                alert("Senha muito fraca");
                break;
            case 'auth/email-already-in-use':
                alert("Email já está em uso")
                break;
            case 'auth/wrong-password':
                alert("Senha errada")
                break;
            default:
                alert("Erro desconhecido");
        }
    }
}

auth.onAuthStateChanged((user) => {
    if (user) {
        divUser.style.display = "block";
        spanName.innerHTML = user.email;
    } else {
        divUser.style.display = "none";
    }
});

btReset.addEventListener("click", () => {
    auth.sendPasswordResetEmail(inputEmail.value)
        .then(result => {
            alert("email enviado para reset de senha");
        })
        .catch(err => {
            handleAuthError(err);
        });
})

btLogout.addEventListener("click", () => {
    auth.signOut();
})

buttonSignUp.addEventListener("click", () => {
    auth.createUserWithEmailAndPassword(inputEmail.value, inputSenha.value)
        .then(result => {

            const user = result.user;
            
            user.sendEmailVerification()
                .then(r => {
                    alert("um email de confirmação foi enviado");
                })
                .catch(err => {
                    handleAuthError(err);
                })

            console.log(result);
        })
        .catch(err => {
            handleAuthError(err);
        })
})

buttonSignIn.addEventListener("click", () => {
    auth.signInWithEmailAndPassword(inputEmail.value, inputSenha.value)
        .then(result => {
            alert("usuario conectado");
            console.log(result);
        })
        .catch(err => {
            handleAuthError(err);
        })
})