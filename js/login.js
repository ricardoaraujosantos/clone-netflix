const user = [
    {
        cliente: 'ricardo@gmail.com',
        senha: 12345678
    }
]

const btnSubmit = document.getElementById('btnEntrar');

addEventListener("click", function(el) {
    el.preventDefault();

    const inputNameUser = document.getElementById('nameUser').value;
    const inputSenha = document.getElementById('passwordUser').value;
    
    const cliente = user.map((name) => name.cliente)
    const passWord = user.map((pass) => pass.senha)

    /*const renderSenha = document.getElementById('renderSenha')*/
    const senhaIncorreta= document.getElementById('senhaIncorreta')

    function log(){
        if(inputNameUser == cliente && inputSenha == passWord) { 
           setTimeout(function() {
                location.href = 'file:///C:/cartao/cursos-dev/curso-dio/interface-netflix/clone-netflix/src/index.html'
            }, 2000)
       }
      }
      log();
});

