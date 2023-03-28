function buscaItens(){
    var itens = [{
        nome: "Smart Tv 85 Polegadas QLED 4K |85Q70A|",
        quantidade: 1,
        imagem:"https://images.samsung.com/is/image/samsung/p6pim/br/qn85q70aagxzd/gallery/br-qled-tv-qn85q70aagxzd-qn--q--aagxzd-532139942?$650_519_PNG$",
        preco: 12.824,
    },{
        nome: "Geladeira Side - Brastemp 4 Portas",
        quantidade: 1,
        imagem:"https://a-static.mlcdn.com.br/1500x1500/geladeira-side-by-side-brastemp-4-portas-frost-free-inverse-543l-bro90ak-consul/lojascolombooficial/1256593/05fb63f46a7c1441859c7ec03ae4ef32.jpeg",
        preco: 21.998,

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

    imagem.setAttribute("src",item,imagem);

    divItem.classList.add("item");
    divItem.appendChild(imagem);
    divItem.appendChild(titulo);
    divItem.appendChild(qtd);
    divItem.appendChild(preco);


    container.appendChild(divItem);
}

function main(){
    const itens = buscaItens();
    const linkItens = document.querySelector("a[href = '#itens']");
    const quantidadeItens = itens.reduce(function(valorAnterior,item){
        return valorAnterior + item.quantidade;
    },0);

    linkItens.innerHTML = `${quantidadeItens} ${(quantidadeItens === 1 ? "item" : "itens")}`;
    

    for(var item of itens){
        renderItem(item);
    }
}