class footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <footer>
            <div class="interest-container spacing-large-bottom">
                <a class="interest-item interest-item-1" href="https://www.ourpaleolife.com/rustic-landscape-timber-trail-stairs/" target="_blank">
                    What I'm making <span aria-hidden="true">→</span>
                </a>
                <a class="interest-item interest-item-2" href="https://terremoto.la/" target="_blank">
                    What I'm studying <span aria-hidden="true">→</span>
                </a>
                <a class="interest-item interest-item-3" href="https://youtu.be/0rFVVzavii0?feature=shared" target="_blank">
                    What I'm listening to <span aria-hidden="true">→</span>
                </a>
            </div>
            <div>
            <p class="bold-text">Thank you for visiting.</p>
                <ul class="spacing-xsmall-top no-bullet">
                    <li class="spacing-xsmall-bottom"><a href="mailto:mattargomaniz@gmail.com">Send me an email.</a></li>
                     <li><a target="_blank" href="https://github.com/argomod">View my code on GitHub.</a></li>
                </ul>
               <p class="spacing-medium-top small-text sec-text">Site updated January 2026</p>


            </div>
        </footer>
        `
    }
}

customElements.define('mo-footer', footer)