async function buscaPokemon(){
    const nomePokemon = document.getElementById('nomePokemon').value
    const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`
    try{
        const response = await fetch (url)
        const data = await response.json()
        //altura.value=data.
        altura.value = data.weight
        peso.value = data.heigth
        nome.value = data.name

        console.log(data)
    }
    catch (error) {
        console.error(error)
        return null
    }
        const peso = document.getElementById('peso')
        const nome = document.getElementById('nome')
        const altura = document.getElementById('altura')
}