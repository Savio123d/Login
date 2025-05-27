//cadastro com crud

//criação de registro
const botao = document.getElementById('btnCadastrar');
// const listaUsuario = [];

//criação registro
botao.addEventListener('click', function () {
    listaUsuario = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = {
        usuario: document.getElementById('login').value,
        senha: document.getElementById('senha').value
    };

    //criar lista de usuarios
    //console.log(usuario);
    listaUsuario.push(usuario);
    listaJson = JSON.stringify(listaUsuario);
    localStorage.setItem("usuarios", listaJson);
    document.getElementById('login').value = '';
    document.getElementById('senha').value = '';
    listar();
});

function listar() {
    const usuarioCadastrados = JSON.parse(localStorage.getItem("usuarios")) || []; //  || SE é a minha memoria estiver vazia, eu não precisado converter em JSON);

    let tabela = document.getElementById('lista_usuario');
    tabela.innerHTML = '';
    usuarioCadastrados.forEach((usuario, index) => { //forEach é um for que passa por parametros Usuario e o index;
        let linha = document.createElement('tr');

        // imprimir conteudo cadastrado
        linha.innerHTML = `
        <td>${usuario.usuario}</td>
        <td>${usuario.senha}</td>
        
        <td>
        <button onclick = "editarUsuario(${index})"> Editar  
        <button onclick = "excluirUsuario(${index})"> Excluir </button>
        
        </button></td>
        `;

        tabela.appendChild(linha);

    });
}

function editarUsuario() {
    const usuarioCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarioCadastrados[index];
    const objUsuario = usuarioCadastrados[index];
    document.getElementById('login').value = objUsuario.usuario;
    document.getElementById('senha').value = objUsuario.senha;
    

}

function excluirUsuario(index) {
    //vou excluir diretamente do index, por contem o conteudo que o usuario digitou
    //pegamos ele da linha 37, onde preenchemos ele com um dados

    const usuarioCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    // 1 - excluir usuario 
    // 2 - converter para JSON
    // 3 - sobrescrever o que estava no 1.

    if (confirm("Você realmente quer excluir?")) {
    /* 1 */ usuarioCadastrados.splice(index, 1);  // splice procura um indice do meu vetor, e extrai desse indece a posição que eu achei. 1 item da lista.
    /* 2 */ listaJson = JSON.stringify(usuarioCadastrados); // aqui vamos atualizar a minha memoria, depois de excluir um usuario.
    /* 3 */ localStorage.setItem("usuarios", listaJson); // sobrescreve oque estava antes.
    }

    listar();
}

listar();