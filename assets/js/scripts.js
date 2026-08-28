
// ============ RECUPERO ELEMENTI DAL DOM ============
const form = document.getElementById('travelForm');

const destinazioneInput = document.getElementById('destinazione');
const partenzaInput = document.getElementById('partenza');
const ritornoInput = document.getElementById('ritorno');
const budgetInput = document.getElementById('budget');

const viaggiContainer = document.getElementById('viaggiCreati');
const emptyState = document.querySelector('.empty-state');

// ============ DATI ============
let viaggi = [];
let prossimoId = 1;

// ============ EVENTI ============
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const viaggio = {
        id: prossimoId,
        destinazione: destinazioneInput.value,
        partenza: partenzaInput.value,
        ritorno: ritornoInput.value,
        budget: Number(budgetInput.value)
    };

    viaggi.push(viaggio);
    console.log(viaggi);

    prossimoId++;
});