const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    if (user) {
    }else{
        window.location.href = "../index.html";
    }
})

function logout(){
    auth.signOut().then().catch();
}