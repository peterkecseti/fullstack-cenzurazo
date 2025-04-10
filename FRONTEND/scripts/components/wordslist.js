export default function WordsList() {

    var root = document.querySelector('WordsList')
    var component = document.createElement('div')
    component.innerHTML = `
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
    `

    root.appendChild(component)

}