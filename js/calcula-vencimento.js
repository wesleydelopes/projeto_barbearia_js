function calculaVencimento(dateString) {
    //Seleciona todas as linhas de cliente na tabela
    var clientes = document.querySelectorAll('.cliente');

    //Itera sobre cada linha de cliente
    clientes.forEach(function(cliente) {
        //Seleciona a célula que contém a data de compra e a célula
        var dataCell = cliente.querySelector('.info-data');
        var situacaoCell = cliente.querySelector('.info-situacao');

        //Extrai a data de compra
        var dateString = dataCell.textContent;
        var parts = dateString.split('-');
        var dateCompra = new Date(parts[2], parts[1] - 1, parts[0]);

        //Obtém a data atual e calcula a data de vencimento adicionando mais 30 dias
        var currentDate = new Date();
        var dateVencimento = new Date(dateCompra.getTime());
        dateVencimento.setDate(dateVencimento.getDate() + 30);

        //Verifica se a data atual é menor ou igual a data de vencimento
        if (currentDate <= dateVencimento) {
            situacaoCell.textContent = 'Ativo';
            //situacaoCell.classList.remove("cliente-invalido");
            console.log('Plano dentro do vencimento para o cliente ' + cliente.querySelector('.info-nome').textContent);
        } else {
            situacaoCell.textContent = 'Inativo';
            //situacaoCell.classList.add("cliente-invalido");
            console.log('Plano vencido para o cliente ' + cliente.querySelector('.info-nome').textContent);
        }
    });
}


function calcularVencimentoClienteNovo(dataString) {
    var parts = dataString.split('-');
    var dateCompra = new Date(parts[2], parts[1] - 1, parts[0]);
    var currentDate = new Date();
    var dateVencimento = new Date(dateCompra.getTime());
    dateVencimento.setDate(dateVencimento.getDate() + 30);

    if (currentDate <= dateVencimento) {
        return 'Ativo';
    } else {
        return 'Inativo';
    }
}