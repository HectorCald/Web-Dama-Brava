document.addEventListener('DOMContentLoaded', function(){
    desabilitaEnlaces();
    navegacion();
    secciones();
    agregarProductos();
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
                imagen.src = './public/Imagenes2/imgIconos/menu_close.webp';
            }
            else{
                imagen.src = './public/Imagenes2/imgIconos/menu_open.webp';
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
        imagen.src = './public/Imagenes2/imgIconos/menu_close.webp';
    }
    else{
        imagen.src = './public/Imagenes2/imgIconos/menu_open.webp';
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
// Ajustar el zoom a 100% cuando la página se carga o cuando se oculta el teclado


// Funcion general de la seccion de productos
const productos = [
    {
        nombre: 'AJI AMARILLO',
        imagen: '',
        descripcion: 'Dulce, Semi picante, Picante',
        gramaje: '25gr - 200gr - 500gr - 1kl'
    },
    {
        nombre: 'AJI ROJO',
        imagen: '',
        descripcion: 'Dulce, Semi picante, Picante',
        gramaje: '25gr - 200gr - 500gr - 1kl'
    },
    {
        nombre: 'SEMILLA DE AJÍ',
        imagen: '',
        descripcion: 'Semi picante',
        gramaje: '25gr - 200gr - 500gr - 1kl'
    },
    {
        nombre: 'CÚRCUMA',
        imagen: '',
        descripcion: 'SIN DETALLES',
        gramaje: '25gr'
    },
    {
        nombre: 'AJO',
        imagen: '',
        descripcion: 'Molido',
        gramaje: '30gr'
    },
    {
        nombre: 'CURRY',
        imagen: '',
        descripcion: 'Molido',
        gramaje: '10gr'
    },
    {
        nombre: 'AJI NO MOTO',
        imagen: '',
        descripcion: 'Molido',
        gramaje: '30gr'
    },
    {
        nombre: 'JENGIBRE',
        imagen: '',
        descripcion: 'Molido',
        gramaje: '18gr'
    },
    {
        nombre: 'PIMIENTA ENT.',
        imagen: '',
        descripcion: 'Entera (negro)',
        gramaje: '13gr'
    },
    {
        nombre: 'PIMIENTA MOL.',
        imagen: '',
        descripcion: 'Molido (Negro)',
        gramaje: '18gr'
    },
    {
        nombre: 'PIMIENTA DULCE',
        imagen: '',
        descripcion: 'Enetara (dulce)',
        gramaje: '10gr'
    },
    {
        nombre: 'PIMIENTA DULCE',
        imagen: '',
        descripcion: 'Molido (Molida)',
        gramaje: '10gr'
    },
    {
        nombre: 'PIMIENTA BLANCA',
        imagen: '',
        descripcion: 'Molido',
        gramaje: '10gr'
    },
    {
        nombre: 'COMINO ENTERO',
        imagen: '',
        descripcion: 'Entero',
        gramaje: '15gr'
    },
    {
        nombre: 'COMINO MOLIDO',
        imagen: '',
        descripcion: 'Molido',
        gramaje: '15gr'
    },
    {
        nombre: 'CILANTRO',
        imagen: '',
        descripcion: 'Molido',
        gramaje: '25gr'
    },
    {
        nombre: 'CEBOLLA BLANCA',
        imagen: '',
        descripcion: 'Molido',
        gramaje: '10gr'
    },
    {
        nombre: 'LOCOTO',
        imagen: '',
        descripcion: 'Molido',
        gramaje: '22gr'
    },
    {
        nombre: 'COLORANTE ROJO',
        imagen: '',
        descripcion: 'Molido',
        gramaje: '45gr'
    },
    {
        nombre: 'PAPRIKA',
        imagen: '',
        descripcion: 'Pimenton en polvo',
        gramaje: '16gr'
    },
    {
        nombre: 'PALILLO',
        imagen: '',
        descripcion: 'SIN DETALLES',
        gramaje: '20gr'
    },
    {
        nombre: 'ANÍS',
        imagen: '',
        descripcion: 'Verde',
        gramaje: '18gr'
    },
    {
        nombre: 'CLAVO DE OLOR',
        imagen: '',
        descripcion: 'Entero',
        gramaje: '10gr'
    },
    {
        nombre: 'CLAVO DE OLOR',
        imagen: '',
        descripcion: 'Molido',
        gramaje: '10gr'
    },
    {
        nombre: 'HOJAS DE LAUREL',
        imagen: '',
        descripcion: 'Sin detalles',
        gramaje: '5gr'
    },
    {
        nombre: 'HOJAS DE LAUREL',
        imagen: '',
        descripcion: 'Molido',
        gramaje: '8gr'
    },
    {
        nombre: 'CURRY',
        imagen: '',
        descripcion: 'Molido',
        gramaje: '10gr'
    },
]
function agregarProductos() {
    const container = document.getElementById('productos-container');

    productos.forEach((producto, index) => {
        const divProducto = document.createElement('div');
        divProducto.className = 'producto';
        divProducto.dataset.index = index; // Agregar el índice del producto

        const img = document.createElement('img');
        img.src = producto.imagen;
        img.className = 'imagenProducto';

        const p = document.createElement('p');
        p.textContent = producto.nombre;

        divProducto.appendChild(img);
        divProducto.appendChild(p);

        container.appendChild(divProducto);
    });
}
function actualizarInfoProducto(index) {
    const producto = productos[index];
    document.getElementById('producto-imagen').src = producto.imagen;
    document.getElementById('producto-nombre').textContent = producto.nombre;
    document.getElementById('producto-descripcion').textContent = producto.descripcion;
    document.getElementById('producto-gramaje').textContent = producto.gramaje;
}
let productoIndex = 0;
document.getElementById('productos-container').addEventListener('click', (event) => {
    if (event.target.closest('.producto')) {
        const index = parseInt(event.target.closest('.producto').dataset.index);
        productoIndex = index;
        actualizarInfoProducto(productoIndex);
        window.scrollTo({
            top:0, // Ajusta el desplazamiento para que esté a 100px del top
            behavior: 'smooth' // Desplazamiento suave
        });
        document.getElementById('busquedaInput').value = ''
    }
});
document.getElementById('btn-anterior').addEventListener('click', () => {
    if (productoIndex > 0) {
        productoIndex--;
        actualizarInfoProducto(productoIndex);
    }
});
document.getElementById('btn-siguiente').addEventListener('click', () => {
    if (productoIndex < productos.length - 1) {
        productoIndex++;
        actualizarInfoProducto(productoIndex);
    }
});



const buscador = document.querySelector('.buscador');
const originalOffsetTop = buscador.offsetTop;
const barra = document.querySelector('.barraNavegacion');
const seccionProductos = document.querySelector('.seccionProductos');

function manejarScroll() {
    const offset = window.scrollY; // La distancia desde el top del documento hasta el top de la ventana
    const alturaBuscador = originalOffsetTop + buscador.offsetHeight;
if(seccionProductos.style.display==='flex'){
    if (offset >= originalOffsetTop - 50) {
        buscador.classList.remove('fixed');
        barra.classList.remove('fixedNav')
    } else {
        buscador.classList.add('fixed');
        barra.classList.add('fixedNav')
    }

    // Para cuando el elemento está fijo y se desplaza hacia abajo
    if (offset > alturaBuscador - 50) {
        buscador.classList.add('fixed');
        barra.classList.add('fixedNav')
    }
}
}
window.addEventListener('scroll', manejarScroll);



document.getElementById('busquedaInput').addEventListener('blur', function() {
    // Desplazamiento para ajustar el zoom
    window.scrollTo({
        top: 0,  // Vuelve a la parte superior de la página
        behavior: 'smooth' // Desplazamiento suave
    });

    // Ajustar el zoom (esto puede no ser necesario, pero es útil en algunos casos)
    document.body.style.zoom = '100%';
});



//funcuion para filtrar
document.getElementById('buscarButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('busquedaInput').value.toLowerCase();
    const productosContainer = document.querySelectorAll('#productos-container .producto');

    productosContainer.forEach(producto => {
        const productoNombre = producto.querySelector('p').textContent.toLowerCase();
        
        if (productoNombre.includes(searchTerm) || searchTerm === '') {
            producto.style.display = ''; // Muestra el producto
        } else {
            producto.style.display = 'none'; // Oculta el producto
        }
    });

    // Desplaza la pantalla para que la div de elementos esté a 100px del top
    const productosContainerElement = document.getElementById('productos-container');
    const offsetTop = productosContainerElement.offsetTop;

    window.scrollTo({
        top: offsetTop - 200, // Ajusta el desplazamiento para que esté a 100px del top
        behavior: 'smooth' // Desplazamiento suave
    });
    
    document.querySelectorAll('#productos-container .producto').forEach(producto => {
        producto.addEventListener('click', function() {
            document.body.style.zoom = '100%';
            // Muestra todos los productos
            document.querySelectorAll('#productos-container .producto').forEach(p => {
                p.style.display = ''; // Muestra todos los productos
            });
            // Limpia el campo de búsqueda y realiza una búsqueda vacía
            document.getElementById('busquedaInput').value = '';
            document.getElementById('buscarButton').click(); // Simula clic en buscar
        });
    });
});

