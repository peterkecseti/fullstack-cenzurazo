export default class AddWords extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <div class="container vh-100" id="add-word">
        <div class="row justify-content-center">
            <div class="col-6">
                <h1 class="mb-5 mt-5">Szavak hozzáadása</h1>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-6 border-holo">
                <p class="mt-3 ml-3">Cenzúrázandó szöveg</p>
                <textarea class="ml-3" name="" id="" placeholder="Formátum: szó@alternatíva1,alternatíva2"></textarea>
            </div>
        </div>
        <div class="row justify-content-center">
                <div class="col-lg-auto">
                    <button class="mt-5">Hozzáad</button>
                </div>
            </div>
    </div>
        `;
    }
}

customElements.define('add-words', AddWords);