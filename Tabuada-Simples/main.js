function montar() {
    var elementoNumero = document.getElementById('numeroTab').value;
    var resContas = document.getElementById('tabulacao');

    var numero = parseInt(elementoNumero);
    var n = parseInt(1);
    var resultado = numero * n;

    if(elementoNumero === "") {
        alert("Você não inseriu nenhum valor!"); 
    } else {
        while(n <= 10) {
            resContas.innerHTML += "<p>" + numero + " x " + n + " = " + resultado +"<br>" + "</p>";
            n++;
            resultado = numero * n;
        }
        var btnUm = document.getElementById('btnMontar');
            btnUm.remove();
        var excluirInput = document.getElementById('number');
            excluirInput.style.display = "none";
    }
    document.getElementById("numeroTab").value = "";
}