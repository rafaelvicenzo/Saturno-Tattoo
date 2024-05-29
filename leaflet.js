'use strict'

var map = L.map('map').setView([-19.820250749526345, -43.9822470289097], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-19.820250749526345, -43.9822470289097]).addTo(map)
    .bindPopup('Saturno Tattoo')
    .openPopup();