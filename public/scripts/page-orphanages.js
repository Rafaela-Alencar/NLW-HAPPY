
const map = L.map('mapid').setView([-27.2124235,-49.6623765], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//CREATE ICON
const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29, 68],
    popupAnchor: [170, 2]
})

//CREATE POPUP OVERLAY
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth:240,
    minHeight:240
}).setContent('Lar das meninas <a href="orphanage.html?id=1"'+
'class="chose-orphanage"><img src="./public/images/arrow-white.svg"></img>')


L
.marker([-27.2124235,-49.6623765], {icon})
.addTo(map)
.bindPopup(popup)
   