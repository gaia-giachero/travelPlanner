// ============ RECUPERO ELEMENTI DAL DOM ============
const form = document.getElementById("travelForm");

const destinazioneInput = document.getElementById("destinazione");
const partenzaInput = document.getElementById("partenza");
const ritornoInput = document.getElementById("ritorno");
const budgetInput = document.getElementById("budget");

const viaggiContainer = document.getElementById("sezioneViaggi");

// ============ DATI ============
let viaggi = [];
let prossimoId = 1;

// ============ EVENTI ============
renderViaggi();

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const viaggio = {
    id: prossimoId,
    destinazione: destinazioneInput.value,
    partenza: partenzaInput.value,
    ritorno: ritornoInput.value,
    budget: Number(budgetInput.value),
  };

  viaggi.push(viaggio);
  console.log(viaggi);

  prossimoId++;

  renderViaggi();
});

function renderViaggi() {
  // 1. svuota la visualizzazione precedente
  viaggiContainer.innerHTML = "";

  // 2. controlla se non ci sono viaggi
  //    → mostra empty state
  if (viaggi.length === 0) {
    /* empty state che verrà nascosto alla creazione del primo viaggio
            e verrà sostituita dal viaggio in sé */
    const emptyState = `
            <div class="empty-state">
                <p>✈</p>
                <h3>Non hai ancora creato un viaggio.</h3>
                <p>Inizia a organizzare la tua prossima avventura.</p>
                <button type="button" class="btn-primary">Crea il tuo primo viaggio</button>
            </div>
        `;

    viaggiContainer.innerHTML = emptyState;
  } else {
    let card = ``;
    // 3. altrimenti percorre viaggi[]
    for (let i = 0; i < viaggi.length; i++) {
      const viaggio = viaggi[i];

      const partenza = new Date(viaggio.partenza)
        .toLocaleDateString("it-IT", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        .toUpperCase();

      const ritorno = new Date(viaggio.ritorno)
        .toLocaleDateString("it-IT", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        .toUpperCase();

      // 4. per ogni viaggio crea la card
      card += `
                <div data-id="${viaggio.id}" class="travel-card">
                    <h3>${viaggio.destinazione}</h3>
                    <p>✈ ${partenza} → ${ritorno}</p>
                    <p><span>Budget:</span> ${viaggio.budget} €</p>
                    <button type="button" class="btn-primary">Elimina</button>
                </div>
            `;
    }

    // 5. la aggiunge al container
    viaggiContainer.innerHTML = card;
  }
}
