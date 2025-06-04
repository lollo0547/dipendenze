document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const img = urlParams.get('img');
    const imgElement = document.getElementById("immagine");

    // Redirect to index3.html if ?img=3 on index.html
    if (
        window.location.pathname.endsWith('index.html') &&
        img === '3'
    ) {
        window.location.replace('index3.html');
        return;
    }

    // Redirect to index4.html if ?img=2 on index.html
    if (
        window.location.pathname.endsWith('index.html') &&
        img === '2'
    ) {
        window.location.replace('index4.html');
        return;
    }

    const imgMap = {
        "1": { src: "immagini/Happy Season 5 GIF by The Office.gif", alt: "Gif animata droga", title: "this u" },
        "2": { src: "immagini/You Bro New York Jets GIF by Nickelodeon at Super Bowl.gif", alt: "Gif animata gioco", title: "this u" },
        "3": { src: "immagini/Happy Lionel Messi GIF.gif", alt: "Gif animata fumo", title: "this u" },
        "4": { src: "immagini/I Am Coming For You Oh No GIF by Manifest Destiny Down SPACETIME.gif", alt: "Gif animata sesso", title: "this u" }
    };

    // Gestione immagine dinamica SOLO su index.html (o index1)
    if (
        imgElement &&
        (window.location.pathname.endsWith('index.html') ||
         window.location.pathname.endsWith('index1.html') ||
         window.location.pathname === '/' ||
         window.location.pathname === '/index.html')
    ) {
        if (imgMap[img]) {
            imgElement.src = imgMap[img].src;
            imgElement.alt = imgMap[img].alt;
            if (document.title !== imgMap[img].title) {
                document.title = imgMap[img].title;
            }
        } else {
            imgElement.src = "immagini/Chuck Liddell Point GIF by UFC.gif";
            imgElement.alt = "This u";
            if (document.title !== "this u") {
                document.title = "this u";
            }
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
