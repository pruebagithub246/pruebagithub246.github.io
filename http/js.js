/**
 fetch('https://dummyjson.com/products/1')
    .then(respuesta=>respuesta.json())
    .then(json=>{
        console.log(`telefono: ${json.title} \n descripcion: ${json.description} Precio:${json.price}€
                    \n En Stock:${json.stock} categoria:${json.category}`);
   
                    let nombreTlf=document.getElementById('nombreTlf');
                    let precio=document.getElementById('precio');
                    let imagenes=document.getElementById('imagenes');
                    let descripcion=document.getElementById('descripcion');
                    let stock=document.getElementById('stock');

                    nombreTlf.innerHTML=json.title;
                    precio.innerHTML=json.price+'€';
                    descripcion.innerHTML='<strong>Descripcion:</strong>'+json.description;
                    stock.innerHTML='En Stock:'+json.stock;

                    json.images.forEach(imagen => {
                        let img=document.createElement('img');
                        img.style.width='100%';
                        img.src=imagen;
                        
                        let div=document.createElement('div');
                        div.style.width='200px';

                        div.append(img);
                        imagenes.appendChild(div);
                    });
   
           });
 */

           fetch('https://dummyjson.com/products')
           .then(respuesta=>respuesta.json())
           .then(json=>{
               
            let arrayProductos=json.products;
            let body=document.querySelector('body');
            let contenedor=document.createElement('div');
            arrayProductos.forEach(producto=>{
                let divTitulos=document.createElement('div');
                let divImagenes=document.createElement('div');
                let divProdct=document.createElement('div');

                contenedor.className='contenedor';
                divProdct.className='producto';
                divTitulos.className='titulos';
                divImagenes.id='imagenes';

                let nombrePrdct=document.createElement('h3');
                let precio=document.createElement('h3');

                
                let descripcion=document.createElement('p');
                let stock=document.createElement('h3');
                
                nombrePrdct.textContent=producto.title;
                precio.textContent=producto.price+'€';
                
                divTitulos.appendChild(nombrePrdct);
                divTitulos.appendChild(precio);
                
                let imagenes=producto.images;
                imagenes.forEach(imagen=>{
                    let img=document.createElement('img');
                        img.style.width='100%';
                        img.src=imagen;
                        
                        let div=document.createElement('div');
                        div.style.width='200px';

                        div.append(img);
                        divImagenes.appendChild(div);

                });


                descripcion.innerHTML='<strong>Descripcion:</strong>'+producto.description;
                stock.innerHTML='En Stock:'+producto.stock;

                divProdct.appendChild(divTitulos);
                divProdct.appendChild(divImagenes);
                divProdct.appendChild(descripcion);
                divProdct.appendChild(stock);

                contenedor.appendChild(divProdct);
            });
            body.appendChild(contenedor);
          
   });