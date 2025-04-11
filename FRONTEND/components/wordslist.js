export default class WordsList extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<div class="container vh-100" id="word-list">
        <div class="row justify-content-center">
            <div class="col-12">
                <h1 class="mb-5 mt-5">Szavak listája</h1>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-12 border-holo m-0 p-0">
                <div style="max-height: 500px; overflow-y: auto;">
                    <table class="table text-center table-borderless mb-0">
                        <thead class="bg-lightblue" style="position: sticky; top: 0; ">
                            <tr>
                                <th>Eredeti szó</th>
                                <th>Alternatívák</th>
                                <th>Törlés</th>
                            </tr>
                        </thead>
                        <tbody id="words-list">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
        `;
    }
}

customElements.define('words-list', WordsList);


document.addEventListener('DOMContentLoaded', () => {

    // fetch word list from backend
    const placeholderWords = [
        'alma@barack,narancs,körte',
        'kutya@cica',
        'fekete@fehér,sárga,barna',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
    ];

    var wordsTable = document.getElementById('words-list');

    placeholderWords.forEach(word => {
        var tableRow = document.createElement('tr')
        
        const colMainWord = document.createElement('td')
        colMainWord.innerHTML = word.split('@')[0];

        const colReplacementWords = document.createElement('td')
        colReplacementWords.innerHTML = word.split('@')[1];

        const colRemoveButton = document.createElement('td')
        const removeButton = document.createElement('button')
        removeButton.className = "btn btn-danger"
        removeButton.innerHTML = "Törlés"
        colRemoveButton.appendChild(removeButton)

        tableRow.appendChild(colMainWord)
        tableRow.appendChild(colReplacementWords)
        tableRow.appendChild(colRemoveButton)

        wordsTable.appendChild(tableRow);
    });
});