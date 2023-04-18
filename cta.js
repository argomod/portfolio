class cta extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <a href="https://www.ptreyesbooks.com/book/9781797222448" target="_blank">
                Read A Garden's Purpose by Félix de Rosen <span aria-hidden="true">→</span>
            </a>
        `
    }
}

customElements.define('mo-cta', cta)
