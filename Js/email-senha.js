const inputName = document.querySelector('input[name=name]');
const inputEmail = document.querySelector('input[name=email]');
const inputSenha = document.querySelector('input[name=password]');

const btnSignUp = document.querySelector('button[name=signup]');
const btnSignIn = document.querySelector('button[name=signin]');

const resetPassword = document.querySelector('a.reset-password');
const logout = document.querySelector('a.logout');

const logged = document.querySelector('div[class=user]');
const loggedName = document.querySelector('span.name');

const auth = firebase.auth();
const db = firebase.firestore();

btnSignIn.addEventListener("click", () => {

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

btnSignUp.addEventListener("click", () => {

    if (inputEmail.value !== '') {
        if (inputName.value !== '') {
            if (inputSenha.value !== '') {

                const formData = {
                    nome: inputName.value,
                    email: inputEmail.value,
                    senha: inputSenha.value,
                }

                auth.createUserWithEmailAndPassword(formData.email, formData.senha)
                    .then(data => {

                        const uid = data.user.uid;
                        
                        db.collection('users').doc(uid).set({
                            nome: formData.nome,
                            email: formData.email,
                        })
                        .then(() =>{
                            console.log("armazenado no firestore");
                        })
                        .catch(err =>{
                            console.log(err);
                        })

                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        }
    }
})

logout.addEventListener("click", () => {

    auth.signOut()
        .then(() => {
            console.log("usuario deslogado");
        })
        .catch(err => {
            console.log(err);
        });

    logged.style.display = "none";
})



auth.onAuthStateChanged(user => {
    if(user){

        const email = user.email;
       
        loggedName.innerHTML = email;
        logged.style.display = "block";
    }
})
