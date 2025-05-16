const botao = document.getElementById('btnCadastrar');

const listaUsuario = [];

botao.addEventListener('click', function () {

    const usuario = {
        usuario: document.getElementById('login').value,
        senha: document.getElementById('senha').value

    };
    console.log(usuario)
    listaUsuario.push(usuario);
    listaJson = JSON.stringify(listaUsuario);
    localStorage.setItem("usuarios", listaJson);
});

function listar(){
    const usuarioCadstrados = JSON.parse(localStorage.getItem("usuarios") || []);
    let tabela = document.getElementById('lista_usuarios');
    usuarioCadstrados.forEach(usuario, index => {

        let linha = document.createElement('tr');
        
        linha.innerHTML = `
        <td>${usuario.usuario}</td>
        <td>${usuario.senha}</td>
        <td> </td>
        `;
        
       tabela.appendChild(linha); 
    });
}
listar();