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
        document.getElementById("presupuesto").remove();        
        let presupuestofinal = document.createElement("div");
        presupuestofinal.className = "container text-center";
        presupuestofinal.innerHTML =` <h2>Cotizacion de ${this.nombre} </h2>
                            <h3>Suma Asegurada:${this.sumaAsegurada} </h3>
                            <h3>Valor del premio en poliza semestral:${premio} </h3>
                            <h3>Realizando financiacion en 6 cuotas ${precioCuota}</h3> `
        document.body.appendChild(presupuestofinal);
    
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
const salir = document.getElementById("salir1");
salir.addEventListener("click", clickSalida)
function clickSalida() {
    document.getElementById("dato1").remove();
    document.getElementById("dato2").remove();
    document.getElementById("dato3").remove();
    document.getElementById("titulos").innerHTML = `<h1 class="w-75">Gracias por utilizar cotizador El Barto, vuelva prontos!</h1>`
}
const aceptar = document.getElementById("aceptar1");
aceptar.addEventListener("click", respuestaClick)
function respuestaClick() {
    const nombre = document.getElementById("input1").value;
    localStorage.setItem("nombre", nombre)
    const localidad = document.getElementById("input2").value;
    localStorage.setItem("localidad", localidad)

    document.getElementById("dato2").remove();
    document.getElementById("dato1").innerHTML = `<div class="input-group mb-3 w-75">
                                                    <span class="input-group-text" id="basic-addon1 texto1">Marca</span>
                                                    <input type="text" class="form-control" id="input3" placeholder="Ingrese Marca de vehiculo disponible" aria-label="Username" aria-describedby="basic-addon1">
                                                 </div>`;
    document.getElementById("titulos").appendChild(document.createElement("h3")).innerHTML=`Marcas disponibles: ${Object.keys(misAutos).join(", ")}`;
    aceptar.addEventListener("click", marcaClick)
}

function marcaClick() {
    const marca = document.getElementById("input3").value.toLowerCase();
    if(misAutos[marca]){
        const modelosDisponibles = misAutos[marca].map(auto => auto.nombre);
        document.getElementsByTagName("h3")[0].innerHTML = `Modelos cotizables de ${marca}: ${modelosDisponibles.join(', ')}`;
        document.getElementById("dato1").innerHTML = `<div class="input-group mb-3 w-75">
                                                        <span class="input-group-text" id="basic-addon1 texto1">Modelo</span>
                                                        <input type="text" class="form-control" id="input4" placeholder="Ingrese Modelo de vehiculo disponible" aria-label="Username" aria-describedby="basic-addon1">
                                                     </div>`;
        aceptar.addEventListener("click", modeloClick)
        function modeloClick() {
            const modelo = document.getElementById("input4").value.toLowerCase();                                             
            if(modelosDisponibles.find(mod => modelo === mod.toLowerCase())){
            misAutos[marca].filter(auto => auto.nombre.toLowerCase() === modelo)[0].cotizador();
            }else{
                alert('Por favor ingrese una opción válida.');
            }
        }
        }else{
            alert('Por favor ingrese una opción válida. Los vehiculos cotizables son aquellos que se detallan en la lista');
        }
}