alert("Olá Usuário, Seja Bem Vindo");
/**console.log("Olá Usuário, Seja Bem Vindo"); */


function insereOfertas(){
    var listaOfertas = document.getElementsByClassName("lista-ofertas")[0];
    var modelo = document.getElementById("card-modelo");
    var ofertas = [{
      url: "/produto.html",
      img: "https://images.samsung.com/is/image/samsung/p6pim/br/qn85q70aagxzd/gallery/br-qled-tv-qn85q70aagxzd-qn--q--aagxzd-532139942?$650_519_PNG$",
      imgDescription: "Smart Tv 85 Polegadas QLED 4K |85Q70A",
      titulo: "Televisão",
      preco: 12.824
    },
    {
      url: "/produto.html",
      img: "https://www.jbl.com.br/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw567185dd/JBL_JR310_Product%20Image_Hero_Red.png?sw=537&sfrm=png",
      imgDescription: "Fone Bluetooth",
      titulo: "Fone",
      preco: 75.98
    },
    {
      url: "/produto.html",
      img: "https://a-static.mlcdn.com.br/1500x1500/geladeira-side-by-side-brastemp-4-portas-frost-free-inverse-543l-bro90ak-consul/lojascolombooficial/1256593/05fb63f46a7c1441859c7ec03ae4ef32.jpeg",
      imgDescription: "Geladeira Side - Brastemp 4 Portas",
      titulo: "Geladeira",
      preco: 21.998
    },
    {
      url: "/produto.html",
      img: "https://www.lg.com/br/images/home-theaters/bh9630tw/gallery/medium-01.jpg",
      imgDescription: "Home Theater 1100W LG",
      titulo: "Home Theater",
      preco: 1.800
    }
   ];

   ofertas.forEach(function(produto){
      var variaveis = {
         "{link-produto}": "url",
        "{imagem-produto}": "img",
         "{descricao-image-produto}": "imgDescription",
         "{titulo-produto}": "titulo",
         "{preco-produto}": "preco",
      };

      var modeloString = modelo.innerHTML;

      for(var variavel in variaveis){
            modeloString = modeloString.replaceAll(variavel,produto[variaveis[variavel]])
      }

    

     listaOfertas.innerHTML += modeloString;
   });

}

function main(){
   insereOfertas();
}