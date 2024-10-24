// L'objectif est de créer une to-do liste que je peux modifier

// 1. créer un variable qui récupère le bouton :
const btnAdd = document.querySelector('button')
console.log(btnAdd) // OK

// 2. ajouter un évènement sur le bouton :
btnAdd.addEventListener('click', () => {
    alert("Ça marche !");
    console.log("Ça marche ici aussi");
})

// 1 créer une fonction qui ajoute une ligne "li" et la stocke
const createTask = () => {}