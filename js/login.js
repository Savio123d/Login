const entrar = document.getElementById('entrar');
entrar.addEventListener('click',
    function(){

        let login = document.getElementById('login').value;
        let senha = document.getElementById('senha').value;

        const usuarioCadastrados = JSON.parse(
            localStorage.getItem("usuarios") 
        ) || [];

       let usuarioEncontrado = usuarioCadastrados.find(
            u => u.usuario === login && u.senha === senha
        );
        console.log(usuarioEncontrado);
    }
);