let listaDePacientes = [{
    nombre: "Carlos",
    hora: 14
}, {
    nombre: "José",
    hora: 15
}, {
    nombre: "Martín",
    hora: 16
}, {
    nombre: "Federico",
    hora: 17
}];

listaDePacientes.push({
    nombre: "Juan Manuel",
    hora: 13
})
//console.log("pacientes: " + listaDePacientes)

listaDePacientes.unshift({
    nombre: "Fabián",
    hora: 12
});
//console.log(listaDePacientes)
//console.table(listaDePacientes)

//listaDePacientes.pop();
//console.log(listaDePacientes)

//listaDePacientes.splice(1, 2);
//console.log(listaDePacientes)


//método join()
function verSoloNombres(arr){
    const nombres = []
    for (const paciente of listaDePacientes){
        nombres.push(paciente.nombre);
    }
    
    console.log(nombres.join(", "))
}
//verSoloNombres(listaDePacientes)

//otra forma de ver solo nombres, con el método forEach()
const verNombresConForEach = ()=>{
    listaDePacientes.forEach((element)=> console.log(element["nombre"]))
}
//verNombresConForEach()

//método concat()
const nuevosPacientes = [{
    nombre: "Mariano",
    hora: 14
}, {
    nombre: "Roberto",
    hora: 19
}]
//listaDePacientes = listaDePacientes.concat(nuevosPacientes);
//console.log(listaDePacientes)

//método slice()
const recorteDeLista = listaDePacientes.slice(2, 5);
//console.log(recorteDeLista)


//método indexOf()
const listaSimplificada = ["Fabián", "Carlos", "José", "Martín", "Federico", "Juan Manuel"]
const posicionMartin = listaSimplificada.indexOf('Martín')
const posicionRoberto = listaDePacientes.indexOf("Roberto")
//console.log(posicionMartin)
//console.log(posicionRoberto)

//método includes()
//console.log(listaSimplificada.includes("Martín"));
//console.log(listaSimplificada.includes("Roberto"));

//método reverse()
const listaAlReves = listaSimplificada; 
//console.log(listaAlReves.reverse())


