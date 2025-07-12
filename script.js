document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const img = urlParams.get('img');
    const imgElement = document.getElementById("immagine");

    const imgMap = {
        "1": {
            src: "https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif",
            alt: "Gif animata droga",
            title: "this u"
        },
        "2": {
            src: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
            alt: "Gif animata gioco",
            title: "this u"
        },
        "3": {
            src: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
            alt: "Gif animata fumo",
            title: "this u"
        },
        "4": {
            src: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
            alt: "Gif animata sesso",
            title: "this u"
        }
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
            imgElement.src = "https://media.giphy.com/media/evcB2qZZuYOi2lHqbh/giphy.gif";
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
