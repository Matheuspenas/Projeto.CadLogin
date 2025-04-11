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