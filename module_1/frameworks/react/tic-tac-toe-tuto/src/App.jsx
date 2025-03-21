/*
// Le mot clé JS "export" rend ma fonction accessible à l'extérieur de ce fichier
// Le mot clé "default" indique aux autres fichiers qui utilisent ma fonction que la fonction est la fonction principale de mon fichier
export default function Square() {
    // On revoit un bouton
    // "return" indique que tout ce qui le suit est renvoyé comme valeur à l’appelant de la fonction
    return <button className="square">X</button>;
    // <button> est un élément JSX
    // Un élément JSX est une combinaison de code JavaScript et de balises similaires à HTML, qui décrit ce que vous aimeriez afficher.
    // className="square" est une propriété du bouton, ou prop, qui indique à CSS comment styler le bouton
}*/

export default function Square() {

    return (
        // Lorsqu'on veut afficher PLUSIEURS balises html on utilise la balise Fragment
        <>
            <button className="square">X</button>;
            <button className="square">X</button>;
        </>
    )
}