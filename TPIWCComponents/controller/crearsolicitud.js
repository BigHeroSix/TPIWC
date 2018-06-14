import SolicitudResourceClient from "../boundary/SolicitudResourceClient.js"
import EquipoResourceClient from "../boundary/EquipoResourceClient.js";
var seleccionados = [];
var idSeleccionados = [];
var aenviar = [];
let erc = new EquipoResourceClient();
var equipos = erc.findAll();

document.querySelector("#btnMostrarModal").onclick = _ => {
    let dialog = document.querySelector("vaadin-dialog");
    dialog.opened = true;

    let back = document.querySelector("wc-background");
    back.addEventListener("click", (e) => {
        if (e.target.id === "btnAceptar") {
            aenviar=[];
            let dialog = document.querySelector("vaadin-dialog");
            dialog.opened = false;
            let tablaFuera = document.querySelector("#finales");
            let btnCrear = document.querySelector("#btnCrear");
            tablaFuera.dataProvider(seleccionados);
            seleccionados.forEach((o) => {
                erc.findById(o.idEquipo).then((data) =>{
                    return data.json();
                }).then(obj =>{
                    aenviar.push(obj);
                });
            });
            if (seleccionados.length > 0) {
                tablaFuera.hidden = false;
                btnCrear.hidden = false;
            } else {
                btnCrear.hidden = true;
                tablaFuera.hidden = true;
            }
        }
    });
    back.addEventListener("selectedRow", (e) => {
        var filaSeleccionada = e.detail.source;
        if (e.target.id == "disponibles") {
            let json = { "idEquipo": filaSeleccionada[1].innerText, "modelo": filaSeleccionada[2].innerText, "unidad": filaSeleccionada[3].innerText, "correlativo": filaSeleccionada[0].innerText };
            if (idSeleccionados.includes(filaSeleccionada[1].innerText)) {
                let notificacion = document.querySelector("#notificacion");
                notificacion.innerHTML = "<template id='noty'>El registro ya se encuentra Seleccionado!!!</template>";
                notificacion.open();
            } else {
                seleccionados.push(json);
                idSeleccionados.push(filaSeleccionada[1].innerText);
                let tabla2 = document.querySelector("#seleccionados");
                tabla2.dataProvider(seleccionados);
            }
        } else if (e.target.id == "seleccionados") {
            seleccionados.forEach((o, index) => {
                if (filaSeleccionada[0].innerText == o.correlativo) {
                    seleccionados.splice(index, 1);
                    idSeleccionados.splice(index, 1);
                }
            });
            let tabla2 = document.querySelector("#seleccionados");
            tabla2.dataProvider(seleccionados);
        }
    });
    dialog.addEventListener("opened-changed", (e) => {
        if (dialog.opened == false) {
            let dialog = document.querySelector("vaadin-dialog");
            dialog.opened = false;
            let tablaFuera = document.querySelector("#finales");
            let btnCrear = document.querySelector("#btnCrear");
            tablaFuera.dataProvider(seleccionados);
            if (seleccionados.length > 0) {
                tablaFuera.hidden = false;
                btnCrear.hidden = false;
            } else {
                btnCrear.hidden = true;
                tablaFuera.hidden = true;
            }
        }
    });
}

//  document.querySelector("#btnAceptar").onclick = _ => {

// }

document.querySelector("#btnCrear").onclick = _ => {
    let src = new SolicitudResourceClient();
    let solicitante = document.querySelector("#txtSolicitante").value;
    let unidad = document.querySelector("#txtUnidad").value;
    let lista = JSON.stringify(aenviar);
    console.log(lista);
    
    
    if (solicitante != "" && unidad != "") {
        
        fetch(src._url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                "unidad": unidad,
                "solicitante": solicitante,
                "equipoList": lista
            })
        }).then((data) => {
            return data.json();

        }).then((r)=>{
            document.location.href = "estadosolicitud.html"+"?idSolicitud="+r.idSolicitud;

        }).catch((error) => {
            console.log(error);
        });

    } else {
        let notificacion = document.querySelector("#notificacion");
        notificacion.innerHTML = "<template id='noty'>El solicitante esta vacio!!!</template>";
        notificacion.open();
    }


}