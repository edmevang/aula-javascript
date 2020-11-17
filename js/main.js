// var nome = "Usuario";
// var idade = 18;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo";
// alert(nome + " tem " + idade + " anos");
// alert(idade + idade2)
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase.replace("Japão","Brasil"));
// console.log(frase.toUpperCase("Japão","Brasil"));
// console.log(frase.toLowerCase("Japão","Brasil"));
// alert(frase.replace("Japão","Brasil"));


// var n1 = 5;
// var n2 = 3;
// console.log(n1 * n2);


// Array

// var lista = ["maça", "pera", "laranja"];
// console.log(lista);
// console.log(lista[1]);
// alert(lista[1]);

// lista.push("uva"); //colocar um item a mais na lista
// console.log(lista);
// console.log(lista);
// lista.pop("uva"); //tira o último elemento da lista
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista[0]);
// console.log(lista.toString()[0]);
// console.log(lista.join('-'));


//Dicionários

// var fruta = {nome:"maça", cor:"vermelha"};
// console.log(fruta);
// console.log(fruta.nome);
// alert(fruta.cor);


// var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}];
// console.log(frutas);
// alert(frutas[1].nome);

// var idade = 18;
// if (idade >= 18) {
//     alert("maior de idade")
// } else {
//     alert("menor de idade")
// };

// var idade = prompt("Qual sua idade?");
// if (idade >= 18) {
//     alert("maior de idade")
// } else {
//     alert("menor de idade")
// };


// var count = 0;
// while (count < 5) {
//     console.log(count);
//     alert(count);
//     // count = count + 1;
//     count ++;
// }


// var count;
// for (count=0; count <=5; count++){
//     alert(count);
// };


// var d = new Date();
// alert(d);
// alert(d.getMonth()+1); // conta a partir do 0
// alert(d.getMinutes());
// alert(d.getDay());
// alert(d.getHours());


// function soma (n1, n2) {
//     return n1 + n2;
// };
// alert(soma(5,10));



// function setReplace(frase, nome, novo_nome) {
//     return frase.replace(nome, novo_nome)
// }
// alert(setReplace("Vai Japão", "Japão","Brasil"));

// Variável Local
// function validadeIdade(idade) {
//     var validar;
//     if (idade >= 18) {
//         validar = true
//     }else {
//         validar = false
//     }
//     return validar;
// }
// var idade = prompt("Qual sua idade?");
// console.log(validadeIdade(idade));


// Variável Global
// var validar = 0;

// function validadeIdade(idade) {
//     if (idade >= 18) {
//         validar = true
//     }else {
//         validar = false
//     }
//     return validar;
// }
// var idade = prompt("Qual sua idade?");
// validadeIdade(idade);
// console.log(validadeIdade(idade));

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    // console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://www.sympla.com.br/");
    window.location.href = "https://www.sympla.com.br/";
}

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
   elemento.innerHTML = "Obrigado por passar o mouse"
   //alert("trocar texto")
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
    //alert("trocar texto")
}

function load() {
    alert("Página carregada")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}