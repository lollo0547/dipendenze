document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const img = urlParams.get('img');
    const imgElement = document.getElementById("immagine");

    const imgMap = {
        "1": {
            src: "immagini/Immagine WhatsApp 2025-07-12 ore 16.28.06_8cd6e5ed.jpg",
            alt: "Immagine dipendenza",
            title: "this u",
            text: "Il burnout è quel senso di esaurimento che ti colpisce quando passi ore a scorrere senza meta, alla ricerca di qualcosa che non sai nemmeno cosa sia. Ti senti svuotato, ma non riesci a fermarti, come se il tuo pollice avesse una volontà propria. I social sono la tua prigione digitale, e tu sei il detenuto volontario che non riesce a trovare la chiave per uscire. il tuo pollice è del tuo cervello?"
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
            imgElement.src = "immagini/Immagine WhatsApp 2025-07-12 ore 18.55.35_f5e39a76.jpg";
            imgElement.alt = "This u";
            if (document.title !== "this u") {
                document.title = "this u";
            }
            // Testo di default
            if (testoElement) {
                testoElement.textContent = "La disconnessione digitale è un processo attivo che richiede di spegnere notifiche, impostare limiti di tempo su app e, soprattutto, trovare il coraggio di premere 'off' ma hai davvero il coraggio di farlo?";
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

    // Gestione scritta "Scopri chi siamo" - SOLO per index.html
    const scopriChiSiamo = document.getElementById('scopri-chi-siamo');
    const logoLink = document.getElementById('logo-link');
    
    // Non mostrare la scritta su index2.html
    const isIndex2 = window.location.pathname.endsWith('index2.html');
    
    if (scopriChiSiamo && testoScroll && logoLink && !isIndex2) {
        let hasScrolled = false;
        
        // Intersection Observer per rilevare quando la sezione testo è visibile
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasScrolled) {
                    hasScrolled = true;
                    // Ritardo di 1 secondo prima di mostrare la scritta
                    setTimeout(() => {
                        scopriChiSiamo.classList.add('show');
                        logoLink.classList.add('pulse');
                    }, 1000);
                }
            });
        }, {
            threshold: 0.3 // Attiva quando il 30% della sezione è visibile
        });
        
        observer.observe(testoScroll);
        
        // Rendi la scritta cliccabile per andare a index2.html
        scopriChiSiamo.addEventListener('click', function() {
            window.location.href = 'index2.html';
        });
        
        // Rendi anche il logo cliccabile (era già cliccabile per il link)
        logoLink.addEventListener('click', function(e) {
            // Se la scritta è visibile, va a index2.html, altrimenti mantiene il comportamento normale
            if (scopriChiSiamo.classList.contains('show')) {
                e.preventDefault();
                window.location.href = 'index2.html';
            }
        });
    }
});
