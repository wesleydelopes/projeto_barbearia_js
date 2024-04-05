var addBotao = document.getElementById("adicionar-cliente");
calculaVencimento();

//adiciona um novo cliente
addBotao.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.getElementById("form-adiciona");
    var nome = form.nome.value;
    var numero = form.numero.value;
    var plano = form.plano.value;
    var valor = form.valor.value;
    var data = form.data.value;
    var barbeiro = form.barbeiro.value;

    //Validando campos obrigatórios
    if (!nome || !numero || !plano || !valor || !data || !barbeiro) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    //Validando o formato da data 
    var dataPattern = /^\d{2}-\d{2}-\d{4}$/;
    if (!dataPattern.test(data)) {
        alert("Formato de data inválido. Use o formato dd-mm-yyyy.");
        return;
    }

    //Calcular a situação do cliente
    situacaoCell = document.querySelector('.info-situacao')
    var situacao = calcularVencimentoClienteNovo(data);
    situacaoCell.classList.add(situacao);
    var clienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var numeroTd = document.createElement("td");
    var planoTd = document.createElement("td");
    var valorTd = document.createElement("td");
    var dataTd = document.createElement("td");
    var barbeiroTd = document.createElement("td");
    var situacaoTd = document.createElement("td");
    
    nomeTd.textContent = nome;
    numeroTd.textContent = numero;
    planoTd.textContent = plano;
    valorTd.textContent = valor;
    dataTd.textContent = data;
    barbeiroTd.textContent = barbeiro;
    situacaoTd.textContent = situacao; 

    clienteTr.appendChild(nomeTd);
    clienteTr.appendChild(numeroTd);
    clienteTr.appendChild(planoTd);
    clienteTr.appendChild(valorTd);
    clienteTr.appendChild(dataTd);  
    clienteTr.appendChild(barbeiroTd);
    clienteTr.appendChild(situacaoTd);

    var tabela = document.querySelector("#tabela-clientes");

    tabela.appendChild(clienteTr);
    calculaVencimento();

});