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
    const pestañaInicio = document.querySelector('.pestañaInicio');
    let links = document.querySelectorAll('.link');
    let seccion;

    if(window.innerWidth > 800){
        links.forEach(element => {
            element.addEventListener('click', function(){
                links.forEach(btn => {
                    btn.style.color = 'black';
                    btn.style.textDecoration = 'none';
                });
                this.style.color = 'red'
                this.style.textDecoration = 'underline';
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
    else{
        links.forEach(element => {
            element.addEventListener('click', function(){
                links.forEach(btn => {
                    btn.style.backgroundColor = 'white';
                    btn.style.color = 'black';
                });
                this.style.backgroundColor = 'gray'
                this.style.color = 'white';
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