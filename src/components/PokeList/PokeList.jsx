import { useEffect, useState } from 'react';

export default function PokeList() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getPokemon() {
            const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
            // console.log(await res.json());
            const data = await res.json();
            const pokemon = data.results;
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
            <ul>
                {pokemon.map((poke) => {
                    return <li>{poke.pokemon}</li>
                })}
            </ul>
        </>
    )
}