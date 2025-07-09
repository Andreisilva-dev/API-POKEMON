let conteudo = document.querySelector(".conteudo");

function chama() {
  let i = 0;
  while (i <= 151) {
    //console.log(i);
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((response) => response.json())
      .then((dados) => {
        //console.log(dados);

        // criando meu card
        let card = document.createElement("div");
        // colocando minha div no meu html conteudo
        conteudo.appendChild(card);
        card.classList.add("card");

        // colocando img no card
        let img = document.createElement("img");
        card.appendChild(img);
        img.src = dados.sprites.front_default;

        // colocando nome pokemon
        let namePokemon = document.createElement("p");
        card.appendChild(namePokemon);
        namePokemon.textContent = dados.name;

        // criar tipo
        let tipoPokemon = document.createElement("p");
        card.appendChild(tipoPokemon);

        switch (dados.types[0].type.name) {
          case "fire":
            tipoPokemon.textContent = dados.types[0].type.name;
            console.log(dados.types[0].type.name);
            tipoPokemon.classList.add("fire");

            break;
          case "water":
            tipoPokemon.textContent = dados.types[0].type.name;
            console.log(dados.types[0].type.name);
            tipoPokemon.classList.add("water");
            break;
          case "grass":
            tipoPokemon.textContent = dados.types[0].type.name;
            console.log(dados.types[0].type.name);
            tipoPokemon.classList.add("grass");
            break;
         case 'electric':
            tipoPokemon.textContent = dados.types[0].type.name;
            console.log(dados.types[0].type.name);
            tipoPokemon.classList.add("eletrico");
            break
         case 'poison':
            tipoPokemon.textContent = dados.types[0].type.name;
            console.log(dados.types[0].type.name);
            tipoPokemon.classList.add("poison");
            break
          default:
            tipoPokemon.textContent = dados.types[0].type.name;
            console.log(dados.types[0].type.name);
            tipoPokemon.classList.add("botaoTipo");
        }

      });
    i++;
  }

  conteudo.classList.add("conteudo");
}
