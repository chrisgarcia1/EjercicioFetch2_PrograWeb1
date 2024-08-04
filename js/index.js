fetch("https://api.escuelajs.co/api/v1/categories")
.then (response => response.json())
.then (data => {
    let card = '<div class="row row-cols-1 row-cols-md-3 g-4">'
    
    for (let usuario of data) {
        card += `<div class="col">
                    <div class="card">
                        <img src="${usuario.image}" class="card-img-top" alt="Usuario">
                        <div class="card-body">
                            <h5 class="card-title">${usuario.name}</h5>
                        </div>
                        
                    </div>
                </div>`
    }
    card += "</div>"

    document.getElementById("cardLista").innerHTML = card
})