quantidadeInicial();

function comprar(){
    let tipoDoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let elementoEstoque = document.getElementById(`qtd-${tipoDoIngresso}`);
    
    let estoqueAtual = parseInt(elementoEstoque.textContent);

    let select = document.getElementById('tipo-ingresso');
    let nomeCompleto = select.options[select.selectedIndex].textContent;

    if (quantidade <= 0 || isNaN(quantidade)){
        alert('Digite um valor válido para comprar o ingresso.');
        return;
    }

    if (quantidade <= estoqueAtual){
       let novoEstoque = estoqueAtual - quantidade;
       elementoEstoque.textContent = novoEstoque;
       alert('Compra realizada com sucesso!')
    } else {
        alert(`Não há mais ingressos disponíveis para ${nomeCompleto}.`);
    }
    quantidadeInicial();
}

function quantidadeInicial(){
    document.getElementById('qtd').value = '';

}