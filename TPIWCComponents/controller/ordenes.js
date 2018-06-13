import OrdenTrabajoResourceClient from "../boundary/OrdenTrabajoResourceClient.js"
let otc = new OrdenTrabajoResourceClient();
otc.findAll().then(a=>{
    return a.json();
    
}).then(e=>{
    document.querySelector("wc-table").dataProvider(e);
})
document.querySelector("wc-background").addEventListener("selectedRow",e=>{
    console.log(e.detail.source);
})