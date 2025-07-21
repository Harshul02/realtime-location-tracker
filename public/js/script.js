const socket = io();

let userName = "";
while (!userName) {
  userName = prompt("Enter your name:");
  if (!userName) alert("Name is required to continue.");
}

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      socket.emit("send-location", { latitude, longitude, userName });
    },
    (error) => {
      console.error(error);
      alert("Failed to get location. Please check if location services are enabled.");
    },
    {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }
  );
}else {
  alert("Geolocation is not supported by your browser.");
}

const map = L.map('map').setView([0,0], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'My Maps'
}).addTo(map);

var marker = {};

socket.on("received-location", (data)=>{
    const {id, latitude, longitude, userName} = data;
    map.setView([latitude, longitude]);

    if(marker[id]){
        marker[id].setLatLng([latitude, longitude]).bindPopup(userName).openPopup();
    }else{
        marker[id] = L.marker([latitude, longitude]).addTo(map).bindPopup(userName).openPopup();
    }
})
socket.on("user-disconnected", (id)=>{
    if(marker[id]){
        map.removeLayer(marker[id]);
        delete marker[id];
    }
})