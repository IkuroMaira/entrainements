const h1 = document.querySelector("h1")
h1.innerText = "Coucou les loulous"
h1.style.color = "green"

let getBtn = document.getElementById('change_color')
// getBtn.addEventListener('click', () => {
//     
//     let getInput = document.querySelector('input')
//     
//     let inputValue = getInput.value
//     
//     h1.style.color = inputValue
// })

getBtn.addEventListener('click', () => {
    h1.style.color = document.querySelector('input').value
})