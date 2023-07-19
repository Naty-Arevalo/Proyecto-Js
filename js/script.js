// let nombre = (prompt("escriba su nombre aqui").toLowerCase())
// alert ("bienvenido/a!" + " " + nombre + " "+ "Vendemos hilos encerados para el artesano, queres comprar? " )
// let hilos = ""
// let producto = prompt("Tenemos el color Rojo, Azul, Amarillo, Verde en stock\n Cual necesitas?")
// let unidades = Number(prompt (`indique cuantas unidades de hilo ${producto} desea comprar`))
// let nuevoProducto = false
// let resultado = precio


// function crearVenta (producto, unidades){
//     do{
//         armadoVenta (producto, unidades)
//         nuevoProducto = confirm ("desea agregar otro producto?")
//         if (nuevoProducto) {
//             producto = prompt("Tenemos Rojo, Azul, Amarillo, Verde\n Cual necesitas?")
//             unidades = Number(prompt (`indique cuantos ${producto} desea comprar`))
            
//         }
//     }while (nuevoProducto)
//     console.log("seleccionaste")
//     console.log (hilos)
//     precio(unidades)
    
// }

// function armadoVenta (producto, unidades){
//     switch (producto.toLowerCase()) {
//         case "rojo":
//         hilos += `hilo encerado color rojo - unidades:${unidades}\n`  
//         break;
        
//         case "azul":
//         hilos += `hilo encerado color azul - unidades:${unidades}\n `  
//         break;
    
//         case "amarillo":
//         hilos += `hilo encerado color amarillo - unidades:${unidades} \n`  
//         break;

//         case "verde":
//         hilos += `hilo encerado color verde - unidades:${unidades} \n`  
//         break;

//         default:
//             alert("no tenemos stock de ese color")
//             break;
//     }
// }

// function precio ( unidades){
//     if (unidades == 1){
//         console.log(" el precio de cada hilo es de $50") 
//     }else if ((unidades > 2) && (unidades <= 10)) {
//         console.log ("el precio de cada hilo sera de $40") 
//     }else if ((unidades > 11) && (unidades <= 40)){
//         console.log ("el precio de cada hilo sera de $30")
//     }else {
//     console.log("no tenemos ese stock")
// }
// }

// crearVenta(producto, unidades)

const productos = [
    {
        nombre : "Albahaca",
        descripcion : "Plantines de semillas agroecologicas",
        precio : 300
    },
    {
        nombre : "Menta",
        descripcion : "Plantines de semillas agroecologicas",
        precio : 250
    },
    {
        nombre : "Tomillo",
        descripcion : "Plantines de semillas agroecologicas",
        precio : 350
    },
    {
        nombre : "Romero",
        descripcion : "Plantines de semillas agroecologicas",
        precio : 350
    },
    {
        nombre : "Oregano",
        descripcion : "Plantines de semillas agroecologicas",
        precio : 250
    },
    {
        nombre : "Cilantro",
        descripcion : "Plantines de semillas agroecologicas",
        precio : 350
    },
    {
        nombre : "Salvia",
        descripcion : "Plantines de semillas agroecologicas",
        precio : 350
    },
    {
        nombre : "Cibullete",
        descripcion : "Plantines de semillas agroecologicas",
        precio : 300
    },
    {
        nombre : "Perejil",
        descripcion : "Plantines de semillas agroecologicas",
        precio : 250
    }    
]


let nombre = prompt(`Bienvenido/a a Vivero Verde Paisaje!, indique su nombre:`)
    alert(`Bienvenido/a! ${nombre} , Que aromática deseas comprar?`)
     

productos.forEach((producto) =>{
    console.log(producto.nombre)
})
    
let producto = " "
let carrito = []

function buscarProducto() {
    let elegirProducto = prompt(`Que aromática quieres comprar?`)
    producto = productos.find((aromatica) => aromatica.nombre.toLowerCase() == elegirProducto.toLowerCase())
}


function agregarCarrito(){
    if (producto){
        let cantidad = Number(prompt(`Cuantas unidades desea?`))
        carrito.push({
            producto: producto.nombre,
            descripcion : producto.descripcion,
            cantidad: cantidad,
            subtotal : producto.precio * cantidad
        })
    }else{
        alert(`no contamos con esa aromática, indique otra`)
    }

    }

function ConfirmarCarrito(){
    while (true){
        buscarProducto()
        agregarCarrito()

        if(!confirm (`desea agregar algun otro plantín?`)){
        break;
        }
    }
}

ConfirmarCarrito()


let total = 0
function CalcularTotal(){
    
    console.log(`Plantines a comprar: `)
    for (let item of carrito){
        total += item.subtotal
        console.log(`- ${item.cantidad} unidades de ${item.producto} ,${item.descripcion} : $ ${item.subtotal}`)
   }
    console.log (`total a pagar: $ ${total}`)
}

CalcularTotal()

function descuentos(){
    let descuento = total
    let descuento10 = descuento - (total * 0.10)
    if (total >= 2500) {
        console.log(`Tu compra supera los $2500! tenes un descuento del 10%, tu pago será de : $${descuento10}`)
          
    }else{
        console.log(`No tenes descuentos. Gracias por tu compra!`)
        
    }
}

descuentos()