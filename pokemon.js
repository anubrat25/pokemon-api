async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            document.getElementById("image").innerHTML = "No such Pokémon exists.";
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;

        document.getElementById("image").innerHTML=`<img src="${pokemonSprite}" alt="Pokemon sprite" display: block;`;
    }
    
    catch(error) {
    }
}