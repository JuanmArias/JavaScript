// Aqui iniciamos los eventos decidiendo si el presupuesto es nuevo o previamente cotizado
$('#btnaceptar').click(definirCotizacion);
function definirCotizacion(){
    if ($('#inpnuevo').is(':checked')) {
        pedirDatos();
        $('#btnaceptar').unbind();
        $('#btnaceptar').click(iniciarCotizador);
    } else {
        $('.radios__existente').append(`<input type="text" class="form-control" id="apellido" placeholder="Ingrese aqui su apellido" aria-label="Username" aria-describedby="basic-addon1">`);
        $('.radios__nuevo').remove();
        $('#btnaceptar').unbind();
        $('#btnaceptar').click(presupuestoExistente);

    }
}

// en caso de ser nuevo agregamos los input para solicitar sus datos
function pedirDatos(){
    $('#presupuestar').remove();
    $('#titulos').after(`<div id="presupuesto" class="container text-center">

    <div class="row justify-content-center" id="nombre" >
        <div class="input-group mb-3 w-75">
            <input type="text" class="form-control" id="inpnombre" placeholder="Ingrese aqui su Nombre" aria-label="Username" aria-describedby="basic-addon1">
        </div>
    </div>

    <div class="row justify-content-center" id="apellido" >
        <div class="input-group mb-3 w-75">
            <input type="text" class="form-control" id="inpapellido" placeholder="Ingrese aqui su apellido" aria-label="Username" aria-describedby="basic-addon1">
        </div>
    </div>
    </div>`);
}

// caso contrario procedemos a mostrar el presupuesto anteriormente echo
function presupuestoExistente(){
    const apellidoStorage = localStorage.getItem('apellido');
    if ($('#apellido').val() === apellidoStorage) {
            const presupuestoStorage = localStorage.getItem('presupuesto')
            const vehiculoCotizado = JSON.parse(presupuestoStorage);
            const premio = vehiculoCotizado.prima * vehiculoCotizado.tarifaOrigen;
            const precioCuota = premio / 6;
            $('#presupuestar').remove();
            $('.btninicial').remove();
            $('#titulos').empty();
            $('#titulos').append("<hr><h2>Cotizador 'El Barto' </h2><hr>");
            $('body').append(`<div class="container">
                                    <table class="table table-secondary w-50 mx-auto">
                                        <thead>
                                            <tr>
                                            
                                                <th class="text-center" scope="col" colspan="2">Cotizacion de vehiculo ${vehiculoCotizado.nombre} </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Suma Asegurada</th>
                                                <td>${vehiculoCotizado.sumaAsegurada}</td>
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
                                </div>`);
    }
}

// guardamos los datos en el storage y damos visualizacion a los select para elegir el vehiculo
function iniciarCotizador() {
    const nombre = $('#inpnombre').val();
    localStorage.setItem('nombre', nombre)
    const apellido = $('#inpapellido').val();
    localStorage.setItem('apellido', apellido)

    $('#nombre').remove();
    $('#apellido').remove();
    $('#titulos').empty();
    $('#titulos').append(`<hr><h1>${nombre} ${apellido}: proceda a eligir su vehiculo</h1><hr>`);
    $('#presupuesto').prepend(` <div class="row justify-content-center">
                                    <div class="selectores">
                                        <select id="marcas">
                                            <option disabled selected>Elija la marca</option>
                                            <option value="volkswagen">Volkswagen</option>
                                            <option value="chevrolet">Chevrolet</option>
                                            <option value="fiat">Fiat</option>
                                        </select>
                                    </div>
                                    <div class="selectores">
                                        <select id="modelos">
                                            <option disabled selected>Elija el modelo</option>
                                        </select>
                                    </div>
                                </div> `);
    $('#btnaceptar').unbind();
    $('#marcas').click(cargarSelectores);
}

// aqui cargamos los selectores con la opcion elegida y cargamos al boton el evento presupuesto
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

//damos visualizacion al presupuesto del vehiculo
function presupuesto(){
    const urlget = "https://my-json-server.typicode.com/JuanmArias/pruebaJSON/db"
    $.get(urlget, function (respuesta, estado) {
        if (estado === 'success') {
            const misAutos = respuesta;
            const marca = $('#marcas option:selected').val();
            const modelo = $('#modelos option:selected').val();
            const autoCotizado = misAutos[marca].filter(auto => auto.nombre === modelo)[0];
            localStorage.setItem('presupuesto', JSON.stringify(autoCotizado));
            const premio = autoCotizado.prima * autoCotizado.tarifaOrigen;
            const precioCuota = premio / 6;
            $('#presupuesto').remove();
            $('.btninicial').remove();
            $('#titulos').empty();
            $('#titulos').append("<hr><h2>Cotizador 'el Barto' </h2><hr>");
            $('body').append(`<div class="container">
                                <table class="table table-secondary w-50 mx-auto">
                                    <thead>
                                        <tr>
                                        
                                            <th class="text-center" scope="col" colspan="2">Cotizacion de vehiculo ${marca} ${autoCotizado.nombre} </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Suma Asegurada</th>
                                            <td>${autoCotizado.sumaAsegurada}</td>
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
                            </div>`);
        }
    })
}

//Finalizar el Cotizador en cualquier instancia
function clickSalida() {
    $('body').empty();
    $('body').append('<h1 class="text-center">Gracias por utilizar cotizador El Barto, vuelva prontos!</h1>');
}