import MarcaResourceClient from '../controller/MarcaResourceClient.js';
import ModalDialog from '../controller/ModalDialog.js';

window.onload = function () {


    let mrc = new MarcaResourceClient();
    mrc.findAll().then((response) => {
        return response.json();
    }).then((data) => {
            console.log("Estaaaaaaaaaaaaaaaaaaaaaaaaaaa es data: "+data);
            var tabla = document.querySelector("wc-table");
            tabla.setLista(data);

        })
document.body.
addEventListener("selectedRow",(e)=>{
    let modal=document.querySelector("wc-modal-dialog");
    for(let i=0;i<e.detail.headers.length;i++){
        let p=document.createElement("p");
        p.innerHTML=`${e.detail.headers[i].textContent}:    ${e.detail.source[i].textContent}`;
        modal.appendChild(p);
    }
   
    modal.init();
    modal.toggleVisibility(true);
    
})
}


    
export default this;
