//anket bolumu
// Anket Bölümü
document.addEventListener("DOMContentLoaded", function () {
    const pollContainer = document.getElementById("pollContainer");
    const suggestionContainer = document.getElementById("suggestionContainer");
    const showResultsBtn = document.getElementById("showResults");
    const pollResults = document.getElementById("poll-results");

    if (!pollContainer || !suggestionContainer || !showResultsBtn || !pollResults) {
        console.error("VIRHE: Kysely- tai suosituskomponentteja ei löydy!");
        return;
    }

    // Başlangıçta sonuçları gizle
    pollResults.style.display = "none";
    suggestionContainer.style.display = "none";

    // Anket Seçenekleri ve Sonuçlar
    const results = {
        muscle: 45.3,
        "weight-loss": 15.3,
        endurance: 39.4,
    };

    showResultsBtn.addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="goal"]:checked');

        if (!selectedOption) {
            alert("Valitse vaihtoehto!");
            return;
        }

        const selectedValue = selectedOption.value;

        // Sonuçları ekranda göster
        pollResults.style.display = "block";
        document.getElementById("muscle-result").textContent = results.muscle + "%";
        document.getElementById("weight-loss-result").textContent = results["weight-loss"] + "%";
        document.getElementById("endurance-result").textContent = results.endurance + "%";

        // Öneri Bölümünü Güncelle
        let suggestionTitle = "";
        let suggestionText = "";
        let suggestionLink = "#";

        if (selectedValue === "muscle") {
            suggestionTitle = "Lihasmassan kasvattaminen";
            suggestionText = "Lihasmassan kasvattamiseksi sinun tulisi keskittyä korkeaproteiiniseen ruokavalioon ja voimaharjoitteluun.";
            suggestionLink = "kas-gelistirme.html";
        } else if (selectedValue === "weight-loss") {
            suggestionTitle = "Painonpudotus";
            suggestionText = "Painonpudotus vaatii tasapainoista ruokavaliota, säännöllistä kardiotreeniä ja kalorien saannin tarkkailua.";
            suggestionLink = "kilo-verme.html";
        } else if (selectedValue === "endurance") {
            suggestionTitle = "Kestävyyden parantaminen";
            suggestionText = "Kestävyyden parantamiseksi kannattaa keskittyä HIIT-harjoituksiin ja pitkäkestoisiin matalatehoisiin hareketlere.";
            suggestionLink = "dayaniklilik.html";
        }

        document.getElementById("suggestion-title").textContent = suggestionTitle;
        document.getElementById("suggestion-text").textContent = suggestionText;
        document.getElementById("detailed-link").href = suggestionLink;

        // Anketi Sola Kaydır ve Öneriyi Göster
       // pollContainer.style.transform = "translateX(-80px)";
        suggestionContainer.style.display = "block";
    });
});
//anket bolumu sonu

//HARITA BOLUMU

// Harita Başlatma Fonksiyonu
function initMap() {
    // Kullanıcının konumunu al
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                let userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                // Haritayı oluştur
                let map = new google.maps.Map(document.getElementById("map"), {
                    center: userLocation,
                    zoom: 14,
                });

                // Kullanıcının konumuna marker ekle
                let userMarker = new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: "Sinun Sijainti",
                    icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                });

                // En yakın spor salonlarını aramak için Google Places API kullan
                let request = {
                    location: userLocation,
                    radius: 5000, // 5km çapında spor salonlarını bul
                    type: ["gym"],
                };

                let service = new google.maps.places.PlacesService(map);
                service.nearbySearch(request, function (results, status) {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        for (let i = 0; i < results.length; i++) {
                            createMarker(results[i], map);
                        }
                    }
                });
            },
            function () {
                alert("Sijaintia ei saatu! Tarkista sijainnin käyttöoikeudet.");
            }
        );
    } else {
        alert("Selaimesi ei tue sijaintipalvelua.");
    }
}

// Spor salonları için marker ekleyen fonksiyon
function createMarker(place, map) {
    let marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name,
    });

    let infowindow = new google.maps.InfoWindow({
        content: "<strong>" + place.name + "</strong><br>" + place.vicinity,
    });

    marker.addListener("click", function () {
        infowindow.open(map, marker);
    });
}

//HARITA BOLUMU SONU


// HAMBURGER MENÜ KONTROLÜ
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navLinks = document.getElementById("nav-links");

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const pollContainer = document.querySelector(".poll-container");

    function centerPoll() {
        if (window.innerWidth <= 768) {
            pollContainer.style.margin = "0 auto";
            pollContainer.style.display = "flex";
            pollContainer.style.flexDirection = "column";
            pollContainer.style.alignItems = "center";
        }
    }

    document.getElementById("showResults").addEventListener("click", function () {
        setTimeout(centerPoll, 100);
    });

    window.addEventListener("resize", centerPoll);
    centerPoll();
});