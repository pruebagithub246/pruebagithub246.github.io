let btnCalcularImc=document.getElementById('calculadoraImc');
btnCalcularImc.addEventListener('click',e=>{
    let altura=document.getElementById('altura').value;
    let peso=document.getElementById('peso').value;
    document.getElementById('resultado').innerHTML=calcularImc(altura,peso);
});

function calcularImc(altura,peso) {
    return (peso/(altura**2)).toFixed(1);
}