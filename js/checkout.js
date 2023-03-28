function buscaItens(){
    var itens = [{
        nome: "Smart Tv 85 Polegadas QLED 4K |85Q70A|",
        quantidade: 1,
        imagem:"img/TV.qled.avif",
        preco: 12824,
    },{
        nome: "Geladeira Side - Brastemp 4 Portas",
        quantidade: 1,
        imagem:"img/Geladeira.webp",
        preco: 21998,

    },
];

          return itens;
}

function renderItem(item){
    var container = document.querySelector(".items-container");
    var divItem = document.createElement("div");
    var imagem = document.createElement("img");
    var titulo = document.createElement("h3");
    var preco = document.createElement("span");
    var qtd = document.createElement("span");
    var titiloNode = document.createTextNode(item.nome);
    var formataDinheiro = new Intl.NumberFormat("pt-br",
    {style: "currency",
     currency: "BRL",
    });

    preco.appendChild(document.createTextNode(formataDinheiro.format(item.preco)))
    preco.classList.add("preco");

      qtd.appendChild(document.createTextNode(`Qtd: ${item.quantidade}`));


    titulo.appendChild(titiloNode);

    imagem.setAttribute("src",item.imagem);

    divItem.classList.add("item");
    divItem.appendChild(imagem);
    divItem.appendChild(titulo);
    divItem.appendChild(qtd);
    divItem.appendChild(preco);


    container.appendChild(divItem);
}

function calculaFrete(){
    return 500.00;
}

function main(){
    const itens = buscaItens();
    const frete = calculaFrete();

    const linkItens = document.querySelector("a[href = '#itens']");
    const itensTotal = document.getElementById("itens-total");
    const freteTotal = document.getElementById("frete-total");
    const totalPedido = document.getElementById("pedido-total")

    const formataDinheiro = new Intl.NumberFormat("pt-br",
    {
        style:"currency",
        currency:"BRL"
    });

    const quantidadeItens = itens.reduce(function(valorAnterior,item){
        return valorAnterior + item.quantidade;
    },0); 

    const subTotalItens = itens.reduce(function(valorAnterior, item){
     return valorAnterior + item.quantidade * item.preco;
    },0);

    totalPedido.innerHTML = formataDinheiro.format(frete + subTotalItens);
    freteTotal.innerHTML = formataDinheiro.format(frete);
    itensTotal.innerHTML = formataDinheiro.format(subTotalItens);
    linkItens.innerHTML = `${quantidadeItens} ${(quantidadeItens === 1 ? "item" : "itens")}`;
    

    for(var item of itens){
        renderItem(item);
    }
}