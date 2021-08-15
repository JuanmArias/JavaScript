let apellido = prompt("Ingrese su Apellido");
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
}