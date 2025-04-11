export default class Censored extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container vh-100 d-flex justify-content-center align-items-center" id="censored">
                <div class="row w-100 justify-content-center">
                    <div class="col-lg-6 border-holo">
                        <p class="mt-3 ml-3">Cenzúrázott szöveg</p>
                        <textarea disabled class=" ml-3" id="censored-text" placeholder="A cenzúrázott szöveg itt fog megjelenni"></textarea>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('censored-section', Censored);