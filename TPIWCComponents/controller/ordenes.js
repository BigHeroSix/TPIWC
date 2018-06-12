import OrdenesNoFinalizadasResourceClient from "../boundary/OrdenesNoFinalizadasResourceClient.js"
let otc = new OrdenesNoFinalizadasResourceClient();
otc.findAll().then(a=>{
    return a.json();
    
}).then(e=>{
    document.querySelector("wc-table").dataProvider(e);
})