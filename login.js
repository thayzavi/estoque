
        // função para validar o form
        function validarFormulario(){
            const Usuario = document.getElementById("Usuario").value;
            const senha = document.getElementById("senha").value;

            if (Usuario=== ""){
                alert("Por favor preecha o campo usuário.");
                return false;
            }
            if (senha === ""){
                alert("Preecha o campo senha.");
                return false;
            }
            redirecionarEstoque
            ();
        }
        // função para ir para outra página
        function redirecionarEstoque (){
        window.location.href = "estoque.html"
        }