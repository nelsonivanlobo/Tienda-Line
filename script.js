const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito'); // Selector corregido

// Cargar eventos
cargarEventListeners();

function cargarEventListeners() {
    // Agregar producto al carrito
    elementos1.addEventListener('click', comprarElemento);

    // Eliminar producto del carrito
    carrito.addEventListener('click', eliminarElemento);

    // Vaciar carrito
    vaciarCarrito.addEventListener('click', vaciarCarritoHandler);
}

// Función para comprar un elemento
function comprarElemento(e) {
    e.preventDefault(); // Evitar que recargue la página
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

// Leer datos del producto seleccionado
function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id') // Corregido
    };
    insertarCarrito(infoElemento);
}

// Insertar producto en el carrito
function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
        <img src="${elemento.imagen}" width="100"/>
    </td>
    <td>
        ${elemento.titulo}
    </td>
    <td>
        ${elemento.precio}
    </td>
    <td>
        <a href="#" class="borrar" data-id="${elemento.id}">x</a>
    </td>
    `;
    lista.appendChild(row);
}

// Eliminar un producto del carrito
function eliminarElemento(e) {
    e.preventDefault(); // Evitar recargar la página al eliminar
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
    }
}

// Vaciar el carrito
function vaciarCarritoHandler(e) {
    e.preventDefault(); // Evitar recargar la página
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}



/* -------------------------------- */
