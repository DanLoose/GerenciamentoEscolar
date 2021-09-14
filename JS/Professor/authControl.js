// FIREBASE VARIABLES
const auth = firebase.auth();


// ==================== CONTROLE DE AUTENTICAÇÃO ====================
auth.onAuthStateChanged(user => {
    if (user) {
    }else{
        // se nao houver usuarios logados, redireciona para o index 
        window.location.href = "../index.html";
    }
})

// LOGOUT 
sair.addEventListener("click" , () => {
    auth.signOut().then().catch();
})