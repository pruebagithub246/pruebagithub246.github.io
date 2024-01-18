let cesta=[];
let btnAnadirProducto=document.getElementById('anadirProducto');
let btnMostrarCesta=document.getElementById('mostrarCesta');

let idParrafo=1;
btnAnadirProducto.addEventListener('click',e=>{
    let producto=document.getElementById('producto').value;
    cesta.push( {id:idParrafo,nombre:producto});
   // alert('producto añadido');
   idParrafo++;
});

let divCesta=document.getElementById('cesta');
btnMostrarCesta.addEventListener('click',e=>{
    mostrarCesta(cesta);
});

function mostrarCesta(cesta) {
    divCesta.innerHTML='';
    let ul=document.createElement('ul');
    cesta.forEach(producto=>{
        let li=document.createElement('li');
        li.textContent=producto.nombre;
        li.addEventListener('click',(e)=>{
            cesta.splice(cesta.indexOf(producto),1);
            mostrarCesta(cesta);
        })
        ul.appendChild(li);
    });
    divCesta.append(ul); 
}