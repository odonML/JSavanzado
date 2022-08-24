class HolaMundo extends HTMLElement {
  constructor() {
    super();
    let p = document.createElement("p");
    p.textContent = "hola mundo";
    p.style = "color:blue";
    this.appendChild(p);
  }
}
window.customElements.define("hola-mundo", HolaMundo);
