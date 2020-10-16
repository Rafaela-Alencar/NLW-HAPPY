const map = L.map('mapid').setView([-27.2124235,-49.6623765], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//CREATE ICON
const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29, 68]
})

//CREATE AND ADD MARKER

let marker;

map.on('click', (event)=>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    //remove icon
    marker && map.removeLayer(marker)
    //add icon layer
    marker= L.marker([lat, lng], {icon})
    .addTo(map)
})

//adicionar o campo de fotos
function addPhotoFiels() {
    //pegar o cantainer de fotos
    const container = document.querySelector('#images')

    //pegar o container para duplica .new-image
    const fielsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da última imagem adicionada.
    const newFielsContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se o campo esta vazio, se sim, não adicionar ao container de imagens
    const input = newFielsContainer.children[0]

    if(input.value =="") {
        return
    }

    // limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    //adicionar o clone ao container de #images
    container.appendChild(newFielsContainer)
}

function deleteFiels(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value =""
        return
    }

    //deletar o campo
    span.parentNode.remove();


}

//selecionar SIM ou NÃO

function toggleSelect(event) {
   //retirar a class .active(dos botões) 
   document.querySelectorAll('.button-select button')
   .forEach(function(button) {
       button.classList.remove('active')
   })

   //colocar a class .active nesse botão clicado
   const button = event.currentTarget
   button.classList.add('active')

   //atualizar o meu input hidden com o valor selecionado
   const input = document.querySelector('[name="open_on_weekends"]')

   input.value =button.dataset.value

}


