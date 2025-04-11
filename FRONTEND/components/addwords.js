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
                <textarea class="ml-3" name="" id="words-textarea" placeholder="Formátum: szó@alternatíva1,alternatíva2"></textarea>
            </div>
        </div>
        <div class="row justify-content-center">
                <div class="col-lg-auto">
                    <button class="mt-5" id="btn-add-words">Hozzáad</button>
                </div>
            </div>
    </div>
        `;
    }
}

customElements.define('add-words', AddWords);

// get words from textarea

document.getElementById("btn-add-words").addEventListener('click', () => {
    var textarea = document.getElementById('words-textarea')
    var words = textarea.value
    const wordsJson = ParseWordsToJson()


    console.log(wordsJson) // send to backend


    function ParseWordsToJson() {
        const lines = words.trim().split('\n')

        const result = lines.map(line => {
            const [wordPart, replacementsPart] = line.split('@')

            if (!wordPart || !replacementsPart) return null

            const word = wordPart.trim()
            const replacements = replacementsPart
                .split(',')
                .map(r => r.trim())
                .filter(r => r.length > 0)

            return { word, replacements }
        }).filter(entry => entry !== null)

        return result;
    }
})