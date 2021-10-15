$('#btnaceptar').click(switch1);
function switch1(){
    if ($('#innuevo').is(':checked')) {
        pedirDatos();
        $('#btnaceptar').unbind();
        $('#btnaceptar').click(iniciarCotizador);
    } else {
        presupuestoExistente();
        $('.radios__nuevo').remove();
        $('#btnaceptar').unbind();
        $('#btnaceptar').click(presupuesto);

    }
}

function pedirDatos(){
    $('#presupuestar').remove();
    $('#titulos').after(`<div id="presupuesto" class="container text-center">

    <div class="row justify-content-center" id="dato" >
        <div class="input-group mb-3 w-75">
            <input type="text" class="form-control" id="nombre" placeholder="Ingrese aqui su Nombre" aria-label="Username" aria-describedby="basic-addon1">
        </div>
    </div>

    <div class="row justify-content-center" id="dato1" >
        <div class="input-group mb-3 w-75">
            <input type="text" class="form-control" id="apellido" placeholder="Ingrese aqui su apellido" aria-label="Username" aria-describedby="basic-addon1">
        </div>
    </div>
    </div>`);
}

function presupuestoExistente(){
    $('.radios__existente').append(`<input type="text" class="form-control" id="apellido1" placeholder="Ingrese aqui su apellido" aria-label="Username" aria-describedby="basic-addon1">`);
    $('#btnaceptar').unbind();
}

function iniciarCotizador() {
    const nombre = $('#nombre').val();
    localStorage.setItem('nombre', nombre)
    const apellido = $('#apellido').val();
    localStorage.setItem('apellido', apellido)

    $('#dato1').remove();
    $('#dato').remove();
    $('#titulos').empty();
    $('#titulos').append(`<h1>Hola ${nombre} ${apellido}</h1>`);
    $('#presupuesto').prepend(` <div class="row justify-content-center">
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
    $('#marcas').click(cargarSelectores);
}

function cargarSelectores(){
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
            $('#modelos').change(() => {
                if ($('#modelos option:selected').val()) {
                    $('#btnaceptar').click(presupuesto);
                    
                }
            })
        }
    })
}

//en clickPresupuesto no se como referenciarlos en el template literal

function presupuesto(){
    const urlget = "https://my-json-server.typicode.com/JuanmArias/pruebaJSON/db"
    $.get(urlget, function (respuesta, estado) {
        if (estado === 'success') {
            const misAutos = respuesta;
            const marca = $('#marcas option:selected').val();
            const modelo = $('#modelos option:selected').val();
    
            $('#presupuesto').remove();
            $('#titulos').empty();
            $('#titulos').append("<h2>Cotizador el Barto</h2>");
            $('body').append(`<div class="container">
                                <table class="table table-secondary w-50 mx-auto">
                                    <thead>
                                        <tr>
                                        
                                            <th class="text-center" scope="col" colspan="2">Cotizacion de ${auto.nombre}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Suma Asegurada </th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Valor del premio en poliza semestral</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Realizando financiacion en 6 cuotas</th>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>`);
        }
    })
}
    /*     console.log(modelo);       
        //const premio = this.prima * this.tarifaOrigen;
        //const precioCuota = premio / 6;
        $('#presupuesto').remove();
        $('#titulos').empty();
        $('#titulos').append("<h2>Cotizador el Barto</h2>");
        $('body').append(`<div class="container">
                            <table class="table table-secondary w-50 mx-auto">
                                <thead>
                                    <tr>
                                    
                                        <th class="text-center" scope="col" colspan="2">Cotizacion de ${modelo}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Suma Asegurada </th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Valor del premio en poliza semestral</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Realizando financiacion en 6 cuotas</th>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>`); */


function clickSalida() {
    $('body').empty();
    $('body').append('<h1 class="text-center">Gracias por utilizar cotizador El Barto, vuelva prontos!</h1>');
}

//Con respecto a lo que mencionas, lo que tienes que hacer es tener variables donde guardes lo que tienes
// en el storage al principio en el ready, y consultar si esas variables estan vacias luego de traer 
 //la data del storage, si estan vacias entonces no muestras nada aun, si tienen datos entonces mostrarlos,
 // con un if puede ser, y luego, con cada dato quue el cliente ingrese, guardarlo en el storage inmediatamente
 // i cuando se recarga la pagina lo primero que hara es traer la data,si existe en las variables,
 //  entonces la muestra