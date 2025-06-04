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

    // Gestione immagine dinamica SOLO se non siamo su index2.html
    if (imgElement && !window.location.pathname.endsWith('index2.html')) {
        if (imgMap[img]) {
            imgElement.src = imgMap[img].src;
            imgElement.alt = imgMap[img].alt;
            document.title = imgMap[img].title;
        } else {
            imgElement.src = "immagini/assefazione.jpg";
            imgElement.alt = "Gif animata alcool";
            document.title = "this u";
        }

        imgElement.onerror = () => {
            imgElement.src = "https://placehold.co/300x400?text=Errore";
            imgElement.alt = "Errore nel caricamento dell'immagine";
        };
    }

    // Scroll animato verso la sezione testo
    const scrollDown = document.getElementById('scroll-down');
    const testoScroll = document.getElementById('testo-scroll');
    if (scrollDown && testoScroll) {
        scrollDown.addEventListener('click', function(e) {
            e.preventDefault();
            testoScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        scrollDown.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                testoScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
});
