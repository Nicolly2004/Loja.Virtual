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
      img: "https://images.samsung.com/is/image/samsung/p6pim/br/qn85q70aagxzd/gallery/br-qled-tv-qn85q70aagxzd-qn--q--aagxzd-532139942?$650_519_PNG$",
      imgDescription: "Smart Tv 85 Polegadas QLED 4K |85Q70A",
      titulo: "Televisão",
      preco: 12.824
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