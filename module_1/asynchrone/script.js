const fetch = require('node-fetch');

async function fetchOffers() {
    try {
        const response = await fetch("https://codepassport.dev/api/offers", {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        const offers = await response.json();
        console.log(offers);
    } catch (error) {
        console.error("Une erreur s'est produite :", error);
    }

    // Retirer le message de chargement
    loadingElement.remove();
}

fetchOffers();