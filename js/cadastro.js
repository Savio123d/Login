const botao = document.getElementById('btnCadastrar');
const listaUsuario = [];
botao.addEventListener('click',function(){

const usuario = {
    usuario: document.getElementById('login').value,
    senha : document.getElementById('senha').value

};
console.log(usuario)
listaUsuario.push(usuario);
listaJson = JSON.stringify(listaUsuario);
localStorage.setItem("usuarios",listaJson);
});