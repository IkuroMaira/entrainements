console.log("Coucou")

const message = document.querySelector('#message');
message.innerText = "Bonjour tout le monde !";
console.log(message);

const prenom = "Jérémie";
const messagePrenom = document.querySelector('#message');
// Je dois afficher le message "Bonjour Jérémieé et "Jérémie est mis en strong :
message.innerHTML = `Bonjour <strong>${prenom}</strong> !`;

const buttons = document.querySelectorAll('button') // Sans le querySelectorAll (on aurait pas de tableau)
// buttons[0].classList.add('selected');
// buttons[1].classList.add('selected');
// buttons[2].classList.add('selected');
// buttons[3].classList.add('selected');
// Faire une boucle sur le tableau précédent

// for (const button of buttons) {
//     button.classList.add("selected");
// }
//
// for (let i = 0; i > buttons.length; i++) {
//     buttons[i].classList.add("selected");
// };
//
// buttons.forEach(element => {
//     button.classList.add('selected');
// });

buttons[1].classList.add('error');

for (const button of buttons) {
    button.addEventListener('click', () => {

        for (const button of buttons) {
            button.classList.remove('selected');
        }

        button.classList.add('selected');
        console.log("Coucou");
    })
}

