/**
 * La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes.
Los ingredientes para cada tipo de pizza aparecen a continuación.
a. Ingredientes vegetarianos: Pimiento y tofu.
b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no,
y en función de su respuesta le muestre un menú con los ingredientes disponibles
para que elija. Solo se puede elegir un ingrediente además de la mozzarella y el
tomate que están en todas las pizzas. Al final se debe mostrar por pantalla si la
pizza elegida es vegetariana o no y todos los ingredientes que lleva.
 */
let mostrar = [];
let usuario = prompt("Ingrese que piza quiere \n - Vegetariana \n - No vegetariana").toUpperCase().charAt(0);
if (usuario === "V"){
    alert("Usted a seleccionado la pizza vegetariana");
    let ingredientes = ["Pimientos", "Tofu"];
    let seleccion = prompt((`Los ingredientes son ${ingredientes[0]} y ${ingredientes[1]} \n Elija un ingrediente`)).toUpperCase().charAt(0);
    if (seleccion === "P") {
        mostrar.push(ingredientes[0]);
        mostrar.push("Salsa de tomate", "Queso mozzarella");
        alert(`Los ingredientes de la pizza vegetariana que elijio fueron \n ${mostrar}`)
    }
    else if (seleccion === "T") {
        mostrar.push(ingredientes[1]);
        mostrar.push("Salsa de tomate", "Queso mozzarella");
        alert(`Los ingredientes de la pizza vegetariana que elijio fueron \n ${mostrar}`)
    }
}
else if (usuario === "N") {
    alert("Usted a seleccionado la pizza de carnes");
    let ingredientes = ["Pepperoni", "Jamon", "Salmon"];
    let seleccion = prompt(`Los ingredientes que tiene la piza de carne son ${ingredientes[0]},${ingredientes[1]} y ${ingredientes[2]} \n Elija un ingrediente`).toUpperCase().charAt(0);
    if (seleccion === "P") {
        mostrar.push(ingredientes[0]);
        mostrar.push("Salsa de tomate", "Queso mozzarella");
        alert(`Los ingredientes de la pizza de carnes que elijio fueron \n ${mostrar}`)
    }
    else if (seleccion === "J") {
        mostrar.push(ingredientes[1]);
        mostrar.push("Salsa de tomate", "Queso mozzarella");
        alert(`Los ingredientes de la pizza de carnes que elijio fueron \n ${mostrar}`)
    }
    else if (seleccion === "S") {
        mostrar.push(ingredientes[2]);
        mostrar.push("Salsa de tomate", "Queso mozzarella");
        alert(`Los ingredientes de la pizza de carnes que elijio fueron \n ${mostrar}`)
    }
}


