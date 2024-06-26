let total = 0;
let totalGráfico = document.getElementById('valor-total');
function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    totalGráfico.textContent = 'R$0';
    total = 0;
}
function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let precoUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let subtotal = (precoUnitario * quantidade);
    total += subtotal;
    totalGráfico.textContent = `R$${total}`;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoUnitario}</span></section>`;
    document.getElementById('quantidade').value = '';
}
limpar();