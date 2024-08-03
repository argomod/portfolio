class cta extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `

<p class="bold-text">What I'm watching</p>


            
        <a href="https://youtu.be/Kp4wg9qWtmk?feature=shared" target="_blank">
                What I'm watching:<br /> Shoyan Japanese Carpenter <span aria-hidden="true">→</span>
            </a>

        `
    }
}

customElements.define('mo-cta', cta)
