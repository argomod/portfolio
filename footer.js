class footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <footer>
                <p class="bold-text">Thank you for visiting.</p>
                <ul class="spacing-small-top no-bullet">
                    <li class="spacing-xsmall-bottom"><a href="mailto:mattargomaniz@gmail.com">Send me an email.</a></li>
                     <li class="spacing-xsmall-bottom"><a target="_blank" href="https://margomaniz.tumblr.com/">Lurk on my Tumblr.</a></li>
                     <li class="spacing-xsmall-bottom"><a target="_blank" href="https://github.com/argomod">View my code on GitHub.</a></li>
                </ul>
                 <p class="spacing-medium-top small-text sec-text">Site updated April 2023.</p>
             </footer>
        `
    }
}

customElements.define('mo-footer', footer)