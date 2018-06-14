import OrdenTrabajoResourceClient from "../boundary/OrdenTrabajoResourceClient.js"
let otc = new OrdenTrabajoResourceClient();

document.querySelector("wc-background").addEventListener("selectedRow",e=>{
    console.log(e.detail.source);
})