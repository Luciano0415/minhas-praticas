function soma(){
    var elementoNumeroUm = document.querySelector('input#primeiroNumero').value;
    var elementoNumeroDois = document.querySelector('input#segundoNumero').value;
    var resultado = document.getElementById('res');

    var primeiroNumero = Number(elementoNumeroUm);
    var segundoNumero = Number(elementoNumeroDois);

    var s = primeiroNumero + segundoNumero;

    var limparPrimeiroNumero = document.getElementById('primeiroNumero').value = "";
    var limparSegundoNumero = document.getElementById('segundoNumero').value = "";

    if (elementoNumeroUm === "" || elementoNumeroDois === "") {
        alert("Valores não indentificados!");
        resultado.innerHTML = '';
    } else {  
        resultado.innerHTML = primeiroNumero + " + " + segundoNumero + " = " + s;
    }
}

function subtrair(){
    var elementoNumeroUm = document.querySelector('input#primeiroNumero').value;
    var elementoNumeroDois = document.querySelector('input#segundoNumero').value;
    var resultado = document.getElementById('res');

    var primeiroNumero = Number(elementoNumeroUm);
    var segundoNumero = Number(elementoNumeroDois);

    var sub = primeiroNumero - segundoNumero;

    var limparPrimeiroNumero = document.getElementById('primeiroNumero').value = "";
    var limparSegundoNumero = document.getElementById('segundoNumero').value = "";

    if (elementoNumeroUm === "" || elementoNumeroDois === "") {
        alert("Valores não indentificados!");
        resultado.innerHTML = '';
    } else { 
        resultado.innerHTML = primeiroNumero + " - " + segundoNumero + " = " + sub;
     }
}

function multiplicar(){
    var elementoNumeroUm = document.querySelector('input#primeiroNumero').value;
    var elementoNumeroDois = document.querySelector('input#segundoNumero').value;
    var resultado = document.getElementById('res');

    var primeiroNumero = Number(elementoNumeroUm);
    var segundoNumero = Number(elementoNumeroDois);

    var mult = primeiroNumero * segundoNumero;

    var limparPrimeiroNumero = document.getElementById('primeiroNumero').value = "";
    var limparSegundoNumero = document.getElementById('segundoNumero').value = "";

    if (elementoNumeroUm === "" || elementoNumeroDois === "") {
        alert("Valores não indentificados!");
        resultado.innerHTML = '';
    } else { 
        resultado.innerHTML = primeiroNumero + " x " + segundoNumero + " = " + mult;
     }
}

function dividir(){
    var elementoNumeroUm = document.querySelector('input#primeiroNumero').value;
    var elementoNumeroDois = document.querySelector('input#segundoNumero').value;
    var resultado = document.getElementById('res');

    var primeiroNumero = Number(elementoNumeroUm);
    var segundoNumero = Number(elementoNumeroDois);

    var div = primeiroNumero / segundoNumero;

    var limparPrimeiroNumero = document.getElementById('primeiroNumero').value = "";
    var limparSegundoNumero = document.getElementById('segundoNumero').value = "";

    if (elementoNumeroUm === "" || elementoNumeroDois === "") {
        alert("Valores não indentificados!");
        resultado.innerHTML = '';
    } else { 
        resultado.innerHTML = primeiroNumero + " / " + segundoNumero + " = " + div;
     }
}

function limpar1() {
    var limpar = document.getElementById('primeiroNumero').value = "";
}

function limpar2() {
    var limpar = document.getElementById('segundoNumero').value = "";
}