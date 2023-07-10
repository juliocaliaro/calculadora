var visor = "";
var valor = 0;
var numE = 0;
var numD = 0;
var operacao = "";

function update(value) {
    if (value == "=") {
        equals();
        return;
    }
    else if (["+", "-", "/", "*"].includes(value)) {
        operacao = value;
        numE = parseInt(visor);
        visor = visor + value;
        document.getElementById("vaccount").innerHTML = visor;
        visor = ""
        document.getElementById("vresult").innerHTML = visor;
        return
    }

    visor = visor + value
    document.getElementById("vresult").innerHTML = visor;

}

function clean() {
    visor = ""
    document.getElementById("vresult").innerHTML = visor;
    document.getElementById("vaccount").innerHTML = visor;

}

function equals() {
    var temp = document.getElementById("vaccount").innerHTML;
    temp = temp + visor;
    document.getElementById("vaccount").innerHTML = temp;
    numD = parseInt(visor);
    if (operacao == "+"){
        document.getElementById(`vresult`).innerHTML = (numE + numD)
    }
    else if (operacao == "-"){
        document.getElementById(`vresult`).innerHTML = (numE - numD)
    }
    else if (operacao == "/"){
        document.getElementById(`vresult`).innerHTML = (numE / numD)
    }
    else if (operacao == "*"){
        document.getElementById(`vresult`).innerHTML = (numE * numD)
    }
}