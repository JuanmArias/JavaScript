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
}

$('#btnaceptar').click(iniciarCotizador)
function iniciarCotizador() {
    const nombre = $('#nombre').val();
    localStorage.setItem('nombre', nombre)
    const apellido = $('#apellido').val();
    localStorage.setItem('apellido', apellido)

    $('#dato1').remove();
    $('#dato').remove();
    $('#titulos').empty();
    $('#titulos').append(`<h1>Hola ${nombre} ${apellido}</h1>`);
    $('#presupuesto').prepend(` <div class="row justify-content-evenly">
                                    <div class="cosa1">
                                        <select id="marcas">
                                            <option disabled selected>Elija la marca</option>
                                            <option value="volkswagen">Volkswagen</option>
                                            <option value="chevrolet">Chevrolet</option>
                                            <option value="fiat">Fiat</option>
                                        </select>
                                    </div>
                                    <div class="cosa1">
                                        <select id="modelos">
                                            <option disabled selected>Elija el modelo</option>
                                        </select>
                                    </div>
                                </div> `);
    $('#btnaceptar').unbind();
    $('#marcas').click(clickSelector);
}

function clickSelector(){
    const urlget = "https://my-json-server.typicode.com/JuanmArias/pruebaJSON/db"
    $.get(urlget, function (respuesta, estado) {
        if (estado === 'success') {
            const misAutos = respuesta;
            $('#marcas').change(() => {
                $('#marcas option:selected').each(function() {
                      const marca = $(this).val();
                  $('#modelos').html('<option disabled selected>Elija el modelo</option>');
                  for(const modelo of misAutos[marca]){
                      $('#modelos').append(`<option value="${modelo.nombre}">${modelo.nombre}</option>`);
                    }
                });
            })
        }
    })
}

// quiero que solamente cuando el elemento del array modelo este seleccionado 
// se active el btnaceptar con el presupuesto.


$('#btnaceptar').click(iniciarCotizador)//creo que deberia ir dentro de la funcion que arme para el btn


//en clickPresupuesto no se como referenciarlos en el template literal

function clickPresupuesto(){
        const premio = this.prima * this.tarifaOrigen;
        const precioCuota = premio / 6;
        $('#presupuesto').remove();
        $('#titulos').empty();
        $('#titulos').append("<h2>Cotizador el Barto</h2>");
        $('body').append(`<div class="container">
                            <table class="table table-secondary w-50 mx-auto">
                                <thead>
                                    <tr>
                                    
                                        <th class="text-center" scope="col" colspan="2">Cotizacion de ${nombre} </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Suma Asegurada </th>
                                        <td>${sumaAsegurada}</td>
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
                            </table>
                        </div>`)
};

function clickSalida() {
    $('#presupuesto').remove();
    document.getElementById('titulos').innerHTML = `<h1>Gracias por utilizar cotizador El Barto, vuelva prontos!</h1>`
}

//Con respecto a lo que mencionas, lo que tienes que hacer es tener variables donde guardes lo que tienes
// en el storage al principio en el ready, y consultar si esas variables estan vacias luego de traer 
 //la data del storage, si estan vacias entonces no muestras nada aun, si tienen datos entonces mostrarlos,
 // con un if puede ser, y luego, con cada dato quue el cliente ingrese, guardarlo en el storage inmediatamente
 // i cuando se recarga la pagina lo primero que hara es traer la data,si existe en las variables,
 //  entonces la muestra