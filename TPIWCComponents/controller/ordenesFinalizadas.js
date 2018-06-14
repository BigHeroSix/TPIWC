import OrdenTrabajoResourceClient from "../boundary/OrdenTrabajoResourceClient.js"
var otr=new OrdenTrabajoResourceClient(); 

customElements.whenDefined("vaadin-text-field","vaadin-button","vaadin-date-picker")
.then(e=>{  
   let filter;
   let datepicker=document.querySelector("vaadin-date-picker");
   let textfield=document.querySelector("vaadin-text-field");
   let btn=document.querySelector("vaadin-button");
   let value;

   if(textfield.focus()){
       datepicker.value=null;
   }
 
btn.addEventListener("click",e=>{
   if(datepicker.value!=null&&datepicker.value!=""){
       let date=datepicker.value.split("-");
       let dateFormat=date[0]+"-"+date[2]+"-"+date[1];
       otr.byDate(dateFormat)
       .then(response=>{
           return response.json();
       })
       .then(data=>{
        document.querySelector("wc-table").dataProvider(data);

       })
   }
   if(textfield.value!=null){
       filtrar(textfield.value);
   }
   textfield.value=null
   datepicker.value=null;
});  


 

});

function filtrar(filter){
    otr.getbyFilter(0,1,filter).
then(response=>{
    return response.json();
})
.then(data=>{
    document.querySelector("wc-table").dataProvider(data);
});
}

