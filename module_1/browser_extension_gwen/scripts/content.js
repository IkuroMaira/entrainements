// On doit ajouter une addEventListener pour enclencher le remplacement des images quans les images sont chargées :
const imagesFound = document.querySelectorAll('img');
console.log(imagesFound);

const config = {
    childList: true,
    subtree: true
}

const observer = new MutationObserver(() => {
    console.log("Ça charge!");
    replacePictures();
})

observer.observe(document.body, config);

const replacePictures = () =>{
    const imagePath = chrome.runtime.getURL('images/cats/cat_01.jpg');

    imagesFound.forEach(image => {
        try {
            image.src = imagePath;
        } catch (error) {
            console.log(error);
            console.log("Une erreur est survenue au changement de lien source de l'image.")
        }
    })
}

// document.addEventListener("DOMContentLoaded", replacePictures);
// window.addEventListener("load", function () {
//     console.log("La page est chargée !")
//     replacePictures();
// });