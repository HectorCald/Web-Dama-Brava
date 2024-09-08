document.addEventListener('DOMContentLoaded', function(){
    desabilitaEnlaces();
    navegacion();
    secciones();
})
function secciones(){
    const seccionInicio = document.querySelector('.seccionInicio');
    const seccionProductos = document.querySelector('.seccionProductos');
    const seccionRecetas = document.querySelector('.seccionRecetas');
    const seccionNosotros = document.querySelector('.seccionNosotros');
    const pestañaInicio = document.querySelector('.pestañaInicio');


    const cuadroMenu = document.querySelector('.menu');
    let secciones = document.querySelectorAll('.seccion');

    secciones.forEach(element => {
        const imagen = document.querySelector('.botonImagen');
        element.addEventListener('click', function(){
            cuadroMenu.classList.add('mostrar')
            if(cuadroMenu.classList.contains('mostrar')){
                imagen.src = './public/Imagenes/menu_close.png';
            }
            else{
                imagen.src = './public/Imagenes/menu_open.png';
            }
        })
    });
    window.onload = function(){
        seccionInicio.style.display ='flex'
        seccionNosotros.style.display = 'none';
        seccionProductos.style.display = 'none';
        seccionRecetas.style.display = 'none';
        marcas();
    }
}
function desabilitaEnlaces(){
    const enlaces = document.querySelectorAll('.link');
    enlaces.forEach(function(enlace){
        enlace.addEventListener('click', function(event){
            event.preventDefault();
            
        })
    })
}
function navegacion(){
    const seccionInicio = document.querySelector('.seccionInicio');
    const seccionProductos = document.querySelector('.seccionProductos');
    const seccionRecetas = document.querySelector('.seccionRecetas');
    const seccionNosotros = document.querySelector('.seccionNosotros');

    let links = document.querySelectorAll('.link');
    let seccion;
        links.forEach(element => {
            element.addEventListener('click', function(){
                if(element.textContent==='Productos'){
                    seccionProductos.style.display = 'flex'
                    seccionNosotros.style.display = 'none';
                    seccionInicio.style.display = 'none';
                    seccionRecetas.style.display = 'none';
                }
                else if(element.textContent==='Recetas'){
                    seccionRecetas.style.display = 'flex'
                    seccionNosotros.style.display = 'none';
                    seccionInicio.style.display = 'none';
                    seccionProductos.style.display = 'none';
                }
                else if(element.textContent==='Inicio'){
                    seccionInicio.style.display = 'flex'
                    seccionNosotros.style.display = 'none';
                    seccionProductos.style.display = 'none';
                    seccionRecetas.style.display = 'none';
                }
                else if(element.textContent==='Nosotros'){
                    seccionNosotros.style.display = 'flex'
                    seccionProductos.style.display = 'none';
                    seccionInicio.style.display = 'none';
                    seccionRecetas.style.display = 'none';
                }
                menu();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
                marcas();
            })
            
        });
    }
