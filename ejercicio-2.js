let precioProducto = 120

const calcularCuotas = (precio, cantCuotas) =>{   
    if(cantCuotas === 6){
        let cuota = (precio/cantCuotas) * 1.05
        let total = cuota * 6
        console.log("6 cuotas de $" + cuota + " Valor final: $" + total)
    }else if(cantCuotas === 12){
        let cuota = (precio/cantCuotas) * 1.07
        let total = cuota * 12
        console.log("12 cuotas de $" + cuota + " Valor final: $" + total)
    }else{
        console.log("debe ingresar 6 o 12 cuotas")
    }
}

calcularCuotas(precioProducto, 12)