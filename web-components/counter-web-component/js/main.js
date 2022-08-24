class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.count = 0;
    const html = `
        <button id="decremento">Menos -</button>
        <span>${this.count}</span>
        <button id="incremento">Mas +</button>
      `;

    const style = `
      :host {
        display: block;
      }
    `;

    this.shadowRoot.innerHTML = `
        <style>
          ${style}
        </style>
        ${html}`;

    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
  }

  static get observedAttributes() {
    return ["count"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "count") {
      this.count = parseInt(newVal);
    }
  }

  connectedCallback() {
    this.btnDec = this.shadowRoot.getElementById("decremento");
    this.btnInc = this.shadowRoot.getElementById("incremento");
    this.spamCounter = this.shadowRoot.querySelector("span");
    this.renderCount();
    this.btnDec.addEventListener("click", this.dec);
    this.btnInc.addEventListener("click", this.inc);
  }

  inc() {
    this.count += 1;
    this.setAttribute("count", this.count);
    this.renderCount();
  }
  dec() {
    this.count -= 1;
    this.setAttribute("count", this.count);
    this.renderCount();
  }

  renderCount() {
    this.spamCounter.textContent = this.count;
  }

  disconnectedCallback() {
    this.btnDec.removeEventListener("click", this.dec);
    this.btnInc.removeEventListener("click", this.inc);
  }
}

window.customElements.define("my-counter", MyCounter);
