
function entrar(){
    let usuario = document.getElementById("user").value;
    let senha = document.getElementById("password").value;
    login(usuario,senha);
}

function cadastrar(){

    let novoUsuario = document.getElementById("userCadastro").value;
    let novaSenha = document.getElementById("passwordCadastro2").value;
    
    if(novoUsuario != null && novaSenha != null){
        cadastro(novoUsuario,novaSenha);
    }
}

function hideCadastro(){
    let box = document.getElementsByClassName("container_cadastro")[0];
    box.style.display = "none";
}