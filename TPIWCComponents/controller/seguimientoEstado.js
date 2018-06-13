import EquipoResourceClient from "../boundary/EquipoResourceClient.js";
import OrdenTrabajoDetalleEstadoPasoResourceClient from "../boundary/OrdenTrabajoDetalleEstadoPasoResourceClient.js";

let equipo = new EquipoResourceClient();
let ordenTrabajoDetalleEstadoPaso = new OrdenTrabajoDetalleEstadoPasoResourceClient();

Promise.all([customElements.whenDefined('vaadin-text-field'),
    customElements.whenDefined('vaadin-checkbox'),
    customElements.whenDefined('vaadin-item'),
    customElements.whenDefined('vaadin-button')
]).then(_ => {

    console.log("DOM");

    const divAllDetails = document.querySelector('#divTodosDetalles');
    const background = document.querySelector('background-seguimiento');

    //Para los botones
    var divButtons = document.createElement('div');
    divButtons.setAttribute('id', 'divBotones')

    //Revisar archivo recibido
    var datosRecibidos = "datos";

    //Datos que me mandara la otra interfaz
    var idEquipo = 1;
    var idOrdenTrabajo = 1;

    let divDetail;
    let divCheckbox;
    let item

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

                    mostrarDetalleEstadoPasoCompletado(data);
                    divAllDetails.appendChild(divDetail);
                })
        }
    }

    function mostrarDetalleEstadoPasoCompletado(jsonEstadoPaso) {

        //Crear el divCheckbox
        divCheckbox = document.createElement('div');
        divCheckbox.setAttribute('class', 'divCheckbox');

        for (let index2 = 0; index2 < jsonEstadoPaso.length; index2++) {

            let checkbox = document.createElement('vaadin-checkbox');
            if (jsonEstadoPaso[index2].completado == true) {
                checkbox.setAttribute('checked', '');
            }
            let textCheckbox = document.createTextNode(jsonEstadoPaso[index2].nombrePaso);
            checkbox.appendChild(textCheckbox);;
            divCheckbox.appendChild(checkbox);

            let br = document.createElement('br')
            divCheckbox.appendChild(br);

        }
        divDetail.appendChild(divCheckbox);
        divAllDetails.appendChild(divDetail);
    }

    if (datosRecibidos != null) {
        //Agregar value al text-field
        let textEquipo = document.querySelector('#textEquipo');
        textEquipo.setAttribute('value', '' + idEquipo);

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
        //textTemplate = document.createTextNode('Se guardaron los cambios en los pasos de los detalles.');
        //template.appendChild(textTemplate);
        template.innerHTML = "Se guardaron los cambios en los pasos de los detalles.";
        notification.appendChild(template);

        //Agregando notificacion
        background.appendChild(notification);

        //Para escuchar el evento click de Guardar
        let btnSaveObtenido = document.querySelector('#btnGuardar');
        btnSaveObtenido.addEventListener("click", () => {
            const notification = document.querySelector('#notification');
            notification.open();
        });

        console.log("Final");

    } else {

        let divDetail = document.createElement('div');
        divDetail.setAttribute('id', 'divDefault');
        let textDefault = document.createTextNode('No se encontro ningún detalle.');
        divDetail.appendChild(textDefault);

        divAllDetails.appendChild(divDetail);

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