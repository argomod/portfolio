class cta extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `


        <a href="https://youtu.be/Kp4wg9qWtmk?feature=shared" target="_blank">
                Curently watching<span aria-hidden="true">→</span>
            </a>

        `
    }
}

customElements.define('mo-cta', cta)
