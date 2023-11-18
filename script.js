// Função para extrair a API//
async function buscaPokemon() {
  const nomePokemon = document.getElementById("nomePokemon").value;
  const modalPoke = document.getElementById("modalPoke");
  const modalPokemon = new bootstrap.Modal(modalPoke);

  const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;
// Tratando situações de erro com a escrita//
  try {
    if (!nomePokemon) {
      alert("Digite o nome do Pokemon!!");
      return;
    }

    const response = await fetch(url);

    if (!response.ok) {
      alert("Não foi possível encontrar o Pokemon. Verifique o nome e tente novamente.");
      return;
    }

    const data = await response.json();
    modalPokemon.show();
//Retornando as info da Api para o html//
    const peso = document.getElementById("peso");
    const nomePokeElement = document.getElementById("nomePoke");
    const altura = document.getElementById("altura");
    const nmrPoke = document.getElementById("nmrPoke");
    const imagemUrl = document.getElementById("fotoPokemon");
    const imagemcosta = document.getElementById("fotoCosta");
//resposta ao usuario//
    altura.textContent = `Altura: ${data.weight}Cm`;
    peso.textContent = `Peso: ${data.height}Kg`;
    nmrPoke.textContent = `Índice Pokedex: ${data.order}º`;
    nomePokeElement.textContent = `${data.name}`;
    imagemUrl.src = data.sprites.front_default;
    imagemcosta.src = data.sprites.back_default;

  } catch (error) {
    console.error(error);
    alert("Ocorreu um erro ao buscar o Pokemon. Tente novamente mais tarde.");
  }
}
