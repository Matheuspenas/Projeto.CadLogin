// validação de preenchimento de login
function acessar(){
    let LoginEmail = document.getElementById('LoginEmail').value;
    let LoginSenha = document.getElementById('LoginSenha').value;

    if(!LoginEmail || !LoginSenha){
        alert("Favor preecher os campo de acesso corretamente");
    } else{
        window.location.href = 'cadrastro.html';
    }
}

// declara Array para o projeto

var dadosLista = [];
// função de aramzenamento de nomes em Array
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log.dadosLista;
        nomeUser ="";
    } else{
        alert("Usuario não preenchido");
    }
}