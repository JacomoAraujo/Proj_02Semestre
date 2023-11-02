async function buscaPokemon(){
    const nomePokemon = document.getElementById('nomePokemon').value;
    const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;
    try{
        const response = await fetch (url);
        const data = await response.json();

        const peso = document.getElementById('peso');
        const nomePoke = document.getElementById('nomePoke');
        const altura = document.getElementById('altura');
        const nmrPoke = document.getElementById('nmrPoke');
        const imagemUrl = document.getElementById("fotoPokemon")
        
        altura.textContent = `Altura; ${data.weight}Cm`;
        peso.textContent = `Peso: ${data.height}Kg`;
        nmrPoke.textContent = `Índice Pokedex: ${data.order}º`;
        nomePoke.textContent = `${data.name}`;
        imagemUrl.src = data.sprites.front_default;

        



        //console.log(data)
    }
    catch (error) {
        console.error(error)
        return null
    }

}