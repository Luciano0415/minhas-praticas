function verificar() {
    var nome = window.document.getElementById('nome').value;
    var peso = window.document.getElementById('peso').value;
    var altura = window.document.getElementById('altura').value;
    var res = window.document.querySelector('div#res');
    var imc = peso / (2 * altura);
    var imcFixed = imc.toFixed(2);

    if (imcFixed <= 18.40) {
        res.innerHTML = nome + " voce esta abaixo do peso com " + imcFixed + " de IMC ";
    } else if (imcFixed <= 24.90) {
        res.innerHTML = nome + " voce esta em seu peso normal com " + imcFixed + " de IMC ";
    } else if (imcFixed <= 29.90) {
        res.innerHTML = nome + " voce esta sobrepeso com " + imcFixed + " de IMC ";
    } else if (imcFixed <= 34.90) {
        res.innerHTML = nome + " voce esta em obesidade Grau 1 com " + imcFixed + " de IMC ";
    } else if (imcFixed <= 39.90) {
        res.innerHTML = nome + " voce esta em obesidade Grau 2 com " + imcFixed + " de IMC ";
    } else if (imcFixed >= 40) {
        res.innerHTML = nome + " voce esta em obesidade Grau 3 com " + imcFixed + " de IMC ";
    } else {
        alert("[ERRO] sem resultados nos campos abaixo!");
    }
}