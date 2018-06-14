import EquipoResourceClient from "../boundary/EquipoResourceClient.js";
import SolicitudResourceClient from "../boundary/SolicitudResourceClient.js";

var idSolicitud;
let erc = new EquipoResourceClient();
let src = new SolicitudResourceClient();

Promise.all([customElements.whenDefined("vaadin-button"),
customElements.whenDefined("vaadin-text-field"),
customElements.whenDefined("wc-table"),
customElements.whenDefined("wc-background")]).then(function () {
    let txtid = document.querySelector("#txtid");
    txtid.focus();
    document.querySelector('#btnid').onclick = function () {
        idSolicitud = txtid.value;
        if (idSolicitud) {
            src.findById(idSolicitud).then(response => {
                console.log("response.type "+response.type);
                console.log("findbyid");
                for (var pair of response.headers.entries()) {
                    console.log(pair[0]+ ': '+ pair[1]);
                 } 
                 console.log(response.headers);
                var cabeceras = response.headers;
                if (cabeceras.has("controller-exception")) {
                    console.log("tiene controller-exc");
                    let notificacion = document.querySelector("#notificacion");
                    notificacion.innerHTML = "<template id='noty'>"+cabeceras.get("controller-exception")+"</template>";
                    notificacion.open();
                    return {};
                } else if (cabeceras.has("server-exception")) {
                    console.log("tiene server-exc");
                    let notificacion = document.querySelector("#notificacion");
                    notificacion.innerHTML = "<template id='noty'>"+cabeceras.get("server-exception")+"</template>";
                    notificacion.open();
                    return {};
                }else{
                    let json;
                    try {
                        eval('json = response.json()');
                    } catch (error) {
                        console.log("Error de parse");
                        console.log(error);
                        return {};
                    }
                    return json;
                }

            }).then(data => {
                console.dir(data);
                if (data.idSolicitud) {
                    document.querySelector("#info").className = "";
                    document.querySelector("#txtsolicitante").value = data.solicitante;
                    document.querySelector("#txtunidad").value = data.unidad;

                    if (data.estado !== undefined) {
                        document.querySelector("#txtestado").value = data.estado ? 'Aprobada' : 'Rechazada';
                    } else {
                        document.querySelector("#txtestado").value = "Por abrobar/rechazar";
                    }

                    src.obtenerEstado(idSolicitud).then(response => {
                        console.dir(response);
                        return response.json();
                    }).then(data => {
                        console.dir(data);
                        if (data.length > 0) {
                            document.querySelector("#tablaEquipos").dataProvider(data);
                        } else {
                            let notificacion = document.querySelector("#notificacion");
                            notificacion.innerHTML = "<template id='noty'>Solicitud sin equipos...</template>";
                            notificacion.open();
                        }
                    });
                } else {
                    document.querySelector("#info").className = "oculto";
                    let notificacion = document.querySelector("#notificacion");
                    notificacion.innerHTML = "<template id='noty'>ID de solicitud inválido</template>";
                    notificacion.open();
                }
            });


        }
    }
    document.querySelector("wc-background").addEventListener("selectedRow", (e) => {
        document.querySelector("#dialogo").opened = true;
        document.querySelector("#txtCorrelativo").value = e.detail.source[0].innerText;
        document.querySelector("#txtModelo").value = e.detail.source[1].innerText;
        document.querySelector("#txtUnidad").value = e.detail.source[2].innerText;
        erc.historial(e.detail.source[3].innerText).then(response => {
            return response.json();
        }).then(data => {
            document.querySelector("#tablaDetalle").dataProvider(data);
            if (data.length == 0) {
                document.querySelector("#noregistros").className = "";
            } else {
                document.querySelector("#noregistros").className = "oculto";
            }
        });
    });
});