let btnCalcularImc=document.getElementById('calculadoraImc');
btnCalcularImc.addEventListener('click',e=>{
    let altura=document.getElementById('altura').value;
    let peso=document.getElementById('peso').value;
    let imc=calcularImc(altura,peso);
    document.getElementById('resultado').innerHTML=imc+' tu rango de peso esta en:'+rangoImc(imc);
});

function calcularImc(altura,peso) {
    return (peso/(altura**2)).toFixed(1);
}

function rangoImc(imc) {
    const IMCS=[18.5,24.9,25,29.9,30];
    if (imc<IMCS[0]) {
        return 'Peso insuficiente';
    } else if (imc>IMCS[0] && imc<IMCS[1]) {
        return 'Peso normal';
    } else if (imc>IMCS[2] && imc<IMCS[3]) {
        return 'Peso sobrepeso';
    }else if (imc>IMCS[4]) {
        return 'obesidad';
    }
}
