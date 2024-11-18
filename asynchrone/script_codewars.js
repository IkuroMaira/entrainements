async function sayJoke(apiUrl, idPokemon){
    // use mocked `fetch(url)`
    console.log(apiUrl);
    const response = await fetch(apiUrl);
    const pokemons = await response.json();
    console.log(pokemons);

    // for (let i = 0; i < pokemons.results.length; i++) {
    //     const element = document.createElement('p');
    //     element.innerText = pokemons.results[i].name;
    //     document.body.appendChild(element);
    // }

    let index = idPokemon;

    if (idPokemon === index) {
        const element = document.createElement('p');
        element.innerText = pokemons.results[index].name;
        document.body.appendChild(element);
    }
}

// sayJoke("https://official-joke-api.appspot.com/random_joke");
// sayJoke("https://icanhazdadjoke.com");
sayJoke("https://pokeapi.co/api/v2/pokemon/", 18);