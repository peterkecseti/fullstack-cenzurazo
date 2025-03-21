export default function Navbar(){
    var element = document.querySelector('Navbar');
    const navbar = document.createElement('nav')

    if(element == null){
        return;
    }

    navbar.className = 'navbar navbar-dark bg-dark p-3 mb-5 shadow rounded'
    navbar.innerHTML = `
            <div class="container-fluid">
                <div class="d-flex align-items-center">
                    <h3 class="text-white m-0 me-4 mr-4">Cenzúrázó</h3>
                    <div>
                        <a class="text-white text-decoration-none mx-2" href="./index.html">Cenzúrázó</a>
                        <a class="text-white text-decoration-none mx-2" href="./word-list.html">Szavak listája</a>
                        <a class="text-white text-decoration-none mx-2" href="./add-words.html">Szavak hozzáadása</a>
                    </div>
                </div>
            </div>
    `
    element.prepend(navbar);
}