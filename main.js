/*  let apellido = prompt("Ingrese su Apellido");
let nombre = prompt('Ingrese su Nombre');
let salida = "Bienvenido" + " " + nombre + " " + apellido + " " + "que disfrute del viaje!";
alert(salida);

alert("vamos a jugar un juego.");
let asientos = prompt("Un dia messi estaba aburrido y mando a construir una nave espacial con 5 filas de asientos y 3 asientos por fila para ir hasta marte. ?Cuantas personas podran ir?");
if(asientos == 15){
    alert("excelente, 14 personas iran con messi");
}else{
    alert("no sabe multiplicar por 1 cifra"  + " " + nombre + " " + "jajaj");
}
let plata = prompt("OK, ya sabemos cuantas personas van a ir, ahora... ?cuanto dinero minimo tendran que aportar a la causa en conjunto sabiendo que cada asiento cuesta $200 patacones?");
if((plata >= 3000) || (plata =="tres mil")){
    alert("te ganaste ser el copiloto de messi campeon");
}else{
    alert( apellido + ", te falta la mostaza nomas compa");
}  */

//----------------------------------------------
//----------------------------------------------

/* let marca = prompt("Bienvenido al Cotizador, Especificar marca de su vehiculo:VOLKSWAGEN, FIAT");

if(marca == "volkswagen"){
    modelo = prompt("AUTOMOTORES. Especificar modelo de volswagen:GOL, FOX");
                
        if(modelo == "gol"){
                    let precioProducto  = 700000;
                    let precioDescuento = 1000;  
                    tazacion(precioProducto, precioDescuento);
                }
                else(modelo == "fox");{
                    let precioProducto  = 500000;
                    let precioDescuento = 1000;  
                    tazacion(precioProducto, precioDescuento);
                }
}else if(marca == "fiat"){
    modelo = prompt("AUTOMOTORES. Especificar modelo de fiat:PALIO, SIENA");
                
        if(modelo == "palio"){
                    let precioProducto  = 300000;
                    let precioDescuento = 1000;  
                    tazacion(precioProducto, precioDescuento);
                }
                else(modelo == "siena");{
                    let precioProducto  = 200000;
                    let precioDescuento = 1000;  
                    tazacion(precioProducto, precioDescuento);
                }
}

function tazacion(precioProducto, precioDescuento) {
    const suma  = (a,b) => a + b;
    const resta = (a,b) => a - b;
    const taza   = x => x * 0.40;
    const division = x => x / 6;
    let nuevoPrecio = resta(suma(precioProducto, taza(precioProducto)), precioDescuento); 
    let precioCuota = division(nuevoPrecio)
    alert("El precio de tu poliza semestral es de " + nuevoPrecio + ", " + "echo en un plan de 6 cuotas el precio seria de" + precioCuota)
} */

//----------------------------------------------
//----------------------------------------------


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
        new Auto("Scirocco", 900000, 0.60, 25000)
    ],
    fiat: [
        new Auto("Palio", 500000, 0.20, 18000),
        new Auto("Siena", 350000, 0.10, 16000)
    ]
}

//interactuamos mediante prompt para determinar que Auto quiere cotizar.
let marca = prompt("Bienvenido al Cotizador, Especificar marca de su vehiculo: VOLKSWAGEN, FIAT\nPARA SALIR INGRESE 'ESC'").toLowerCase();
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
    marca = prompt(" Ingrese 'ESC' para visualizar su presupuesto , en caso de error ingrese marca correcta: Volkswagen o Fiat ");
}