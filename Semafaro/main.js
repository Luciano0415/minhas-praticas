function farolVerde() {
    var verde = document.getElementById('farol');
    verde.src = 'img/verde.png';
    document.getElementById('texto').innerHTML = 'O farol esta aberto!';
}

function farolAmarelo() {
    var amarelo = document.getElementById('farol');
    amarelo.src = 'img/amarelo.png';
    document.getElementById('texto').innerHTML = 'O farol esta prestes a fechar!';
}

function farolVermelho() {
    var vermelho = document.getElementById('farol');
    vermelho.src = 'img/vermelho.png';
    document.getElementById('texto').innerHTML = 'O farol fechou!';
}

function farolDesligado() {
    alert('O farol foi desligado!');
    document.getElementById('farol').src = 'img/desligado.png';
    document.getElementById('texto').innerHTML = "";
}
