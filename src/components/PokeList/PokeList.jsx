import { useEffect, useState } from 'react';
import styles from '../../App.css';

export default function PokeList() {
    const [pokemon, setPokemon] = useState([]);
    const [searchedPokemon, setSearchedPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        if (search) {
            const filteredPokemon = pokemon.filter(pokemon => pokemon.name.includes(search));

            setSearchedPokemon(filteredPokemon);
        }
    }

    useEffect(() => {
        async function getPokemon() {
            const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=801');
            const data = await res.json();
            const pokemonData = data.results;
            const pokemon = pokemonData.map((poke) => ({
                img: poke.url_image,
                name: poke.pokemon,
                type: poke.type_1
            }));
            
            setPokemon(pokemon);
            console.log(pokemon);
            setLoading(false);
        }
        getPokemon();
    }, []);

    return loading
        
    ? (
        <>
            <div>Loading</div>
        </>
    )

   : (
        <>
            <form onSubmit={handleSubmit} className={styles['form']}>
                <label>Name
                    <label>!
                    <input type='text' placeholder='find by name' value={search} onChange={e => setSearch(e.target.value)}></input>  
                    </label>
                    <button>Search</button>
                </label>
            </form>
            {search
                ? searchedPokemon.map((poke, i) => {
                    return (
                    <div className={styles['all-pokemon']}>
                        <div className={styles['pokemon']}>
                            <h2>{poke.name}</h2>
                            <p>{poke.type}</p>
                            <img src={poke.img} alt='pic of pokemon' />
                        </div>
                    </div>
                    )
                })
               : pokemon.map((poke, i) => {
                   return (
                <div className={styles['all-pokemon']} aria-label='all-pokemon'>
                    <div className={styles['pokemon']}>
                        <h2>{poke.name}</h2>
                        <p>{poke.type}</p>
                    <img src={poke.img} alt='pic of pokemon' />
                    </div>
                           
                </div>
                )
            })
                
            }
        </>
    )
}