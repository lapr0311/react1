import React from 'react';
import "./styles.css";
import Pokemon from "./Pokemon";
import Pagination from './Pagination';

function PokemonTable(props) {


    const { pokemons, page, setPage, total, loading } = props;

    const lastPage = (e) => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage)
    }
    const nextPage = (e) => {

        const nextPage = Math.min(page + 1, total);
        setPage(nextPage)
    }


    return (
        <div >
            <div className="header-table">
                <h1>Encuentra Tu Pokemon</h1>
                <Pagination
                    page={page}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                />
            </div>
            <div className="evolution">
                <h2>Pokemones</h2>

            </div>
            {
                loading ?
                    <div>Cargando Pokemons...</div>
                    :

                    <div className="pokemon-table">
                        {
                            pokemons.map((pokemon) => {
                                return (
                                    <div key={pokemon.name}>
                    
                                        <Pokemon pokemon={pokemon} key={pokemon.name} />
                                    </div>
                                )

                            })
                        }
                    </div>
            }
            <div>
                <footer className="footer">
                    <a href="https://youtu.be/mT_GzsNwhe8">Video youtube aqui</a>
                    <a href="https://github.com/lapr0311">GitHub</a>
                </footer>
            </div>
        </div>
    )
}

export default PokemonTable
