const loadingElement = document.createElement('p');
loadingElement.innerText = "Chargement des offres...";
document.body.appendChild(loadingElement);

async function fetchOffers() {
    const response = await fetch("https://dummyjson.com/posts");
    const offers = await response.json();
    // console.log(offers);a

    for (let i = 0; i < offers.posts.length ; i++) {
        console.log("coucou");
        const postElement = document.createElement('p');
        postElement.innerText = `${offers.posts[i].title}`
        document.body.appendChild(postElement);
    }

    loadingElement.remove();
}

fetchOffers();