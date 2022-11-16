

export const searchPokemon = async (pokemon) => {

    try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0${pokemon}`;

        const response = await fetch(url);
        const data = await response.json();
        console.log (data)
        return data;


    } catch (error) { }
}

export const getPokemons = async (limit = 200, offset = 200) => {

    try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

        const response = await fetch(url);
        const data = await response.json();
        return data;


    } catch (error) { }
}

// Esta trae todos los pokemones

export const getPokemosData = async (url) => {

    try {

        const response = await fetch(url);
        const data = await response.json();
        return data;


    } catch (error) { }
}