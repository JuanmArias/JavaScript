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
        const tarifa = x => x * this.tarifaOrigen;
        const division = x => x / 6;
        let premio = tarifa(this.prima)
        let precioCuota = division(premio)
        alert("Tu Vehiculo:" + this.nombre + " suma asegurada:" + this.sumaAsegurada + "el valor de la poliza semestral es de" + premio + "realizado en 6 cuotas quedaria en " + precioCuota)
    }

}

const gol = new Auto("Gol", 700000, 0.28, 20000);
const scirocco = new Auto("Scirocco", 900000, 0.60, 25000)
const palio = new Auto("Palio", 500000, 0.20, 18000)
const siena = new Auto("Siena", 350000, 0.10, 16000)

let marca = prompt("Bienvenido al Cotizador, Especificar marca de su vehiculo: VOLKSWAGEN, FIAT\nPARA SALIR INGRESE 'ESC'");
while(marca != "ESC"){
    switch (marca) {
        case "volkswagen":
            modelo = prompt("AUTOMOTORES. Especificar modelo de volswagen:GOL, SCIROCCO");
            if(modelo == "gol"){ 
                gol.cotizador();
            }else if(modelo == "scirocco"){
                scirocco.cotizador();
            }else{
                alert('Por favor ingrese una opción válida.');
            }
            break;
    
        case "fiat":
            modelo = prompt("AUTOMOTORES. Especificar modelo de fiat: PALIO, SIENA");
            if(modelo == "palio"){
                palio.cotizador();
            }
            else if(modelo == "siena"){
                siena.cotizador();
            }else{
                alert('Por favor ingrese una opción válida.');
            }
            break;
        default:
            alert('Por favor ingrese una opción válida. Los vehiculos cotizables son aquellos que se detallan en la lista');
            break;
    }

    marca = prompt("Bienvenido al Cotizador, Especificar marca de su vehiculo: VOLKSWAGEN, FIAT\nPARA SALIR INGRESE 'ESC'");
}
