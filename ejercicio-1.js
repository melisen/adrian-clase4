//ARRAY: ente corchetes, lista de elementos separados por comas
//en este caso, precios sueltos de artículos
const productosEnLaCaja = [100, 130, 185, 160, 120]
//guardo la longitud de la lista
let cuantosProductos = productosEnLaCaja.length;
//uso una variable global para acumular el total de lo que voy sumando en el ciclo
let total = 0; 


const sumarPrecios = (listaProd) =>{
    for(i=1; i<= cuantosProductos; i++){
        total += listaProd[i-1]
    }
    return total
}


const aplicarDesc20 = (valor) =>{
    if(valor>1000){
        let valorDesc = valor - valor*0.2
        return valorDesc
    }else{
        return valor
    }
    
}

console.log( aplicarDesc20(sumarPrecios(productosEnLaCaja)) )
