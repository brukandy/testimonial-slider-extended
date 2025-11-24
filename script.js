const testimonials = {
    fabio: {
        name: "Fabio",
        role: "Imprenditore e Franchise Owner",
        highlight: "Da 250.000 € a DECINE di milioni di euro di fatturato annuo",
        mediaType: "video",
        mediaUrl: "https://www.youtube.com/embed/f3lBU52wDPQ",
        thumbnailUrl: "images/fabio-testimonial.png",
        sections: [
            {
                label: "Situazione di partenza",
                text: "Fatturava circa 250.000 € all'anno con un modello tradizionale e una struttura poco scalabile."
            },
            {
                label: "Intervento",
                text: "Applica le strategie di business, leadership e gestione aziendale apprese nei programmi di affiancamento."
            },
            {
                label: "Risultato misurabile",
                text: "Oggi supera di gran lunga <strong>DECINE di milioni di euro</strong> di fatturato annuo, espandendo la rete commerciale e creando un sistema di crescita stabile e replicabile."
            },
            {
                label: "Tempo/Impegno",
                text: "Tre anni di applicazione costante e mentoring continuativo."
            }
        ]
    },
    gilberto: {
        name: "Gilberto Vespignani",
        role: "Imprenditore nel settore servizi",
        highlight: "Incremento del 150% in 12 mesi: da 600.000 € a 1,5 milioni",
        mediaType: "video",
        mediaUrl: "https://www.youtube.com/embed/pmbVLQppfgc",
        thumbnailUrl: "images/gilberto-tetimonial.png",
        sections: [
            {
                label: "Situazione di partenza",
                text: "Azienda in difficoltà economica, fatturato fermo a 600.000 € l'anno e un team di venti persone."
            },
            {
                label: "Intervento",
                text: "Partecipa ai programmi di affiancamento dedicati a imprenditori, lavorando su leadership, gestione del team e controllo operativo."
            },
            {
                label: "Risultato misurabile",
                text: "Incrementa il fatturato del <strong>150% in un anno</strong>, passando da 600.000 € a 1,5 milioni, e porta il team da 20 a 55 collaboratori. Oggi guida un'impresa solida, in crescita costante."
            },
            {
                label: "Tempo/Impegno",
                text: "Tutto questo in soli dodici mesi di affiancamento con applicazione settimanale delle strategie apprese."
            }
        ]
    },
    sandra: {
        name: "Sandra N.",
        role: "Primo investimento immobiliare",
        highlight: "ROI del 30,64% - €64.000 di guadagno netto",
        mediaType: "photo",
        mediaUrl: "images/sandra-testimonial.png",
        sections: [
            {
                label: "Situazione di partenza",
                text: "Nessuna esperienza nel settore immobiliare, solo il desiderio di entrare nel mercato con una preparazione solida."
            },
            {
                label: "Intervento",
                text: "Partecipa al REM (Real Estate Master), frequenta i 3 moduli strutturati e i workshop pratici per consolidare le conoscenze e acquisire fiducia operativa."
            },
            {
                label: "Risultato misurabile",
                text: "Prima ancora di completare il programma, chiude la sua prima operazione immobiliare con un <strong>ROI del 30,64%</strong>, generando €64.000 di guadagno netto."
            },
            {
                label: "Tempo/Impegno",
                text: "Prima operazione conclusa prima della fine del Programma formativo, applicando immediatamente le strategie apprese."
            }
        ]
    },
    alice: {
        name: "Alice Grandcolas",
        role: "Interior Designer",
        highlight: "Da 1.100 € al mese a designer per Hilton London",
        mediaType: "photo",
        mediaUrl: "images/alice-testimonial.png",
        sections: [
            {
                label: "Situazione di partenza",
                text: "Guadagnava 1.100 € al mese come freelance a Milano, in una fase di blocco personale e professionale."
            },
            {
                label: "Intervento",
                text: "Segue il programma di affiancamento Master in Evoluzione Personale, lavorando su fiducia, chiarezza e capacità decisionale."
            },
            {
                label: "Risultato misurabile",
                text: "Ottiene un incarico per curare il design di un <strong>hotel Hilton a Londra</strong> e si trasferisce all'estero, costruendo una nuova carriera internazionale."
            },
            {
                label: "Tempo/Impegno",
                text: "Tutto questo in soli dodici mesi di Programma e applicazione costante."
            }
        ]
    }
};

