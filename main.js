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

let marca = prompt("Bienvenido al Cotizador, Especificar marca de su vehiculo:VOLKSWAGEN, FIAT");

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
}