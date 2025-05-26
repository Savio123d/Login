const botao = document.getElementById('btnCadastrar');

const listaUsuario = [];

botao.addEventListener('click', function () {

    const usuario = {
        usuario: document.getElementById('login').value,
        senha: document.getElementById('senha').value

    };

    listaUsuario.push(usuario);
    listaJson = JSON.stringify(listaUsuario);
    localStorage.setItem("usuarios", listaJson);
    listar();
});

function listar() {
    const listaUsuarioCad = JSON.parse(localStorage.getItem("usuarios")) || [];
    const tabelaListaUsuarios = document.getElementById('listaUsuarios');
    tabelaListaUsuarios.innerHTML = "";

    listaUsuarioCad.forEach((usuario, index) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${usuario.login}</td>
            <td>${usuario.senha}</td>
            <td>
                <button onclick="editarUsuario(${index})">Editar</button>
                <button onclick="excluirUsuario(${index})">Remover</button>
            </td>
        `;
        tabelaListaUsuarios.appendChild(linha);
    });
}
listar();