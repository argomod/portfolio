class footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <footer>
            <div class="interest-container spacing-large-bottom">
                <a class="interest-item interest-item-1" href="https://www.ikea.com/us/en/p/gulliver-crib-green-70589505/?gad_source=1&gad_campaignid=22399713111&gbraid=0AAAAAD27g7wzDtrmdIqdqxcpS6LpnGPsk&gclid=CjwKCAiAj8LLBhAkEiwAJjbY75esh6x-XrbTZexUqpaabN9MwAqAhCDjHK_BD1oOytkj7zO_C8P23hoC2zwQAvD_BwE" target="_blank">
                    What I'm making <span aria-hidden="true">→</span>
                </a>
                <a class="interest-item interest-item-2" href="https://www.hackingwithswift.com/quick-start/swiftui/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects" target="_blank">
                    What I'm studying <span aria-hidden="true">→</span>
                </a>
                <a class="interest-item interest-item-3" href="https://youtu.be/AgCTkQdArwk?si=t4Jgk19xCaZW5P1b" target="_blank">
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