const container = document.querySelector('#container');

container.addEventListener('click', (event) => {

    if (event.target.tagName === 'BUTTON') {
        console.log('Je clique sur un bouton');
        const textBtn = event.target.textContent;
        console.log(textBtn);
        const result = document.querySelector('#result');
        result.textContent = textBtn;
        result.classList.add('btn-success');
    }
})