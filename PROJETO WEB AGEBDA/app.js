
var btnEntrar = document.querySelector("#entrar");
var btnSair = document.querySelector("#sair");

var body = document.querySelector("body");

btnEntrar.addEventListener("click", function(){
    body.className = "entrar-js";
});

btnSair.addEventListener("click", function(){
    body.className = "sair-js";
});