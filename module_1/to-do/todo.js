// L'objectif est de créer une to-do liste que je peux modifier

// 1. créer un variable qui récupère le bouton :
const btnAdd = document.querySelector('button')
console.log(btnAdd) // OK

// 2. ajouter un évènement sur le bouton :
// btnAdd.addEventListener('click', () => {
//     alert("Ça marche !");
//     console.log("Ça marche ici aussi");
// })

// 3. ajouter une div au clic :
// btnAdd.addEventListener('click', () => {
//     let createBtn = document.createElement('button');
//     console.log(createBtn);
// })
// Le bouton se créé dans ma console et PAS dans mon html

// 4. faire apparaître le bouton dans le html
// btnAdd.addEventListener('click', () => {
//     let createLi = document.createElement('li');
//     let container = document.getElementById("container")
//     container.appendChild(createLi)
//     console.log(createLi);
// })
// Ça marche dans le html et dans la console

// 5. ajouter du texte dans li :
// btnAdd.addEventListener('click', () => {
//     let createLi = document.createElement('li');
//     let getContainer = document.getElementById("container");
//     let getUl = document.querySelector('ul')
//
//     getContainer.appendChild(getUl).appendChild(createLi).innerText = "Tâche 1";
//
//     console.log("console.log : ",createLi);
// })

// 6. récupérer un input :
// let getInput = document.getElementById("input_task");
// console.log("J'ai récupéré ", getInput);

// 7. récupérer la valeur d'un input : ... avec un évènement
// btnAdd.addEventListener('click', () => {
//     let inputValue = getInput.value;
//     console.log("La valeur de l'input est ", inputValue);
// })

// 8. fusionner le 7, le 6 et le 5 ... ajouter un texte venant d'un input
// btnAdd.addEventListener('click', () => {
//
//     let getInput = document.getElementById("input_task");
//     console.log("J'ai récupéré ", getInput);
//
//     let inputValue = getInput.value;
//     console.log("La valeur de l'input est ", inputValue);
//
//     let createLi = document.createElement('li');
//     let getContainer = document.getElementById("container");
//     let getUl = document.querySelector('ul');
//
//     getContainer.appendChild(getUl).appendChild(createLi).innerText = inputValue;
//     // Effacer le texte du champ input
//     // 9. vider l'input après avoir cliqué sur "ajouter"
//     document.getElementById('input_task').value = '';
//
//     console.log("console.log : ",createLi);
// })

// 10. mettre une condition pour éviter d'envoyer une tâche vide
btnAdd.addEventListener('click', () => {

    if (document.getElementById('input_task').value === '') {
        getBtn.disabled = true;
    }

    let getInput = document.getElementById("input_task");
    console.log("J'ai récupéré ", getInput);

    let inputValue = getInput.value;
    console.log("La valeur de l'input est ", inputValue);

    let createLi = document.createElement('li');
    let getContainer = document.getElementById("container");
    let getUl = document.querySelector('ul');

    getContainer.appendChild(getUl).appendChild(createLi).innerText = inputValue;
    // Effacer le texte du champ input
    // 9. vider l'input après avoir cliqué sur "ajouter"
    document.getElementById('input_task').value = '';

    console.log("console.log : ",createLi);
})

// 11. Ajouter des fonctions pour mieux gérer le code