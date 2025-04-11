import {backendAddress} from "../scripts/backend-address.js";

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
                            <thead class="bg-lightblue" style="position: sticky; top: 0;">
                                <tr>
                                    <th>Eredeti szó</th>
                                    <th>Alternatívák</th>
                                    <th>Törlés</th>
                                </tr>
                            </thead>
                            <tbody id="words-list"></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.BuildTable();
    }

    async BuildTable() {
        const wordsTable = this.querySelector('#words-list');
        const words = await this.GetWords();
        wordsTable.innerHTML = '';

        words.forEach((word) => {
            const row = document.createElement('tr');

            const colMainWord = document.createElement('td');
            colMainWord.textContent = word.original;

            const colReplacementWords = document.createElement('td');
            colReplacementWords.textContent = word.replacements;

            const colRemoveButton = document.createElement('td');
            const removeButton = document.createElement('button');
            removeButton.className = "btn btn-danger";
            removeButton.textContent = "Törlés";
            removeButton.addEventListener('click', async () => {
                await this.DeleteWord(word.id);
                this.BuildTable();
            });

            colRemoveButton.appendChild(removeButton);

            row.appendChild(colMainWord);
            row.appendChild(colReplacementWords);
            row.appendChild(colRemoveButton);

            wordsTable.appendChild(row);
        });
    }

    async GetWords() {
        const res = await fetch(`${backendAddress}`, {
            method: "GET"
        });

        if (!res.ok) {
            console.error("failed to fetch words");
            return [];
        }

        return await res.json();
    }

    async DeleteWord(id) {
        const res = await fetch(`${backendAddress}/delete-word/${id}`, {
            method: "DELETE"
        });

        if (!res.ok) {
            console.error(`Failed to delete word with id ${id}`);
        }
    }
}

customElements.define('comp-wordlist', WordsList);
