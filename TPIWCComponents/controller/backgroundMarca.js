import MarcaResourceClient from "./MarcaResourceClient.js";
class BackgroundMarca extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.addEventListener("complete", (e) => {
            let service = new MarcaResourceClient();
            service.findByNameLike(e.detail.char)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    document.querySelector("auto-complete").setAttribute("options", JSON.stringify(data));
                })
        })

        // this.addEventListener("paginar", (e) => {

        // })

    }
}
customElements.define("background-marca", BackgroundMarca);
export default BackgroundMarca;