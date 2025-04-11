export default class Censored extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container vh-100 d-flex justify-content-center align-items-center" id="censored">
            <div class="row w-100 justify-content-center">
                <div class="col-lg-4 col-sm-12 border-holo">
                    <p class="mt-3 ml-3">Cenzúrázott szöveg</p>
                    <div style="max-height: 50vh; overflow-y: auto;">
                        <p disabled class="ml-3" id="censored-text" style="height: 500px"></p>
                    </div>
                </div>
                <div class="col-lg-8 col-sm-12 border-holo">
                    <p class="mt-3 ml-3">Szófelhő</p>
                    <div style="max-height: 50vh; overflow-y: auto;" class="ml-3 mr-3 mb-3">
                    <table class="table text-center table-borderless mb-0">
                        <thead class="bg-lightblue" style="position: sticky; top: 0;">
                            <tr>
                                <th>Eredeti szó</th>
                                <th>Módosított szó</th>
                                <th>Előfordulás</th>
                            </tr>
                        </thead>
                        <tbody id="comparison-table">
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    async SetValue(result){
        const resultTextarea = document.getElementById('censored-text');
        resultTextarea.innerHTML = result.censoredText;

        const comparisonTable = document.getElementById('comparison-table');
        comparisonTable.innerHTML = ''
        var censoredWords = result.censoredWords;
        censoredWords.sort((a, b) => (a.occourances < b.occourances) ? 1 : ((a.occourances > b.occourances) ? -1 : 0)) // sort by occourances descending

        censoredWords.forEach(word => {
            const fontSize = ((word.occourances > 5) ? 5 : word.occourances) * 2 + 15 // caps font size at 25px

            var tableRow = document.createElement('tr');
            var tableDataOriginal = document.createElement('td')
            tableDataOriginal.innerHTML = word.original
            tableDataOriginal.style = `font-size: ${fontSize}px` 

            var tableDataReplacements = document.createElement('td')
            tableDataReplacements.innerHTML = word.replacements
            tableDataReplacements.style = `font-size: ${fontSize}px`

            var tableDataOccourances = document.createElement('td')
            tableDataOccourances.innerHTML = word.occourances
            tableDataOccourances.style = `font-size: ${fontSize}px`

            tableRow.appendChild(tableDataOriginal)
            tableRow.appendChild(tableDataReplacements)
            tableRow.appendChild(tableDataOccourances)

            comparisonTable.appendChild(tableRow)
        })

    }
}

customElements.define('comp-censored', Censored);



