class NombreUsuario extends HTMLElement { //clase que hereda de HTMLElement
    //componente
    constructor(){
        super();
        this.nombre; //propiedad
        this.apodo; //propiedad
    }

    //ciclo de vida con callbacks de customsElements-----------------

    static get observedAttributes(){ //observador de atributos
        return ["nombre", "apodo"]; //atributos a observar
    }
    
    attributeChangedCallback(attributeName, oldValue, newValue){ //deteccion de cambios en los atributos
        //asignacion de atributos a las propiedades
        if(attributeName === "nombre")  this.nombre = newValue; 
        else if(attributeName === "apodo") this.apodo = newValue;
    }
    
    connectedCallback(){ //metodo que se ejecutara cuando se añada el custom element a el documento
        this.innerHTML = `<h1>Hola ${this.nombre} - ${this.apodo} </h1>`;
    }
}

window.customElements.define("nombre-usuario", NombreUsuario); //definicion de custom element