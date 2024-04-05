var campoFiltro = document.querySelector("#filtrar-tabela"); 

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var clientes = document.querySelectorAll(".cliente");

    // Se houver algo digitado ele mostra a classe visivel
    if (this.value.length > 0) {
        
        for (var i = 0; i < clientes.length; i++) {
            var cliente = clientes[i];
            var tdNome = cliente.querySelector(".info-nome")
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");
            
            if ( expressao.test(nome)){
                cliente.classList.remove("invisivel")
                
            }else{
                cliente.classList.add("invisivel");
    
            }
        }

    }else {
        for (var i = 0; i < clientes.length; i++){
            var cliente = clientes[i]
            cliente.classList.remove("invisivel")
        }
    }
});