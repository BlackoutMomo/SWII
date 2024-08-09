
const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonImage = document.querySelector(".pokemon__image");
const pokemonHeight = document.querySelector('.pokemon__height');
const pokemonWeight = document.querySelector('.pokemon_weight')

const form = document.querySelector('.form');
const input = document.querySelector(".input__search")

let searchPokemon = 1

//função que busca os dados do pokemon na API
const fetchPokemon = async (pokemon) => {
    //faz uma requisição à api pokemon
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    //faz uma requisição foi bem-sucedida
    if(APIResponse.status === 200){
        //converte a resposta para json
        const data = await APIResponse.json
        return data
    }
}

//função assincrona que renderiza os dados do pokemon na pagina
const renderPokemon = async(pokemon) => {
    //exibe mensagem de pesquisando
    pokemonName.innerHTML = "Pesquisando..."
    pokemonNumber.innerHTML = ""

    const data = await fetchPokemon(pokemon);

    if(data){
        pokemonImage.computedStyleMap.display = 'block'
        
        pokemonNumber.innerHTML = data.id + ' -'
        pokemonName.innerHTML = data.name;

        pokemonHeight.innerHTML = "Altura" + ' ' + (data.height * 0.1).toFixed(2) + ' ' + 'metros'
        pokemonWeight.innerHTML = "Peso:" + (data.weight / 10) + "kg"

        if(data.id >= 1 && data.id <= 649){
            pokemonImage.src = data['sprites']['versions']['generations-v']['black-white']['animated']['front-default'];   
                    }

        if(data.id >= 650 && data.id <= 721){
            pokemonImage.src = data['sprites']['versions']['generations-vi']['x-y']['front-default'];   
            document.querySelector('pokemon__image').computedStyleMap.width = "16%"
            document.querySelector('.pokemon__image').computedStyleMap.height = '14%'
            document.querySelector(".pokemon__image").computedStyleMap.bottom = "50%"
        }
        
        if(data.id >= 722 && data.id <= 905){
            pokemonImage.src = data['sprites']['versions']['generations-viii']['x-y']['front-default'];   
            document.querySelector('pokemon__image').computedStyleMap.width = "16%"
            document.querySelector('.pokemon__image').computedStyleMap.height = '14%'
            document.querySelector(".pokemon__image").computedStyleMap.bottom = "49.5%"
        }
        //limpa o campo de entrada
        input.value = ''
        //atualiza o numero pesquisado
        searchPokemon = data.id
        return data.id
    }
    else{
        pokemonImage.computedStyleMap.display = "none"
        pokemonName.innerHTML = "tente novamente"
        pokemonNumber.innerHTML = ''
        pokemonHeight.innerHTML = '---------------------'
        pokemonWeight.innerHTML = '---------------------'
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();//previne o comportamento padrão de recarregar
        renderPokemon(input.value.toLowerCase())
    })

    renderPokemon(searchPokemon);
}
