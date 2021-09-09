// =================== ABREVIAÇÕES FIREBASE ===================
const auth = firebase.auth();
const db = firebase.firestore();

// =================== CONFIGURAÇÕES DE LOGIN E SIGNUP ===================
btnSignIn.addEventListener("click", () => {     //LOGIN

    if (inputEmail.value !== '' && inputPassword.value !== '') {

        const formData = formContent();

        auth.signInWithEmailAndPassword(formData.email, formData.password)
            .then()
            .catch(err => {
                console.log(err);
            })

    }
})

btnSignUp.addEventListener("click", async () => {     //SIGNUP

    if (inputEmail.value !== '' && inputName.value !== '' && inputPassword.value !== '') {
        if (inputConfirmPassword.value === inputConfirmPassword.value) {

            const formData = {
                nome: inputName.value,
                email: inputEmail.value,
                senha: inputPassword.value,
                tipe: "professor.html"
            }

            await auth.createUserWithEmailAndPassword(formData.email, formData.senha)
                .then(data => {

                    const uid = data.user.uid;

                    // ARMAZENANDO INFORMAÇÕES NO FIRESTORE
                    db.collection('users').doc(uid).set({
                        nome: formData.nome,
                        email: formData.email,
                        tipe: formData.tipe,
                    })
                        .then()
                        .catch(err => {
                            console.log(err);
                        })

                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
})

// =================== ESCUTANDO ESTADO DE AUTENTICAÇÃO ===================
auth.onAuthStateChanged(user => {
    if (user) {

        setTimeout(redirect, 3000);

    }
})

function redirect(){
    window.location.href = "./Pages/professor.html";
}