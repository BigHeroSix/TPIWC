import MarcaResourceClient from "./MarcaResourceClient.js";

customElements.whenDefined('vaadin-grid').then(_ => {
    const table = document.querySelector('vaadin-grid');
    let marca = new MarcaResourceClient();
    table.dataProvider = (params, callback) => {
        marca.findByRange(0, 4).then(r => {
            return r.json();
        }).then(data => {
            tableConstructor(data);
            callback(data, data.length);
        });
    }
});

function tableConstructor(json) {
    console.log(json[0]);
    let Propiedades = Object.keys(json[0]);
    let Objetos = Object.values(json[0]);
    console.log(Propiedades);
    console.log(Objetos);

    let table = document.querySelector("vaadin-grid");
    for (let index = 0; index < Propiedades.length; index++) {
        let vaadinColum = document.createElement("vaadin-grid-column");
        let templete1 = document.createElement("template");
        templete1.setAttribute("class", "header");
        let templete2 = document.createElement("template");
        console.log(typeof Objetos[index]);
        templete1.innerHTML = Propiedades[index];
        if (typeof Objetos[index] == 'object') {
            templete2.innerHTML = '[[item.' + Propiedades[index] +'.'+ Propiedades[index] + ']]';
        } else {
            templete2.innerHTML = '[[item.' + Propiedades[index] + ']]';
        }

        vaadinColum.appendChild(templete1);
        vaadinColum.appendChild(templete2);
        table.appendChild(vaadinColum);
    }


}