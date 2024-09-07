const stock = [];
const adminUser = "admin";
const adminPassword = "1234";

function mostrarStock() {
    console.log("Stock actual:");
    stock.forEach(item => console.log(`ID: ${item.id}, Producto: ${item.producto}, Cantidad: ${item.cantidad}`));
}

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
        agregarProducto();
    }
}

function eliminarProducto() {
    const id = parseInt(prompt("Ingrese el ID del producto que desea eliminar:"));
    const index = stock.findIndex(item => item.id === id);

    if (index !== -1) {
        const productoEliminado = stock.splice(index, 1);
        alert(`Producto ${productoEliminado[0].producto} eliminado del stock.`);
        mostrarStock();
    } else {
        alert("Producto no encontrado.");
    }
}

function iniciarSesion() {
    const usuario = prompt("Ingrese el usuario:");
    const contraseña = prompt("Ingrese la contraseña:");

    if (usuario === adminUser && contraseña === adminPassword) {
        alert("Inicio de sesión exitoso.");
        gestionarStock();
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

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
                alert("Saliendo de la gestión de stock.");
                break;
            default:
                alert("Opción inválida. Inténtelo de nuevo.");
        }
    } while (opcion !== 4);
}

iniciarSesion();