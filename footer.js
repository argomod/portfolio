class footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <footer>
            <div class="currently-container spacing-medium-bottom">
                <a class="currently-item" href="https://youtu.be/Kp4wg9qWtmk?feature=shared" target="_blank">
                    Watching <span aria-hidden="true">→</span>
                </a>
                <a class="currently-item" href="https://youtu.be/Kp4wg9qWtmk?feature=shared" target="_blank">
                    Studying <span aria-hidden="true">→</span>
                </a>
                <a class="currently-item" href="https://youtu.be/Kp4wg9qWtmk?feature=shared" target="_blank">
                    Listening to <span aria-hidden="true">→</span>
                </a>
            </div>
            <div>
            <p class="bold-text">Thank you for visiting.</p>
                <ul class="spacing-small-top no-bullet">
                    <li class="spacing-xsmall-bottom"><a href="mailto:mattargomaniz@gmail.com">Send me an email.</a></li>
                     <li class="spacing-xsmall-bottom"><a target="_blank" href="https://margomaniz.tumblr.com/">Lurk on my Tumblr.</a></li>
                     <li><a target="_blank" href="https://github.com/argomod">View my code on GitHub.</a></li>
                </ul>

            </div>

        </footer>
        `
    }
}

customElements.define('mo-footer', footer)