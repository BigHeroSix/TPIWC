import OrdenTrabajoResourceClient from "../boundary/OrdenTrabajoResourceClient.js"
let otc = new OrdenTrabajoResourceClient();

document.querySelector("wc-background").addEventListener("selectedRow",e=>{
    let datos=e.detail.source;
    location.href="seguimientoestado.html?orden="+datos[0].textContent+"&equipo="+datos[1].textContent;
})