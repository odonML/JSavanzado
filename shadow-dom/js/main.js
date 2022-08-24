class TextoRosa extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'}); // adjunto el shadowDOM a el elemento especificado
        let sh = this.shadowRoot;   //creo mi nodo rais en el shadowDOM
        const p = document.createElement("p");  //creacion de elemento
        const style = document.createElement("style"); //creacion de elemento
        p.textContent = "hola mundo";   //asignacion de textContent
        style.textContent= `p{
            background-color: pink;
            color: black;
        }
        p:hover{
            color: red;
        }`; //asignacion de textContent
        
        sh.appendChild(style); //agregar el elemento estyle como hijo del nodo raiz
        sh.appendChild(p); //agregar el elemento p como hijo del nodo raiz
    }
}

window.customElements.define("texto-rosa", TextoRosa); //definicion de customElement