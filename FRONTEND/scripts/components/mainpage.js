export default function MainPage(){

    var root = document.querySelector('MainPage')
    var component = document.createElement('div')
    component.innerHTML = `
        <div class="container vh-100" id="main">
        <div class="row justify-content-center">
            <div class="col-6">
                <h1 class="mb-5 mt-5">Cenzúrázó</h1>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-6 border-holo">
                <p class="mt-3 ml-3">Cenzúrázandó szöveg</p>
                <textarea class="ml-3" name="" id="" placeholder="Ide írhatod a szöveget"></textarea>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-auto">
                <button class="mt-5">Küldés</button>
            </div>
        </div>
    </div>
    `

    root.appendChild(component)

}