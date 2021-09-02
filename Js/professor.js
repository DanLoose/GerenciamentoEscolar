let gerenciarAlunos = document.getElementById("gerenciarAlunos");
let turmas = document.getElementById("turmas");
let notificacao = document.getElementById("notificacao");
let material = document.getElementById("material");


function expand(e){
    e.parentNode.children[0].style.display = "flex";
}

function hide(e){
    
    let father = e.parentNode;
    father.style.display = "none";
}