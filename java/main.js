// Validação de preenchimento de login
function acessar() {
    let LoginEmail = document.getElementById('LoginEmail').value;
    let LoginSenha = document.getElementById('LoginSenha').value;

    if (!LoginEmail || !LoginSenha) {
        alert("Favor preencher os campos de acesso corretamente");
    } else {
        window.location.href = 'cadrastro.html'; // Verifique se o nome do arquivo está correto
    }
}

var dadosLista = [];

// Função para armazenar nomes
function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;

    if (nomeUser) {
        dadosLista.push(nomeUser);
        document.getElementById('nomeUser').value = "";
        criarLista(); // Atualiza tabela automaticamente ao salvar
    } else {
        alert("Usuário não preenchido");
    }
}

// Função para criar a tabela com botões de ação
function criarLista() {
    let tabela = "<tr><th>Nome</th><th>Ações</th></tr>";

    for (let i = 0; i < dadosLista.length; i++) {
        tabela += `
            <tr>
                <td>${dadosLista[i]}</td>
                <td>
                    <button class="btn" onclick="editarUser(${i})">Editar</button>
                    <button class="btn" onclick="excluirUser(${i})">Excluir</button>
                </td>
            </tr>`;
    }

    document.getElementById('tabela').innerHTML = tabela;
}

// Função para excluir nome da lista
function excluirUser(index) {
   
}

// Função para editar nome
function editarUser(index) {
    
}
