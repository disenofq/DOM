let productos = [{id:1,nombre: "Fideos", precio: 25},
{id: 2, nombre: "galletitas", precio: 65 },
{id: 3, nombre: "arroz", precio: 40 },
{id: 4, nombre: "lentejas", precio: 90 },
{id: 5, nombre: "helados", precio: 210 },
]

let mostrarProductos = document.querySelector("#catalogo");

for (let i = 0; i < productos.length; i++){

    mostrarProductos.innerHTML += `
    <div>
    <h3>${productos[i].nombre}</h3>
    <p>${productos[i].precio}</p>
    <button>Agregar al carrito</button>
    </div> <br><br>

    `
}