const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const cards = document.querySelectorAll('.testimonial-card');
const cardsGrid = document.querySelector('.cards-grid');
const mobileDots = document.querySelectorAll('.mobile-dot');

document.addEventListener('DOMContentLoaded', function() {
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const testimonialId = this.getAttribute('data-testimonial');
            openModal(testimonialId);
        });
    });

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    // Mobile slider dots update
    if (cardsGrid && mobileDots.length > 0) {
        cardsGrid.addEventListener('scroll', updateMobileDots);
        updateMobileDots(); // Initial update
    }
});

function updateMobileDots() {
    const scrollLeft = cardsGrid.scrollLeft;
    const cardWidth = cards[0].offsetWidth;
    const gap = 16; // Same as CSS gap
    const activeIndex = Math.round(scrollLeft / (cardWidth + gap));
    
    mobileDots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function openModal(testimonialId) {
    const data = testimonials[testimonialId];
    if (!data) return;

    let mediaHTML = '';
    if (data.mediaType === 'video') {
        if (data.mediaUrl) {
            // Check if it's a YouTube URL
            if (data.mediaUrl.includes('youtube.com') || data.mediaUrl.includes('youtu.be')) {
                mediaHTML = `<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 16px;">
                    <iframe 
                        src="${data.mediaUrl}" 
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: 16px;"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>`;
            } else {
                // Regular video file
                mediaHTML = `<video controls style="width: 100%; border-radius: 16px;">
                    <source src="${data.mediaUrl}" type="video/mp4">
                </video>`;
            }
        } else {
            mediaHTML = `<div class="modal-media-placeholder">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="40" fill="rgba(255,255,255,0.15)"/>
                    <path d="M32 26L54 40L32 54V26Z" fill="white"/>
                </svg>
            </div>`;
        }
    } else {
        if (data.mediaUrl) {
            mediaHTML = `<img src="${data.mediaUrl}" alt="${data.name}" style="width: 100%; border-radius: 16px;">`;
        } else {
            mediaHTML = `<div class="modal-media-placeholder">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="40" fill="rgba(255,255,255,0.15)"/>
                    <path d="M40 25C33.373 25 28 30.373 28 37C28 43.627 33.373 49 40 49C46.627 49 52 43.627 52 37C52 30.373 46.627 25 40 25ZM40 31C42.071 31 43.75 32.679 43.75 34.75C43.75 36.821 42.071 38.5 40 38.5C37.929 38.5 36.25 36.821 36.25 34.75C36.25 32.679 37.929 31 40 31ZM40 46C36.625 46 33.625 44.313 31.75 41.688C31.788 39 37 37.563 40 37.563C42.963 37.563 48.213 39 48.25 41.688C46.375 44.313 43.375 46 40 46Z" fill="white"/>
                </svg>
            </div>`;
        }
    }

    let sectionsHTML = '';
    data.sections.forEach(section => {
        sectionsHTML += `
            <div class="modal-section">
                <div class="modal-section-label">${section.label}</div>
                <div class="modal-section-text">${section.text}</div>
            </div>
        `;
    });

    modalContent.innerHTML = `
        <div class="modal-header">
            <div class="modal-media">
                ${mediaHTML}
            </div>
            <div class="modal-info">
                <h2 class="modal-name">${data.name}</h2>
                <p class="modal-role">${data.role}</p>
                <div class="modal-highlight">
                    <div class="modal-highlight-text">${data.highlight}</div>
                </div>
            </div>
        </div>
        <div class="modal-sections">
            ${sectionsHTML}
        </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}
