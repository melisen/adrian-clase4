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
//ejecutamos la función y guardamos lo que nos devuelve en la variable "resultado"
//lo que la función devuelve es el resultado de la instrucción de la línea donde está "return"
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
//INDEX:
//0  1   2   3  
//ORDEN EN QUE LO LEEMOS:
//1° 2°  3°  4°

//Entre la línea 54 y la 66 está declarada la función mostrarPacientes()
//contiene un bucle que recorre el array listaDePacientes de 1 en 1 mediante el contador (index) del bucle
//En cada iteración tenemos un condicional que analiza si el nombre ingresado mediante digaSuNombre es igual al valor de la propiedad "nombre" del objeto (paciente) analizado en esa iteración
//Si el nombre ingresado coincide con uno de los nombres de pacientes registrados, entonces devuelve un mensaje de salida con la hora de su turno
//Si el paciente no está registrado (no existe en el array) entonces le avisa que no tiene turno pero que como excepción se lo atenderá en determinado sobreturno.
//Luego en la línea 73 tenemos la "llamada" o "invocación" de la función. Si no se llama a la función, ésta no se ejecuta, sólo queda declarada más arriba pero sin hacer ninguna acción.

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

