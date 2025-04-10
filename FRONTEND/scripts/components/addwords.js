export default function AddWords() {

    var root = document.querySelector('AddWords')
    var component = document.createElement('div')
    component.innerHTML = `
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
    </div>
    `

    root.appendChild(component)

}