// Ici l'exercice est d'écrire une fonction à partir de l'énoncé donnée par son voisin
// function nom() {}
// const nom = () => {}

function nombreDeLivre(nbrBiblio, nbrLivreRetire) {
    let livreRestant = nbrBiblio - nbrLivreRetire
    console.log(`Il reste ${livreRestant} livres !`)
}

nombreDeLivre(14,8)
nombreDeLivre(56,9)

// Écris une fonction pour rentrer en boîte qui demande l'âge et le genre de la personne.
// Si "tu es un homme de plus de 18 ans tu peux rentrer en boîte".
// Si "tu es une femme de plus de 18 ans tu peux rentrer en boîte".
// Si "tu es un homme de moins de 18 ans tu ne peux pas rentrer en boîte".
// Si "tu es une femme de moins de 18 ans tu ne peux pas rentrer en boîte".
// Affiche un message d'erreur si la valeur est mauvaise.

function entreeEnBoite(age, genre) {
    if (genre === 'homme' && age < 18) {
        console.log("Tu ne rentres pas en boîte, tu es un homme de moins de 18 ans.");
    } else if (genre === 'homme' && age >= 18) {
        console.log("Tu rentres en boîte, tu es un homme de plus de 18 ans.");
    } else if (genre === 'femme' && age >= 18) {
        console.log("Tu rentres en boîte, tu es une femme de plus de 18 ans.");
    } else if (genre === 'femme' && age < 18) {
        console.log("Tu ne rentres pas en boîte, tu es une femme de moins de 18 ans.");
    } else {
        console.log("Condition non reconnue.");
    }
}

entreeEnBoite(19, "homme") // majeur
entreeEnBoite(19, "femme") // majeur
entreeEnBoite(16, "femme") // mineur
entreeEnBoite(16, "homme") // mineur
entreeEnBoite(16, "") // quand une valeur est mal rentrée


console.log("Conclusion il n'y a que des femme majeure qui peuvent rentrer")
