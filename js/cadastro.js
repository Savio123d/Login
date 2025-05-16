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

function listar(){
    const usuarioCadstrados = JSON.parse(localStorage.getItem("usuarios") || []);
    let tabela = document.getElementById('lista_usuarios');
    tabela.innerHTML = '';
    usuarioCadstrados.forEach(usuario, index => {

        let linha = document.createElement('tr');
        
        linha.innerHTML = `
        <td>${usuario.usuario}</td>
        <td>${usuario.senha}</td>
        <td><button onclick="excluirUsuario(${index})"> Excluir</button> </td>
        `;
        
       tabela.appendChild(linha); 
    });
}
listar();