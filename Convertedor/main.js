function ConverterDolar() {
    var elementoReal = window.document.getElementById('valor');
    var valorEmRealNumerico = elementoReal.value;
    var valor = Number(valorEmRealNumerico);

    var valorEmDolarNumerico = valorEmRealNumerico * 0.19;
    var dolarFixed = valorEmDolarNumerico.toFixed(2);

    var elementoValorConvertidoDolar = window.document.querySelector('h2#valorConvertido1');
    var valorConvertido = 'O resultado em Dolar é U$' + dolarFixed;
    elementoValorConvertidoDolar.innerHTML = valorConvertido;
}

function ConverterEuro() {
    var elementoEuro = window.document.getElementById('valor');
    var valorEmRealNumerico = elementoEuro.value;
    var valor = Number(valorEmEuroNumerico);

    var valorEmEuroNumerico = valorEmRealNumerico * 0.16;
    var euroFixed = valorEmEuroNumerico.toFixed(2);
    
    var elementoValorConvertidoEuro = window.document.querySelector('h2#valorConvertido1');
    var valorConvertido = 'O resultado em Euro é €$' + euroFixed;
    elementoValorConvertidoEuro.innerHTML = valorConvertido;
}

function ConverterTemperaturaF() {
    var elementoC = window.document.getElementById('temperatura').value;
    var temperaturaF = Number((elementoC * 1.8) + 32).toFixed(2);
    var resultadoTemp = window.document.querySelector('h2#valorConvertido2')
    var resultadoFQ = window.document.querySelector('p#temp')
    if (temperaturaF >= 100) {
        resultadoTemp.innerHTML = 'Sua tem peratura é ' + temperaturaF + '°F'
        resultadoFQ.innerHTML = 'Esta quente'
    } else if (temperaturaF <= 32) {
        resultadoTemp.innerHTML = 'Sua tem peratura é ' + temperaturaF + '°F'
        resultadoFQ.innerHTML = 'Esta frio'
    } else {
        resultadoTemp.innerHTML = 'Sua tem peratura é ' + temperaturaF + '°F'
        resultadoFQ.innerHTML = 'Esta um clima neutro'
    }
} 

function ConverterTemperaturaK() {
    var elementoC = Number(window.document.getElementById('temperatura').value);
    var temperaturaK = Number(elementoC + 273.15).toFixed(2);
    var resultadoTemp = window.document.querySelector('h2#valorConvertido2');
    var resultadoFQ = window.document.querySelector('p#temp')

    if (temperaturaK >= 373) {
        resultadoTemp.innerHTML = 'Sua tem peratura é ' + temperaturaK + 'K'
        resultadoFQ.innerHTML = 'Esta quente'
    } else if (temperaturaK > 273) {
        resultadoTemp.innerHTML = 'Sua tem peratura é ' + temperaturaK + 'K'
        resultadoFQ.innerHTML = 'Esta clima neutro'
    } else if (temperaturaK <= 273) {
        resultadoTemp.innerHTML = 'Sua tem peratura é ' + temperaturaK + 'K'
        resultadoFQ.innerHTML = 'Esta frio'
    } else {
        resultadoTemp.innerHTML = 'Sua tem peratura é ' + temperaturaK + 'K'
    }
}