function aplicar() {
    var corFundo = document.getElementById('corFundo').value;
    var corTexto = document.getElementById('corTexto').value;
    var corTitulo = document.getElementById('corTitulo').value;
    var corSubTitulo = document.getElementById('corSubTitulo').value;
    var corFundoHeader = document.getElementById('corHeader').value;
    var corTxtHeader = document.getElementById('corTextoHeader').value;
    var corCaixa = document.getElementById('corCaixa').value;
    var tamanhoTitulo = document.getElementById('tamanhoTituloPX').value;
    var tamanhoSubTitulo = document.getElementById('tamanhoSubTituloPX').value;

    if (corFundo === "") {
        alert("Você não colocou cor de fundo!");
    } else if(corTexto === "") {
        alert("Você não colocou cores para os paragrafos!");
    } else if(corTitulo === "") {
        alert("Você não colocou cor para o Título!");
    } else if(corSubTitulo === "") {
        alert("Você não colocou cor no Sub-Título");
    } else if (corFundoHeader === "") {
        alert("Você não colocou cor de fundo no cabeçalho(Header)!");
    } else if(corTxtHeader === "") {
        alert("Você não colocou cor para os textos no cabeçalho(Header)!");
    } else if(corCaixa === "") {
        alert("Você não escolheu uma cor para caixa!");
    } else {
        document.body.style.background = corFundo;
        document.getElementById('container').style.color = corTexto;
        document.getElementById('titulo').style.color = corTitulo;
        document.getElementById('subTitulo').style.color = corSubTitulo;
        document.getElementById('cabecalho').style.background = corFundoHeader;
        document.getElementById('cabecalho').style.color = corTxtHeader;
        document.getElementById('container').style.background = corCaixa;
    }
    document.getElementById('titulo').style.fontSize = tamanhoTitulo + 'px';
    document.getElementById('subTitulo').style.fontSize = tamanhoSubTitulo + 'px';
} 