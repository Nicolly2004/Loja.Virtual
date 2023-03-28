"use strict";

function validaFormulario() {
    var formulario = document.forms["login"];
    var senha = formulario["senha"];
    var contadorDeErros = 0;

    if (senha.value.length < 8) {
        setErro( senha, "A senha precisa ter no mínimo 8 caracteres")
        addLimpaErroParaInputs(senha);
        contadorDeErros++;
    }


if(contadorDeErros > 0){
    return false;
}

    return true;
}


function setErro(input,mensagem = "Campo inválido."){
    var messageBox = document.getElementsByClassName(`message-error ${input.id}`)[0];
    messageBox.innerHTML = mensagem;
    input.classList.add("input-error")
}


function addLimpaErroParaInputs(input) {
    input.addEventListener("input", function(evento){
       limpaErro(evento.target.id)
});
}

function limpaErro(inputId){
    var mensagemBox = document.getElementsByClassName(`message-error ${inputId}`)[0]
    var input = document.getElementById(inputId);
    mensagemBox.innerHTML = "";
    input.classList.remove("input-error");
}