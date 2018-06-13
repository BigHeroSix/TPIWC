import OrdenTrabajoResourceClient from "../boundary/OrdenTrabajoResourceClient.js"
let otc = new OrdenTrabajoResourceClient();
otc.findAll().then(a=>{
    return a.json();
    
}).then(e=>{
    document.querySelector("wc-table").dataProvider(e);
})