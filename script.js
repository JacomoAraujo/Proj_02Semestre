async function buscaPokemon(){
    const nomePokemon = document.getElementById('nomePokemon').value;
    const modalPoke = document.getElementById('modalPoke')
    const modalPokemon = new bootstrap.Modal(modalPoke)
    const detalhe = document.getElementById('detalhePokemon')
    const titulo = document.getElementById('nomePokemonTitulo')
    const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;
    try{
        const response = await fetch (url);
        const data = await response.json();
        detalhe.innerHTML = `Índice Pokedex: ${data.order}º
        Peso: ${data.height}Kg
        Altura: ${data.weight}Cm`
        
        titulo.innerText = data.name
        modalPokemon.show()

        const peso = document.getElementById('peso');
        const nomePoke = document.getElementById('nomePoke');
        const altura = document.getElementById('altura');
        const nmrPoke = document.getElementById('nmrPoke');
        const imagemUrl = document.getElementById("fotoPokemon")
        const imagemcosta = document.getElementById("fotoCosta")
        
        altura.textContent = `Altura: ${data.weight}Cm`;
        peso.textContent = `Peso: ${data.height}Kg`;
        nmrPoke.textContent = `Índice Pokedex: ${data.order}º`;
        nomePoke.textContent = `${data.name}`;
        imagemUrl.src = data.sprites.front_default;
        imagemcosta.src = data.sprites.back_default;

        



        //console.log(data)
    }
    catch (error) {
        console.error(error)
        return null
    }

}