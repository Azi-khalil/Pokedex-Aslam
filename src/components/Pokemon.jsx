import React from 'react'
import Stats from './Stats'
import '../styles/Pokemon.css'
import {useNavigate} from "react-router-dom";


function Pokemon({pokemon,noType}) {
    const navigate = useNavigate();

    return (
        <div className='gridSystem'>
            {noType ? <span style={{color: "red"}}> No Pokemon Found with this Trait!</span> : ''}
            {pokemon.map((pok,index) => {
                return (
                    <div key={index} className='pokemonContainer' onClick={() => navigate(`/pokemon/${pok.name}`)}>
                        <div className='imageContainer'>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pok.id}.png`} alt="pokemon" />
                            <span></span>
                        </div>
                        <div className='pokDetails'>
                            <h2 className={pok.name.length > 10 ? 'bigNames' : 'smallNames'}>{pok.name}</h2>
                            <div className='typeContainer'>
                                <h4>Type</h4>
                                <div>
                                    {pok.types.map((type,index) => {
                                        return (
                                            <span className='smallAbility' key={index}>{type.type.name}</span>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='typeContainer'>
                                <h4>Abilities</h4>
                                <div>
                                    {pok.abilities.map((ab,index,arr) => {
                                        return (
                                            <span key={index} className={arr.length >= 3 ? 'bigAbility' : 'smallAbility'}>{ab.ability.name}</span>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <Stats stats={pok.stats} />
                    </div>
                )
            })}
        </div>
    )
}

export default Pokemon