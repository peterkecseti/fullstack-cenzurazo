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
                <div style="max-height: 50vh; overflow-y: auto;">
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
    let words = [];
    const placeholderWords = [
        {
            word: 'alma',
            replacements:[
                'barack',
                'narancs',
                'körte',
            ],
            id: 0
        },
        {
            word: 'kutya',
            replacements:[
                'cica'
            ],
            id: 1
        },
        {
            word: 'fekete',
            replacements:[
                'fehér',
                'sárga',
                'barna',
            ],
            id: 2
        },
        {
            word: 'sötét',
            replacements:[
                'világos'
            ],
            id: 3
        },
        {
            word: 'sötét',
            replacements:[
                'világos'
            ],
            id: 4
        },
        {
            word: 'sötét',
            replacements:[
                'világos'
            ],
            id: 5
        },
        {
            word: 'sötét',
            replacements:[
                'világos'
            ],
            id: 6
        },
        {
            word: 'sötét',
            replacements:[
                'világos'
            ],
            id: 7
        },
        {
            word: 'sötét',
            replacements:[
                'világos'
            ],
            id: 8
        },
    ]

    var wordsTable = document.getElementById('words-list');
    BuildTable();

    function BuildTable(){
        GetWords();
        wordsTable.innerHTML = ''

        words.forEach((word) => {
            var tableRow = document.createElement('tr')
            
            const colMainWord = document.createElement('td')
            colMainWord.innerHTML = word.word;
    
            const colReplacementWords = document.createElement('td')
            colReplacementWords.innerHTML = word.replacements;
    
            const colRemoveButton = document.createElement('td')
            const removeButton = document.createElement('button')
            removeButton.className = "btn btn-danger"
            removeButton.innerHTML = "Törlés"
            removeButton.addEventListener('click', ()=>{
                DeleteWord(word.id);
            })
            colRemoveButton.appendChild(removeButton)
    
            tableRow.appendChild(colMainWord)
            tableRow.appendChild(colReplacementWords)
            tableRow.appendChild(colRemoveButton)
    
            wordsTable.appendChild(tableRow);
        });
    }

    function DeleteWord(id){
        // POST delete words
        console.log(id)
        BuildTable();
    }

    function GetWords(){
        // GET get words
        words = placeholderWords
    }
});