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
        document.getElementById("titulos").innerHTML = `<h2>Cotizador el Barto</h2>`
        let presupuestofinal = document.createElement("div");
        presupuestofinal.className = "container";
        presupuestofinal.innerHTML =`<table class="table table-secondary w-50 mx-auto">
                                        <thead>
                                            <tr>
                                                <th class="text-center" scope="col" colspan="2">Cotizacion de ${this.nombre}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Suma Asegurada</th>
                                                <td>${this.sumaAsegurada}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Valor del premio en poliza semestral</th>
                                                <td>${premio}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Realizando financiacion en 6 cuotas</th>
                                                <td>${precioCuota}</td>
                                            </tr>
                                        </tbody>
                                     </table>`
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

localStorage.setItem("autos", JSON.stringify(misAutos));
const btnaceptar = document.getElementById("btnaceptar")
btnaceptar.addEventListener("click", iniciarCotizador)
function iniciarCotizador() {
    const nombre = document.getElementById("nombre").value;
    localStorage.setItem("nombre", nombre)
    const apellido = document.getElementById("apellido").value;
    localStorage.setItem("apellido", apellido)

    document.getElementById("dato1").remove();
    document.getElementById("dato").innerHTML = `<div class="input-group mb-3 w-75">
                                                    <input type="text" class="form-control" id="marca" placeholder="Ingresa marca de vehiculo disponible" aria-label="Username" aria-describedby="basic-addon1">
                                                 </div>`;
    document.getElementById("titulos").innerHTML = `<h1>Hola ${nombre} ${apellido}</h1>
                                                    <h3>Ingresa una Marca disponible: ${Object.keys(misAutos).join(", ")}</h3>`;
    btnaceptar.addEventListener("click", marcaClick)
}

function marcaClick() {
    const marca = document.getElementById("marca").value.toLowerCase();
    if(misAutos[marca]){
        const modelosDisponibles = misAutos[marca].map(auto => auto.nombre);
        document.getElementsByTagName("h3")[0].innerHTML = `Modelos cotizables de ${marca}: ${modelosDisponibles.join(', ')}`;
        document.getElementById("dato").innerHTML = `<div class="input-group mb-3 w-75">
                                                        <input type="text" class="form-control" id="modelo" placeholder="Ingresa modelo de vehiculo disponible" aria-label="Username" aria-describedby="basic-addon1">
                                                     </div>`;
        btnaceptar.addEventListener("click", modeloClick)
        function modeloClick() {
            const modelo = document.getElementById("modelo").value.toLowerCase();
            if(modelosDisponibles.find(mod => modelo === mod.toLowerCase())){
                misAutos[marca].filter(auto => auto.nombre.toLowerCase() === modelo)[0].cotizador();
                }else{
                    alert('Por favor ingrese una opción válida.');
                }
        }
    }else{
        alert('Por favor ingrese una opción válida. Los vehiculos cotizables son aquellos que se encuentran detallados');
    }
}

function clickSalida() {
    document.getElementById("presupuesto").remove();
    document.getElementById("titulos").innerHTML = `<h1>Gracias por utilizar cotizador El Barto, vuelva prontos!</h1>`
}