function contacto(){
    let links = document.querySelectorAll('.link');
    window.scrollTo({
        top: document.body.scrollHeight, behavior: 'smooth'
    });
    menu()
}
function menu(){
    const imagen = document.querySelector('.botonImagen');
    const cuadroMenu = document.querySelector('.menu');
    cuadroMenu.classList.toggle('mostrar')
    if(cuadroMenu.classList.contains('mostrar')){
        imagen.src = './public/Imagenes/menu_close.png';
    }
    else{
        imagen.src = './public/Imagenes/menu_open.png';
    }
}
function catalogo(){
    window.location.href = './public/catalogo.pdf'
}
function botonProductos(){
    const seccionInicio = document.querySelector('.seccionInicio');
    const seccionProductos = document.querySelector('.seccionProductos');
    seccionProductos.style.display = 'flex'
    seccionInicio.style.display = 'none';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    marcas();
}
function botonNosotros(){
    const seccionInicio = document.querySelector('.seccionInicio');
    const seccionNosotros = document.querySelector('.seccionNosotros');
    seccionNosotros.style.display = 'flex'
    seccionInicio.style.display = 'none';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    marcas();
}
function marcas(){
    var seccionInicio = document.querySelector('.seccionInicio');
    var seccionProductos = document.querySelector('.seccionProductos');
    var seccionRecetas = document.querySelector('.seccionRecetas');
    var seccionNosotros = document.querySelector('.seccionNosotros');

    const pestañaInicio = document.querySelector('.pestañaInicio');
    const pestañaProductos = document.querySelector('.pestañaProductos');
    const pestañaRecetas = document.querySelector('.pestañaRecetas');
    const pestañaNosotros = document.querySelector('.pestañaNosotros');
    

    if(window.innerWidth>800){
            pestañaRecetas.style.backgroundColor = 'white'
            pestañaNosotros.style.backgroundColor = 'white'
            pestañaProductos.style.backgroundColor= 'white'
            pestañaInicio.style.backgroundColor = 'white'

        if(seccionInicio.style.display==='flex'){
            pestañaInicio.style.color = 'red'
            pestañaNosotros.style.color = 'black'
            pestañaProductos.style.color = 'black'
            pestañaRecetas.style.color = 'black'
    
            pestañaInicio.style.textDecoration = 'underline'
            pestañaNosotros.style.textDecoration = 'none'
            pestañaProductos.style.textDecoration= 'none'
            pestañaRecetas.style.textDecoration = 'none'
        }
        else if(seccionNosotros.style.display==='flex'){
            pestañaNosotros.style.color = 'red'
            pestañaInicio.style.color = 'black'
            pestañaProductos.style.color = 'black'
            pestañaRecetas.style.color = 'black'
    
            pestañaNosotros.style.textDecoration = 'underline'
            pestañaInicio.style.textDecoration = 'none'
            pestañaProductos.style.textDecoration= 'none'
            pestañaRecetas.style.textDecoration = 'none'
        }
        else if(seccionRecetas.style.display==='flex'){
            pestañaRecetas.style.color = 'red'
            pestañaNosotros.style.color = 'black'
            pestañaProductos.style.color = 'black'
            pestañaInicio.style.color = 'black'
    
            pestañaRecetas.style.textDecoration = 'underline'
            pestañaNosotros.style.textDecoration = 'none'
            pestañaProductos.style.textDecoration= 'none'
            pestañaInicio.style.textDecoration = 'none'
        }
        else if(seccionProductos.style.display==='flex'){
            pestañaProductos.style.color = 'red'
            pestañaNosotros.style.color = 'black'
            pestañaInicio.style.color = 'black'
            pestañaRecetas.style.color = 'black'
    
            pestañaProductos.style.textDecoration = 'underline'
            pestañaNosotros.style.textDecoration = 'none'
            pestañaInicio.style.textDecoration= 'none'
            pestañaRecetas.style.textDecoration = 'none'
        }
    }
    else{
            pestañaInicio.style.textDecoration = 'none'
            pestañaNosotros.style.textDecoration = 'none'
            pestañaProductos.style.textDecoration= 'none'
            pestañaRecetas.style.textDecoration = 'none'
        if(seccionInicio.style.display==='flex'){
            pestañaInicio.style.color = 'white'
            pestañaNosotros.style.color = 'black'
            pestañaProductos.style.color = 'black'
            pestañaRecetas.style.color = 'black'
    
            pestañaInicio.style.backgroundColor = 'gray'
            pestañaNosotros.style.backgroundColor = 'white'
            pestañaProductos.style.backgroundColor= 'white'
            pestañaRecetas.style.backgroundColor = 'white'
        }
        else if(seccionNosotros.style.display==='flex'){
            pestañaNosotros.style.color = 'white'
            pestañaInicio.style.color = 'black'
            pestañaProductos.style.color = 'black'
            pestañaRecetas.style.color = 'black'
    
            pestañaNosotros.style.backgroundColor = 'gray'
            pestañaRecetas.style.backgroundColor = 'white'
            pestañaProductos.style.backgroundColor= 'white'
            pestañaInicio.style.backgroundColor = 'white'
        }
        else if(seccionRecetas.style.display==='flex'){
            pestañaRecetas.style.color = 'white'
            pestañaNosotros.style.color = 'black'
            pestañaProductos.style.color = 'black'
            pestañaInicio.style.color = 'black'
    
            pestañaRecetas.style.backgroundColor = 'gray'
            pestañaNosotros.style.backgroundColor = 'white'
            pestañaProductos.style.backgroundColor= 'white'
            pestañaInicio.style.backgroundColor = 'white'
        }
        else if(seccionProductos.style.display==='flex'){
            pestañaProductos.style.color = 'white'
            pestañaNosotros.style.color = 'black'
            pestañaInicio.style.color = 'black'
            pestañaRecetas.style.color = 'black'
    
            pestañaProductos.style.backgroundColor = 'gray'
            pestañaNosotros.style.backgroundColor = 'white'
            pestañaRecetas.style.backgroundColor= 'white'
            pestañaInicio.style.backgroundColor = 'white'
        }
    }
   
}