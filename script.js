document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const img = urlParams.get('img');
    const imgElement = document.getElementById("immagine");

    const imgMap = {
        "1": {
            src: "immagini/Immagine WhatsApp 2025-07-12 ore 16.28.06_8cd6e5ed.jpg",
            alt: "Immagine dipendenza",
            title: "this u",
            text: "y"
        },
        "2": {
            src: "immagini/Immagine WhatsApp 2025-07-12 ore 16.28.07_5040df47.jpg",
            alt: "Immagine dipendenza", 
            title: "this u",
            text: "Alla base della tendenza a postare e condividere molto della propria vita c'è una volontà di appartenenza ma non a un gruppo di persone ma alla realtà stessa. Se una persona non posta quello che fa sui social è come se non lo avesse vissuto. Se non posti il video del concerto ...sei sicuro di esserci stato?"
        },
        "3": {
            src: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
            alt: "Gif animata fumo",
            title: "this u",
            text: "Testo per immagine 3"
        },
        "4": {
            src: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
            alt: "Gif animata sesso",
            title: "this u",
            text: "Testo per immagine 4"
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
        const testoElement = document.getElementById('testo-dinamico');
        
        if (imgMap[img]) {
            imgElement.src = imgMap[img].src;
            imgElement.alt = imgMap[img].alt;
            if (document.title !== imgMap[img].title) {
                document.title = imgMap[img].title;
            }
            // Aggiorna il testo dinamico
            if (testoElement && imgMap[img].text) {
                testoElement.textContent = imgMap[img].text;
            }
        } else {
            imgElement.src = "https://media.giphy.com/media/evcB2qZZuYOi2lHqbh/giphy.gif";
            imgElement.alt = "This u";
            if (document.title !== "this u") {
                document.title = "this u";
            }
            // Testo di default
            if (testoElement) {
                testoElement.textContent = "x";
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

    // RIMOZIONE FORZATA DI BORDER-RADIUS VIA JAVASCRIPT
    function removeBorderRadius() {
        const allElements = document.querySelectorAll('*');
        allElements.forEach(element => {
            element.style.borderRadius = '0';
            element.style.webkitBorderRadius = '0';
            element.style.mozBorderRadius = '0';
            element.style.msBorderRadius = '0';
        });
    }

    // Esegui immediatamente
    removeBorderRadius();

    // Esegui ogni volta che la pagina cambia
    document.addEventListener('DOMContentLoaded', removeBorderRadius);
    window.addEventListener('load', removeBorderRadius);

    // Osserva cambiamenti nel DOM
    if (typeof MutationObserver !== 'undefined') {
        const observer = new MutationObserver(removeBorderRadius);
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class']
        });
    }
});
