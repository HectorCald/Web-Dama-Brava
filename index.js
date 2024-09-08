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

    const cuadroMenu = document.querySelector('.menu');
    let secciones = document.querySelectorAll('.seccion');

    secciones.forEach(element => {
        element.addEventListener('click', function(){
            cuadroMenu.classList.add('mostrar')
        })
    });
    window.onload = function(){
        seccionNosotros.style.display = 'none';
        seccionProductos.style.display = 'none';
        seccionRecetas.style.display = 'none';
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
                menu();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
            else if(element.textContent==='Recetas'){
                seccionRecetas.style.display = 'flex'
                seccionNosotros.style.display = 'none';
                seccionInicio.style.display = 'none';
                seccionProductos.style.display = 'none';
                menu();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
            else if(element.textContent==='Inicio'){
                seccionInicio.style.display = 'flex'
                seccionNosotros.style.display = 'none';
                seccionProductos.style.display = 'none';
                seccionRecetas.style.display = 'none';
                menu();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
            else if(element.textContent==='Nosotros'){
                seccionNosotros.style.display = 'flex'
                seccionProductos.style.display = 'none';
                seccionInicio.style.display = 'none';
                seccionRecetas.style.display = 'none';
                menu();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
        })
    });
}
function contacto(){
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