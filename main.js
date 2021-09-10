//creacion de clase AUTO
class Auto {
    nombre;
    sumaAsegurada;
    tarifaOrigen;
    prima;

    constructor(nombre, sumaAsegurada, tarifaOrigen, prima){
        this.nombre = nombre;
        this.sumaAsegurada = sumaAsegurada;
        this.tarifaOrigen = tarifaOrigen;
        this.prima = prima;
    }

    //funcion que deriva en el precio final
    cotizador(){
        const premio = this.prima * this.tarifaOrigen;
        const precioCuota = premio / 6;        
        let titulo = document.createElement("div");
        titulo.innerHTML =` <h2>Cotizacion de ${marca} ${modelo}</h2>
                            <h3>Suma Asegurada: ${this.sumaAsegurada}</h3>
                            <h3>Valor del premio en poliza semestral: ${premio}</h3>
                            <h3>Realizando financiacion en 6 cuotas: ${precioCuota}</h3> `
        document.body.appendChild(titulo);
    
    }

}
 // Objeto de Arrays que contiene Auto dividido por sus marcas
const misAutos = {
    volkswagen: [
        new Auto("Gol", 700000, 0.28, 20000),
        new Auto("Scirocco", 900000, 0.60, 25000),
        new Auto("Fox", 700000, 0.28, 20000),
        new Auto("Saveiro", 900000, 0.60, 25000)
    ],
    chevrolet: [
        new Auto("Classic", 700000, 0.28, 20000),
        new Auto("Corsa", 900000, 0.60, 25000),
        new Auto("Sonic", 700000, 0.28, 20000),
        new Auto("Vectra", 900000, 0.60, 25000)
    ],
    fiat: [
        new Auto("Palio", 500000, 0.20, 18000),
        new Auto("Chronos", 900000, 0.60, 25000),
        new Auto("Fiorino", 700000, 0.28, 20000),
        new Auto("Siena", 350000, 0.10, 16000)
    ]
}

/* //interactuamos mediante prompt para determinar que Auto quiere cotizar.
let marca = prompt("Bienvenido al Cotizador, Especificar marca de su vehiculo: VOLKSWAGEN, FIAT, CHEVROLET\nPARA SALIR INGRESE 'ESC'").toLowerCase();
while(marca != "ESC"){
    if(misAutos[marca]){
        const modelosDisponibles = misAutos[marca].map(auto => auto.nombre);
        modelo = prompt(`AUTOMOTORES. Especificar modelo de ${marca}: ${modelosDisponibles.join(', ')}`).toLowerCase();
        if(modelosDisponibles.find(mod => modelo === mod.toLowerCase())){
            misAutos[marca].filter(auto => auto.nombre.toLowerCase() === modelo)[0].cotizador();
        }else{
            alert('Por favor ingrese una opción válida.');
        }
    }else{
        alert('Por favor ingrese una opción válida. Los vehiculos cotizables son aquellos que se detallan en la lista');
    }
    marca = prompt(" Ingrese 'ESC' para visualizar su presupuesto , en caso de error ingrese marca correcta: Volkswagen, Fiat o Chevrolet ");
} */

const aceptar = document.getElementById("aceptar1");
aceptar.addEventListener("click", respuestaClick)
function respuestaClick() {
    let nombre = document.getElementById("nombre1").value;
    localStorage.setItem("nombre", nombre)
    let localidad = document.getElementById("localidad1").value;
    localStorage.setItem("localidad", localidad)

    let cambiazo = document.getElementById("presupuesto");
    cambiazo.parentNode.removeChild(cambiazo);

    let titulo = document.createElement("div");
    titulo.className = "container text-center";
        titulo.innerHTML =` <h1>Bienvenido al Cotizador del Barto</h1>
                            <h2>Marcas disponibles de cotizacion: ${Object.keys(misAutos).join(", ")}</h2>
                            
                            <div class="row justify-content-center">
                                <div class="input-group mb-3 w-75">
                                    <span class="input-group-text" id="basic-addon1">Marca</span>
                                    <input type="text" class="form-control" id="marca1" placeholder="Ingrese aqui la marca del vehiculo" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                            </div> 
                            
                            <div class="d-grid gap-2 d-md-block">
                                <button class="btn btn-primary btn-lg" id="siguiente1" type="button">Siguiente</button>
                                <button class="btn btn-primary btn-lg" type="button">Cancelar</button>
                            </div>`
        document.body.appendChild(titulo);
}

let marca = document.getElementById("marca1").value;
while(marca != "ESC"){
    if(misAutos[marca]){
        
        const modelosDisponibles = misAutos[marca].map(auto => auto.nombre);
        modelo = prompt(`AUTOMOTORES. Especificar modelo de ${marca}: ${modelosDisponibles.join(', ')}`).toLowerCase();
        
        
        if(modelosDisponibles.find(mod => modelo === mod.toLowerCase())){
            misAutos[marca].filter(auto => auto.nombre.toLowerCase() === modelo)[0].cotizador();
        }else{
            alert('Por favor ingrese una opción válida.');
        }
    }else{
        alert('Por favor ingrese una opción válida. Los vehiculos cotizables son aquellos que se detallan en la lista');
    }
    marca = prompt(" Ingrese 'ESC' para visualizar su presupuesto , en caso de error ingrese marca correcta: Volkswagen, Fiat o Chevrolet ");
}