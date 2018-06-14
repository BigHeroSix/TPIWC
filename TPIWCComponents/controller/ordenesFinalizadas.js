import OrdenTrabajoResourceClient from "../boundary/OrdenTrabajoResourceClient.js"
var otr=new OrdenTrabajoResourceClient(); 

customElements.whenDefined("vaadin-text-field")
.then(e=>{  
   let filter; 
   let textfield=document.querySelector("vaadin-text-field");
   let value;
textfield.addEventListener("change",e=>{
    filter=textfield.value;
    filtrar(filter);
    let d=new Date(filter);
    textfield.value=null
   /* otr.byDate(d) 
    .then(r=>{
        return r.json();
    })
    .then(a=>{
        console.log(a);
    })*/
});

});

function filtrar(filter){
    console.log(typeof filter);
    otr=new OrdenTrabajoResourceClient(); 

    otr.getbyFilter(0,1,filter).
then(response=>{
    return response.json();
})
.then(data=>{
    console.log(data);
    document.querySelector("wc-table").dataProvider(data);
});
}

