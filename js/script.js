const input = document.getElementById('input');

input.addEventListener('keyup', (e) => {mostrarValores()});

function mostrarValores(){
    if(verificarNumero()){
        const valueInput = input.value;
        entrada70(valueInput);
        entrada55(valueInput);
        entrada40(valueInput);
        entrada30(valueInput);
    }
}

function verificarNumero(){
    const valorTotal = parseInt(input.value);
    if(isNaN(valorTotal)){
        alert("Valor digitado não é um número");
    }else{
        if(valorTotal >= 10000000){
            alert("Valor excedente.");
        }else{
            return true;
        }
    }
}

function entrada70(entrada){
    const spanEntrada = document.getElementById('entrada_70');
    const restDuas70 = document.getElementById('restDuas70');
    const restCinco70 = document.getElementById('restCinco70');
    const restNove70 = document.getElementById('restNove70');

    const entrada_70 = (entrada * 70) / 100;
    const restEntrada = entrada - entrada_70;

    spanEntrada.innerHTML = numeroComVirgula((entrada_70).toFixed(2));
    restDuas70.innerHTML = numeroComVirgula((restEntrada / 2).toFixed(2));
    restCinco70.innerHTML = numeroComVirgula((restEntrada / 5).toFixed(2));
    restNove70.innerHTML = numeroComVirgula((restEntrada / 9).toFixed(2));
}

function entrada55(entrada){
    const spanEntrada = document.getElementById('entrada_55');
    const restDuas55 = document.getElementById('restDuas55');
    const restCinco55 = document.getElementById('restCinco55');
    const restNove55 = document.getElementById('restNove55');

    const entrada_55 = (entrada * 55) / 100;
    const restEntrada = entrada - entrada_55;

    spanEntrada.innerHTML = numeroComVirgula((entrada_55).toFixed(2));
    restDuas55.innerHTML = numeroComVirgula((restEntrada / 2).toFixed(2));
    restCinco55.innerHTML = numeroComVirgula((restEntrada / 5).toFixed(2));
    restNove55.innerHTML = numeroComVirgula((restEntrada / 9).toFixed(2));
}

function entrada40(entrada){
    const spanEntrada = document.getElementById('entrada_40');
    const restDuas40 = document.getElementById('restDuas40');
    const restCinco40 = document.getElementById('restCinco40');
    const restNove40 = document.getElementById('restNove40');

    const entrada_40 = (entrada * 40) / 100;
    const restEntrada = entrada - entrada_40;

    spanEntrada.innerHTML = numeroComVirgula((entrada_40).toFixed(2));
    restDuas40.innerHTML = numeroComVirgula((restEntrada / 2).toFixed(2));
    restCinco40.innerHTML = numeroComVirgula((restEntrada / 5).toFixed(2));
    restNove40.innerHTML = numeroComVirgula((restEntrada / 9).toFixed(2));
}

function entrada30(entrada){
    const spanEntrada = document.getElementById('entrada_30');
    const restDuas30 = document.getElementById('restDuas30');
    const restCinco30 = document.getElementById('restCinco30');
    const restNove30 = document.getElementById('restNove30');

    const entrada_30 = (entrada * 30) / 100;
    const restEntrada = entrada - entrada_30;

    spanEntrada.innerHTML = numeroComVirgula((entrada_30).toFixed(2));
    restDuas30.innerHTML = numeroComVirgula((restEntrada / 2).toFixed(2));
    restCinco30.innerHTML = numeroComVirgula((restEntrada / 5).toFixed(2));
    restNove30.innerHTML = numeroComVirgula((restEntrada / 9).toFixed(2));
}


function numeroComVirgula(x) {
    var numero = x.toString().split(".");
    numero[0]=numero[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
    return numero.join(",");
}