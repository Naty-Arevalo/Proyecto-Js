let nombre = (prompt("escriba su nombre aqui").toLowerCase())
alert ("bienvenido/a!" + " " + nombre + " "+ "Vendemos hilos encerados para el artesano, queres comprar? " )
let hilos = ""
let producto = prompt("Tenemos el color Rojo, Azul, Amarillo, Verde en stock\n Cual necesitas?")
let unidades = Number(prompt (`indique cuantas unidades de hilo ${producto} desea comprar`))
let nuevoProducto = false
let resultado = precio


function crearVenta (producto, unidades){
    do{
        armadoVenta (producto, unidades)
        nuevoProducto = confirm ("desea agregar otro producto?")
        if (nuevoProducto) {
            producto = prompt("Tenemos Rojo, Azul, Amarillo, Verde\n Cual necesitas?")
            unidades = Number(prompt (`indique cuantos ${producto} desea comprar`))
            
        }
    }while (nuevoProducto)
    console.log("seleccionaste")
    console.log (hilos)
    precio(unidades)
    
}

function armadoVenta (producto, unidades){
    switch (producto.toLowerCase()) {
        case "rojo":
        hilos += `hilo encerado color rojo - unidades:${unidades}\n`  
        break;
        
        case "azul":
        hilos += `hilo encerado color azul - unidades:${unidades}\n `  
        break;
    
        case "amarillo":
        hilos += `hilo encerado color amarillo - unidades:${unidades} \n`  
        break;

        case "verde":
        hilos += `hilo encerado color verde - unidades:${unidades} \n`  
        break;

        default:
            alert("no tenemos stock de ese color")
            break;
    }
}

function precio ( unidades){
    if (unidades == 1){
        console.log(" el precio de cada hilo es de $50") 
    }else if ((unidades > 2) && (unidades <= 10)) {
        console.log ("el precio de cada hilo sera de $40") 
    }else if ((unidades > 11) && (unidades <= 40)){
        console.log ("el precio de cada hilo sera de $30")
    }else {
    console.log("no tenemos ese stock")
}
}

crearVenta(producto, unidades)






