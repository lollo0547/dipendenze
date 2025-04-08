document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const img = urlParams.get('img');
    const imgElement = document.getElementById("immagine");

    const imgMap = {
        "1": { src: "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif", alt: "Gif animata droga", title: "Dipendenza da droga" },
        "2": { src: "https://media.giphy.com/media/l0HlOvJ7yaacpuSas/giphy.gif", alt: "Gif animata gioco", title: "Dipendenza da gioco" },
        "3": { src: "https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif", alt: "Gif animata fumo", title: "Dipendenza da fumo" },
        "4": { src: "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif", alt: "Gif animata sesso", title: "Dipendenza da sesso" }
    };

    if (imgMap[img]) {
        imgElement.src = imgMap[img].src;
        imgElement.alt = imgMap[img].alt;
        document.title = imgMap[img].title; // Aggiorna il titolo della pagina
    } else {
        imgElement.src = "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif";
        imgElement.alt = "Gif animata alcool";
        document.title = "Dipendenza da alcool"; // Titolo predefinito
    }

    // Gestione errori di caricamento immagine
    imgElement.onerror = () => {
        imgElement.src = "https://placehold.co/300x400?text=Errore";
        imgElement.alt = "Errore nel caricamento dell'immagine";
    };
});
