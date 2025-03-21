const container = document.getElementById('container');
const resultDiv = document.getElementById('result');

container.addEventListener('click', (event) => {
    // 1. Vérifier si l'élément cliqué a la classe "item"
    if (event.target.classList.contains('item')) {
        console.log('Je clique sur un item !')
        // 2. Récupérer le texte de l'élément cliqué
        const clickedText = event.target.textContent;

        // 3. Afficher le texte de l'élément cliqué dans le div "result"
        resultDiv.textContent = `Vous avez cliqué sur: ${clickedText}`;
    }
});