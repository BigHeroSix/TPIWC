import EquipoResourceClient from "../boundary/EquipoResourceClient.js";
import OrdenTrabajoDetalleEstadoPasoResourceClient from "../boundary/OrdenTrabajoDetalleEstadoPasoResourceClient.js";

let equipo = new EquipoResourceClient();
let ordenTrabajoDetalleEstadoPaso = new OrdenTrabajoDetalleEstadoPasoResourceClient();

let arrayIdEquipoDetalle = [];
let arrayAllOTDEP = [];

Promise.all([customElements.whenDefined('vaadin-text-field'),
    customElements.whenDefined('vaadin-checkbox'),
    customElements.whenDefined('vaadin-item'),
    customElements.whenDefined('vaadin-button')
]).then(_ => {
    const divAllDetails = document.querySelector('#divTodosDetalles');
    const background = document.querySelector('background-seguimiento');

    //Para los botones
    var divButtons = document.createElement('div');
    divButtons.setAttribute('id', 'divBotones')

    //Datos que me mandara la otra interfaz
    let datos = location.href.split("?")[1];
    console.log(location.href);
    let datos2 = datos.split("&");
    let idEquipo =datos2[1].split("=")[1];
    let idOrdenTrabajo =datos2[0].split("=")[1];
    let divDetail;
    let divCheckbox;
    let item

    //Revisar archivo recibido
    var datosRecibidos = "datos";

    if (datosRecibidos != null) {
        equipo = new EquipoResourceClient();
        equipo.findDetalle(idEquipo)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                mostrarDetalle(data);
            })

        function mostrarDetalle(json) {

            for (let index = 0; index < json.length; index++) {

                //Trae JSON de DetalleEstadoPasoCompletado
                ordenTrabajoDetalleEstadoPaso.findDetalleEstadoPasoCompletado(json[index].numeroSerie)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                        //Crear cada div de detalle
                        divDetail = document.createElement('div');
                        divDetail.setAttribute('class', 'divDetalle');

                        item = document.createElement('vaadin-item');
                        let strong = document.createElement('strong');

                        let textDetail = document.createTextNode(json[index].numeroSerie);
                        console.log("numeroSerie " + index + "      " + json[index].numeroSerie);
                        strong.appendChild(textDetail);
                        item.appendChild(strong);

                        divDetail.appendChild(item);

                        mostrarDetalleEstadoPasoCompletado(data, json[index].numeroSerie);
                        divAllDetails.appendChild(divDetail);
                    })
            }
        }

        function mostrarDetalleEstadoPasoCompletado(jsonEstadoPaso, numeroSerie) {

            //Crear el divCheckbox
            divCheckbox = document.createElement('div');
            divCheckbox.setAttribute('class', 'divCheckbox');

            for (let index2 = 0; index2 < jsonEstadoPaso.length; index2++) {

                let checkbox = document.createElement('vaadin-checkbox');
                checkbox.setAttribute('id', numeroSerie + '-' + jsonEstadoPaso[index2].ordenTrabajoDetalleEstadoPasoPK.idOrdenTrabajoDetalle + '-' + jsonEstadoPaso[index2].ordenTrabajoDetalleEstadoPasoPK.idProcedimientoPaso);

                arrayIdEquipoDetalle.push(numeroSerie + '-' + jsonEstadoPaso[index2].ordenTrabajoDetalleEstadoPasoPK.idOrdenTrabajoDetalle + '-' + jsonEstadoPaso[index2].ordenTrabajoDetalleEstadoPasoPK.idProcedimientoPaso);

                arrayAllOTDEP.push(jsonEstadoPaso[index2]);

                if (jsonEstadoPaso[index2].completado == true) {
                    checkbox.setAttribute('checked', '');
                }
                let textCheckbox = document.createTextNode(jsonEstadoPaso[index2].procedimientoPaso.idPaso.nombre);
                checkbox.appendChild(textCheckbox);;
                divCheckbox.appendChild(checkbox);

                let br = document.createElement('br')
                divCheckbox.appendChild(br);

            }
            divDetail.appendChild(divCheckbox);
            divAllDetails.appendChild(divDetail);
        }

        
        console.log(idEquipo +"  hola");
        equipo.findById(idEquipo)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //Agregar value al text-field
                let textEquipo = document.querySelector('#textEquipo');
                textEquipo.setAttribute('value', '' + data.codigoCorrelativo);
            })


        let textOrden = document.querySelector('#textOrden');
        textOrden.setAttribute('value', '' + idOrdenTrabajo);

        //Boton Guardar
        let buttonSave = document.createElement('vaadin-button');
        buttonSave.setAttribute('theme', 'primary');
        buttonSave.setAttribute('id', 'btnGuardar');
        let textButtonSave = document.createTextNode('Guardar');
        buttonSave.appendChild(textButtonSave);
        divButtons.appendChild(buttonSave);

        //Agregando botones
        background.appendChild(divButtons);

        //Creando la notificacion
        let notification = document.createElement('vaadin-notification');
        notification.setAttribute('duration', '4000');
        notification.setAttribute('position', 'top-end');
        notification.setAttribute('id', 'notification');
        let template = document.createElement('template');
        template.innerHTML = "Se guardaron los cambios en los pasos de los detalles.";
        notification.appendChild(template);

        //Agregando notificacion
        background.appendChild(notification);

        //Para escuchar el evento click de Guardar
        let btnSaveObtenido = document.querySelector('#btnGuardar');

        btnSaveObtenido.addEventListener("click", () => {

            //Para hacer PUT
            for (let a = 0; a < arrayAllOTDEP.length; a++) {

                let checkboxPUT = document.getElementById(arrayIdEquipoDetalle[a]);

                arrayAllOTDEP[a].completado = checkboxPUT.getAttribute('aria-checked');

                fetch(ordenTrabajoDetalleEstadoPaso._url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(arrayAllOTDEP[a])
                }).then((data) => {

                    console.log(data.json());

                }).catch((error) => {
                    console.log(error);
                });

                console.log(arrayAllOTDEP[a].completado);
            }

            const notification = document.querySelector('#notification');
            notification.open();
            setTimeout(e=>{
                location.href="ordenTrabajo.html";
            },1000);

        });

    } else {

        let divDetail = document.createElement('div');
        divDetail.setAttribute('id', 'divDefault');
        let textDefault = document.createTextNode('No se encontro ningún detalle.');
        divDetail.appendChild(textDefault);

        divAllDetails.appendChild(divDetail);

        //Redifigir a la pantalla de las Ordenes de trabajo
    }

    //Boton Cancelar
    let buttonCancel = document.createElement('vaadin-button');
    buttonCancel.setAttribute('theme', 'success primary');
    buttonCancel.setAttribute('id', 'btnCancelar');
    let textButtonCancel = document.createTextNode('Cancelar');
    buttonCancel.appendChild(textButtonCancel);
    divButtons.appendChild(buttonCancel);

    //Agregando botones
    background.appendChild(divButtons);

});