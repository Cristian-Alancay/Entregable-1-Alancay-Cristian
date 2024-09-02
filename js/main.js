// Base de datos de usuarios (simulada con un array)
const usuarios = [
    { username: 'admin', password: '1234' },
    { username: 'usuario1', password: '5678' },
    { username: 'usuario2', password: 'abcd' }
];

// Stock inicial (array de objetos)
const stock = [
    { id: 1, producto: 'Monitor', cantidad: 10 },
    { id: 2, producto: 'Teclado', cantidad: 20 },
    { id: 3, producto: 'Mouse', cantidad: 15 }
];

// Función para realizar login
function login() {
    const username = prompt("Ingrese su nombre de usuario:");
    const password = prompt("Ingrese su contraseña:");

    const usuarioEncontrado = usuarios.find(user => user.username === username && user.password === password);

    if (usuarioEncontrado) {
        alert(`Bienvenido, ${username}!`);
        gestionarStock();
    } else {
        alert("Usuario o contraseña incorrectos. Inténtelo de nuevo.");
        // En lugar de recursividad, podrías usar un bucle o manejar esto de otra manera
        login(); // Volver a intentar login
    }
}

// Función para mostrar el stock
function mostrarStock() {
    if (!Array.isArray(stock)) {
        console.error("Error: 'stock' no está definido o no es un array.");
        return;
    }

    if (stock.length === 0) {
        console.log("No hay productos en el stock.");
        return;
    }

    console.log("Stock actual:");
    stock.forEach(item => {
        console.log(`ID: ${item.id}, Producto: ${item.producto}, Cantidad: ${item.cantidad}`);
    });
}


// Función para agregar producto al stock
function agregarProducto() {
    const producto = prompt("Ingrese el nombre del producto:");
    const cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));

    if (!isNaN(cantidad) && cantidad > 0) {
        const nuevoProducto = {
            id: stock.length + 1,
            producto: producto,
            cantidad: cantidad
        };
        stock.push(nuevoProducto);
        alert("Producto agregado exitosamente.");
    } else {
        alert("Cantidad inválida. Inténtelo de nuevo.");
        agregarProducto(); // Volver a intentar agregar producto
    }
}

// Función para eliminar producto del stock
function eliminarProducto() {
    const id = parseInt(prompt("Ingrese el ID del producto que desea eliminar:"));
    const index = stock.findIndex(item => item.id === id);

    if (index !== -1) {
        const productoEliminado = stock.splice(index, 1);
        alert(`Producto ${productoEliminado[0].producto} eliminado del stock.`);
        
        // Llamar a mostrarStock para mostrar el stock actualizado
        mostrarStock();
    } else {
        alert("Producto no encontrado.");
    }
}

// Función para gestionar el stock (menú principal)
function gestionarStock() {
    let opcion;
    do {
        opcion = parseInt(prompt("Seleccione una opción:\n1. Mostrar Stock\n2. Agregar Producto\n3. Eliminar Producto\n4. Salir"));
        switch (opcion) {
            case 1:
                mostrarStock();
                break;
            case 2:
                agregarProducto();
                break;
            case 3:
                eliminarProducto();
                break;
            case 4:
                alert("Saliendo del sistema.");
                break;
            default:
                alert("Opción no válida.");
        }
    } while (opcion !== 4);
}

// Añadir un event listener al botón para iniciar el simulador
document.getElementById('startBtn').addEventListener('click', function() {
    login(); // Inicia el proceso de login y gestión de stock
});

// Función para realizar login
function login() {
    const username = prompt("Ingrese su nombre de usuario:");
    const password = prompt("Ingrese su contraseña:");

    const usuarioEncontrado = usuarios.find(user => user.username === username && user.password === password);

    if (usuarioEncontrado) {
        alert(`Bienvenido, ${username}!`);
        gestionarStock();
    } else {
        alert("Usuario o contraseña incorrectos. Inténtelo de nuevo.");
        login(); // Volver a intentar login
    }
}

// Función para mostrar el stock
function mostrarStock() {
    console.log("Stock actual:");
    stock.forEach(item => {
        console.log(`ID: ${item.id}, Producto: ${item.producto}, Cantidad: ${item.cantidad}`);
    });
}

// Función para agregar producto al stock
function agregarProducto() {
    const producto = prompt("Ingrese el nombre del producto:");
    const cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));

    if (!isNaN(cantidad) && cantidad > 0) {
        const nuevoProducto = {
            id: stock.length + 1,
            producto: producto,
            cantidad: cantidad
        };
        stock.push(nuevoProducto);
        alert("Producto agregado exitosamente.");
    } else {
        alert("Cantidad inválida. Inténtelo de nuevo.");
        agregarProducto(); // Volver a intentar agregar producto
    }
}

// Función para eliminar producto del stock
function eliminarProducto() {
    const id = parseInt(prompt("Ingrese el ID del producto que desea eliminar:"));
    const index = stock.findIndex(item => item.id === id);

    if (index !== -1) {
        const productoEliminado = stock.splice(index, 1);
        alert(`Producto ${productoEliminado[0].producto} eliminado del stock.`);
        
        // Llamar a mostrarStock para mostrar el stock actualizado
        mostrarStock();
    } else {
        alert("Producto no encontrado.");
    }
}

// Función para gestionar el stock (menú principal)
function gestionarStock() {
    let opcion;
    do {
        opcion = parseInt(prompt("Seleccione una opción:\n1. Mostrar Stock\n2. Agregar Producto\n3. Eliminar Producto\n4. Salir"));
        switch (opcion) {
            case 1:
                mostrarStock();
                break;
            case 2:
                agregarProducto();
                break;
            case 3:
                eliminarProducto();
                break;
            case 4:
                alert("Saliendo del sistema.");
                break;
            default:
                alert("Opción no válida.");
        }
    } while (opcion !== 4);
}

// Añadir un event listener al botón para iniciar el simulador
document.getElementById('startBtn').addEventListener('click', function() {
    login(); // Inicia el proceso de login y gestión de stock
});
