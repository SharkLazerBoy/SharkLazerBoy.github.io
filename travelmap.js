//52.35552° N latitude and 1.17432° E longitude
//london bridge 51.50771° N, 0.08786° W
//stonehedge 51.178844, -1.826323.
//
var coordinates = [52.35552, 1.17432]
var londonBridge = [51.50771, 0.08786]
var stonehedge = [51.178844, -1.826323]
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker(coordinates).bindPopup("<p>Hello, from England!</p>").addTo(map);
var marker1 = L.circle(londonBridge,{color: "black", fillColor: "408f55", radius:80}).addTop(map);
var marker2 = L.marker(stonehedge).bindPopup("<p>Hello, from England!</p>").addTo(map);
