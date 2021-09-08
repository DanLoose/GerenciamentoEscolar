
// =================== VARIAVEIS ===================
const inputName = document.querySelector('input[name=name]');
const inputEmail = document.querySelector('input[name=email]');
const inputSenha = document.querySelector('input[name=password]');
const inputConfirmPassword = document.querySelector("input[name=confirmPassword");


const btnSignUp = document.querySelector('button[name=signup]');
const btnSignIn = document.querySelector('button[name=signin]');

const resetPassword = document.querySelector('a.reset-password');

const auth = firebase.auth();
const db = firebase.firestore();

// =================== CONFIGURAÇÕES DE LOGIN E SIGNUP ===================
btnSignIn.addEventListener("click", () => {     //LOGIN

    if (inputEmail.value !== '') {
        if (inputSenha.value !== '') {

            const formData = {
                email: inputEmail.value,
                senha: inputSenha.value,
            }

            auth.signInWithEmailAndPassword(formData.email, formData.senha)
                .then(data => {
                    console.log(data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
})

btnSignUp.addEventListener("click", () => {     //SIGNUP

    if (inputEmail.value !== '' && inputName.value !== '' && inputSenha.value !== '') {
        if (inputSenha.value === inputConfirmPassword.value) {

            const formData = {
                nome: inputName.value,
                email: inputEmail.value,
                senha: inputSenha.value,
                tipe: "professor.html"
            }

            auth.createUserWithEmailAndPassword(formData.email, formData.senha)
                .then(data => {

                    const uid = data.user.uid;

                    // ARMAZENANDO INFORMAÇÕES NO FIRESTORE
                    db.collection('users').doc(uid).set({
                        nome: formData.nome,
                        email: formData.email,
                        tipe: formData.tipe,
                    })
                        .then(() => {
                            console.log("armazenado no firestore");
                        })
                        .catch(err => {
                            console.log(err);
                        })

                })
                .catch(err => {
                    console.log(err);
                })
        }else{
            alert("as senhas precisam ser iguais");
        }
    }
})

// =================== ESCUTANDO ESTADO DE AUTENTICAÇÃO ===================
auth.onAuthStateChanged(user => {
    if (user) {

        const load = document.querySelector(".spinner-wrapper");
        load.style.display = "flex";

        setTimeout(() => {
            window.location.href = "../professor.html";
        }, 3000);

    }
})
