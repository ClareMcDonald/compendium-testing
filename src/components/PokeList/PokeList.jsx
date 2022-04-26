import { useEffect, useState } from 'react';

export default function PokeList() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getPokemon() {
            const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
            // console.log(await res.json());
            const data = await res.json();
            const pokemonData = data.results;
            const pokemon = pokemonData.map((poke) => ({
                img: poke.url_image,
                name: poke.pokemon,
                type: poke.type_1
            }));

            setPokemon(pokemon);
            console.log(pokemon);
        }
        getPokemon();
        setLoading(false);
    }, []);

    if (loading) return (
        <>
            <div>Loading</div>
        </>
    );

    return (
        <>
            <form>
                <label>Name
                    <input type='text'></input>  
                    <button>Search</button>
                </label>
            </form>
                {pokemon.map((poke, i ) => {
                    return (
                    <div>
                            <h2>{poke.name}</h2>
                            <p>{poke.type}</p>
                        <img src={poke.img} alt='pic of pokemon' />
                        </div>
                    )
                })}
        </>
    )
}