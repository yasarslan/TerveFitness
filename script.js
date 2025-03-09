

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
            suggestionLink = "lihasmassan.html";
        } else if (selectedValue === "weight-loss") {
            suggestionTitle = "Painonpudotus";
            suggestionText = "Painonpudotus vaatii tasapainoista ruokavaliota, säännöllistä kardiotreeniä ja kalorien saannin tarkkailua.";
            suggestionLink = "painonpudotus.html";
        } else if (selectedValue === "endurance") {
            suggestionTitle = "Kestävyyden parantaminen";
            suggestionText = "Kestävyyden parantamiseksi kannattaa keskittyä HIIT-harjoituksiin ja pitkäkestoisiin matalatehoisiin hareketlere.";
            suggestionLink = "kestavyys.html";
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