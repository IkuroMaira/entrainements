const pokemons = [
    {name : "Méloféé", type: "Féé"},
    {name : "Goupix", type: "Feu"},
    {name : "Psykokwak", type: "Eau"},
    {name : "Rondoudou", type: "Normal/Féé"},
    {name : "Abra", type: "Psy"},
]

for (let i = 0; i < pokemons.length; i++) {
    console.log('For : ', pokemons[i].name, pokemons[i].type)
}

for (const element of pokemons) {
    console.log('For const : ', element.name)
}

pokemons.forEach(pokemon => { // on peut changer "pokemon" par le terme "element"
    console.log(pokemon.name)
})

// for (let i = 0; i < pokemons.length; i++) {
//     console.log(pokemons[i].name, pokemons[i].type)
// }
//
// for (const element of pokemons) {
//     console.log(element.name)
// }
//
// pokemons.forEach(pokemon => { // on peut changer "pokemon" par le terme "element"
//     console.log(pokemon.name)
// })