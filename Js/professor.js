let gerenciarAlunos = document.getElementById("gerenciarAlunos");
let turmas = document.getElementById("turmas");
let notificacao = document.getElementById("notificacao");
let material = document.getElementById("material");

const logout = document.querySelector("a.logout");
const userName = document.querySelector("span.userName");

const auth = firebase.auth();
const db = firebase.firestore();

logout.addEventListener("click", () => {
    auth.signOut()
        .then(() => {
            console.log("usuario deslogado");
        })
        .catch(err => {
            console.log(err);
        });
})

auth.onAuthStateChanged( async user => {   
    
    if (user) {
        const uid = user.uid;
        try{
            const doc = await db.doc(`users/${uid}`).get();
            let name = doc.data().nome;
            userName.innerHTML = name;
        }catch(err) {
            console.log(err);
        }
    

    }else{

        window.location.href = "../index.html";

    }
})

function expand(e){
    e.parentNode.children[0].style.display = "flex";
}

function hide(e){
    
    let father = e.parentNode;
    father.style.display = "none";
}


window.addEventListener("load", function(){
    const load = document.querySelector(".spinner-wrapper");
    load.parentNode.removeChild(load);
})