function quebrar() {
    alert("Nossa tenha mas cuidado! Olha o que você fez... Quebrou a Lâmpada")
    var txt = document.getElementById('txt');
    txt.innerHTML = "Lâmpada quebrada!";
    document.querySelector('img').src = "img/quebrada.jpg";

    var btnUm = document.getElementById('btnUm');
    btnUm.remove();
    var btnDois = document.getElementById('btnDois');
    btnDois.remove();
}

function ligar(){
    var txt = document.getElementById('txt');
    txt.innerHTML = "Você ligou a lâmpada!"
    document.querySelector('img').src = "img/ligada.jpg";
}

function desligar(){
    var txt = document.getElementById('txt');
    txt.innerHTML = "Você desligou a lâmpada!"
    document.querySelector('img').src = "img/desligada.jpg";
}