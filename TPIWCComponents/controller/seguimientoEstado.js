customElements.whenDefined('vaadin-text-field').then(_ => {

    const divAllDetails = document.querySelector('#divTodosDetalles');
    const background = document.querySelector('background-seguimiento');

    //Para los botones
    divButtons = document.createElement('div');
    divButtons.setAttribute('id', 'divBotones')

    console.log("DOM");
    //Obtener el equipo 

    var equipo = null;

    if (equipo != null) {
        //Agregar value al text-field
        const textField = document.querySelector('vaadin-text-field');
        textField.setAttribute('value', 'Equipo en mantenimiento');

        //Crear cada div de detalle
        divDetail = document.createElement('div');
        divDetail.setAttribute('class', 'divDetalle');

        item = document.createElement('vaadin-item');
        strong = document.createElement('strong');
        textDetail = document.createTextNode('Case 2:');
        strong.appendChild(textDetail);
        item.appendChild(strong);

        divCheckbox = document.createElement('div');
        divCheckbox.setAttribute('class', 'divCheckbox');


        //Esto debe estar en un bucle autogenerado
        //Este atributo se obtendra segun el JSON
        checkbox = document.createElement('vaadin-checkbox');

        checkbox.setAttribute('checked', '');
        textCheckbox = document.createTextNode('Detalle de case 2');
        checkbox.appendChild(textCheckbox);;
        divCheckbox.appendChild(checkbox);

        br = document.createElement('br')
        divCheckbox.appendChild(br);



        //
        checkbox2 = document.createElement('vaadin-checkbox');
        //checkbox2.setAttribute('checked', '');
        textCheckbox2 = document.createTextNode('Detalle dos de case 2');
        checkbox2.appendChild(textCheckbox2);;
        divCheckbox.appendChild(checkbox2);

        br2 = document.createElement('br')
        divCheckbox.appendChild(br2);
        //



        divDetail.appendChild(item);
        divDetail.appendChild(divCheckbox);

        divAllDetails.appendChild(divDetail);

        //Boton Guardar
        buttonSave = document.createElement('vaadin-button');
        buttonSave.setAttribute('theme', 'primary');
        buttonSave.setAttribute('id', 'btnGuardar');
        textButtonSave = document.createTextNode('Guardar');
        buttonSave.appendChild(textButtonSave);
        divButtons.appendChild(buttonSave);

        //Agregando botones
        background.appendChild(divButtons);

        //Creando la notificacion
        notification = document.createElement('vaadin-notification');
        notification.setAttribute('duration', '4000');
        notification.setAttribute('position', 'top-end');
        notification.setAttribute('id', 'notification');
        template = document.createElement('template');
        //textTemplate = document.createTextNode('Se guardaron los cambios en los pasos de los detalles.');
        //template.appendChild(textTemplate);
        template.innerHTML = "Se guardaron los cambios en los pasos de los detalles.";
        notification.appendChild(template);


        //Agregando notificacion
        background.appendChild(notification);

        //Para escuchar el evento click de Guardar
        btnSaveObtenido = document.querySelector('#btnGuardar');
        btnSaveObtenido.addEventListener("click", () => {
            const notification = document.querySelector('#notification');
            notification.open();
        });

        console.log("Final");

    } else {


        divDetail = document.createElement('div');
        divDetail.setAttribute('id', 'divDefault');
        textDefault = document.createTextNode('No se encontro ningún detalle.');
        divDetail.appendChild(textDefault);

        divAllDetails.appendChild(divDetail);

    }

    //Boton Cancelar
    buttonCancel = document.createElement('vaadin-button');
    buttonCancel.setAttribute('theme', 'success primary');
    buttonCancel.setAttribute('id', 'btnCancelar');
    textButtonCancel = document.createTextNode('Cancelar');
    buttonCancel.appendChild(textButtonCancel);
    divButtons.appendChild(buttonCancel);

    //Agregando botones
    background.appendChild(divButtons);


    style = document.createElement('style');
    style.innerText = `
        .divDetalle {
            margin: 10px 20% 20px 30px;
            border: solid 1px lightblue;
            border-radius: 8px;
        }

        .divCheckbox {
            margin-left: 40px;
        }

        #divTituloDetalles {
            border-bottom: solid 1px lightblue;
            margin: 10px 20% 10px 0px;
        }

        #divBotones, #divDefault {
            margin: 10px 20% 20px 40px;
        }
        #btnGuardar{
            margin-right: 10px;
        }
    `;

    //Agregando estilo
    background.appendChild(style);




});