/*EJERCICIO 3 - Espera
En un consultorio, calcular tiempo de espera según cantidad de turnos asignados sin atender.
Debemos conocer la cantidad de turnos que están en espera y el tiempo de espera promedio de cada uno.
*/
//DATOS
let tiempoProm = 15;
let pacientesQueLlegaronAlConsultorio = 15;
let turnosAtendidos = 10;
let turnosEnEspera = pacientesQueLlegaronAlConsultorio - turnosAtendidos



function tiempoDeEspera(){
    return (turnosEnEspera * tiempoProm) / 60;
}

let resultado = tiempoDeEspera()

//console.log("Su tiempo de espera es: " + resultado + " hs")

//Array --> conjunto
let lista = ["Carlos", "José", "Martín", "Federico"];

//objeto --> cada objeto es un paciente
let paciente1 ={
    nombre: "Carlos",
    hora: 14
}
let paciente2={
    nombre: "José",
    hora: 15
}
let paciente3 = {
    nombre: "Martín",
    hora: 16
}
let paciente4 = {
    nombre: "Federico",
    hora: 17
}

//Array de objetos
let listaDePacientes = [paciente1, paciente2, paciente3, paciente4]


let digaSuNombre = prompt("Ingrese su nombre")

//0  1   2   3  
//1° 2°  3° 

function mostrarPacientes(){
    for(let i = 0; i<=3; i++){
        let persona = listaDePacientes[i]
        
        if(persona.nombre === digaSuNombre){
            alert("Su turno es a las " + persona.hora)
            console.log("Su turno es a las " + persona.hora + "hs")
        }else{
            alert("Usted no tiene turno")
            alert("Como excepción, le asignamos un turno a las 18 hs")
        }
        
    } 
}

mostrarPacientes()

