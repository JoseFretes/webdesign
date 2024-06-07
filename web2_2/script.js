function geoFindMe() {
    const status = document.querySelector("#status");
    const mapContainer = document.querySelector("#map-container");

    mapContainer.innerHTML = ""; 

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = "";

      
        const mapIframe = document.createElement("iframe");
        mapIframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.005},${latitude - 0.005},${longitude + 0.005},${latitude + 0.005}&layer=mapnik`;
        mapIframe.width = "400";
        mapIframe.height = "300";
        mapIframe.frameborder = "0";
        mapIframe.allowfullscreen = true;

        mapContainer.appendChild(mapIframe);
    }

    function error() {
        status.textContent = "No se pudo obtener tu ubicación";
    }

    if ("geolocation" in navigator) {
        status.textContent = "Localizando...";
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        status.textContent = "La geolocalización no está disponible en este navegador.";
    }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);