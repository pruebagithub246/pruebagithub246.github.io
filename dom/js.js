const URLP='http://demo0941469.mockable.io/prueba';
const URlIMG='https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/covers_gameboy/';
getJson(URLP);

function getJson(url) {
    fetch(url)
    .then(response=>response.json())
    .then(json=>{
        console.log(json);
        let contenedor=document.getElementById('contenedor');
        let juegos=json;
        juegos.forEach(juego => {
            let div=document.createElement('div');
            div.className='juego';

            let h2=document.createElement('h2');
            let titulo=juego.title;

            h2.textContent=titulo;
            
            let img=document.createElement('img');
            let imagen=URlIMG+juego.image;

            img.src=imagen;

            div.appendChild(h2);
            div.appendChild(img);
            contenedor.appendChild(div);
        });
    });   
}

let input=document.getElementById('inpt');

input.addEventListener('keypress',e=>{
    let juegos=document.querySelectorAll('.juego');
    if (e.key=='Enter' && input.value!='') {
        //usa filter para coger todos los que no sean igual que el input y les aplicas la clase ocultar
        juegos.forEach(juego=>{
            let titulo=juego.querySelector('h2');
            if (titulo.textContent.toLowerCase().includes(input.value.toLowerCase())) {
                juego.classList.remove("ocultar");
                console.log('titulo:'+titulo.textContent);
            } else {
                juego.classList.add("ocultar");
            }
        });
    }else {
        juegos.forEach(juego=>{
            juego.classList.remove("ocultar");
        });
    }
});