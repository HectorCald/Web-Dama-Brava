document.addEventListener('DOMContentLoaded', function(){
    desabilitaEnlaces();
    navegacion();
})

function desabilitaEnlaces(){
    const enlaces = document.querySelectorAll('a');
    enlaces.forEach(function(enlace){
        enlace.addEventListener('click', function(event){
            event.preventDefault();
            
        })
    })
}
function navegacion(){
    let links = document.querySelectorAll('.link');
    let seccion;
    links.forEach(element => {
        element.addEventListener('click', function(){
            if(element.textContent==='Productos'){
                seccion='.tituloProductos';
                irSeccion(seccion, -50);
                menu()
            }
            else if(element.textContent==='Recetas'){
                seccion='.tituloRecetas';
                irSeccion(seccion, -50);
                menu()
            }
            else if(element.textContent==='Inicio'){
                seccion='.inicio';
                irSeccion(seccion, -50);
                menu()
            }
            else if(element.textContent==='Nosotros'){
                seccion='.tituloNosotros';
                irSeccion(seccion, -50);
                menu()
            }
        })
    });
}
function contacto(){
    window.scrollTo({
        top: document.body.scrollHeight, behavior: 'smooth'
    });
}
function irSeccion(elementId, offset) {
    return new Promise((resolve) => {
      const elemento = document.querySelector(elementId);
      
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
          window.scrollBy(0, offset);
          resolve();
        }, 800);
      }
    });
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