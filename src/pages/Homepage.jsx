import React from 'react'
import {useEffect,useState} from 'react'
import MainNav from '../components/MainNav'
import Pokemon from '../components/Pokemon'
import axios from 'axios'
import MainFooter from '../components/MainFooter'
import pokedex from '../images/Pokedex.svg'
import pokedexBlue from '../images/PokedexBlue.svg'
import ReactLoading from "react-loading";
import pokeball from "../images/Pokeball.svg"




function Homepage() {
    const [pokemonNames,setPokemonNames] = useState()
    const [pokemon,setPokemon] = useState([])
    const [searchPokemon,setSearchPokemon] = useState('')
    const [notFound,setNotFound] = useState(false)
    const [emptyError,setEmptyError] = useState(false)
    const [options,setOptions] = useState([])
    const [seeMore,setSeeMore] = useState(6)
    const [noType,setNoType] = useState(false)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        fetchPokemons()
    },[])


    const fetchPokemons = async () => {
        setLoading(true)
        await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=100`).then((res) => {
            const pokemonName = res.data.results
            setPokemonNames(pokemonName)
            randomPokemons(pokemonName)
        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }

    const randomPokemons = async (pokemonName) => {
        const pokemonArray = []
        for (let i = 0; i < pokemonName.length; i++) {
            const reandomNumber = Math.floor(Math.random() * 100);
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName[reandomNumber].name}`).then((res) => {
                pokemonArray.push(res.data)
            }).catch((err) => {
                setLoading(false)
            })
        }
        setLoading(false)
        setPokemon(pokemonArray)
    }

    // Search functionality
    const searchItems = async (name) => {
        if (!name) {
            setEmptyError(true)
            setNotFound(false)
        } else {
            const pokemonArray = []
            setLoading(true)
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/?limit=6`).then((res) => {
                pokemonArray.push(res.data)
                setNotFound(false)
                setEmptyError(false)
            }).catch((err) => {
                setNotFound(true)
                setEmptyError(false)
                setLoading(false)
                setTimeout(() => {
                    fetchPokemons()
                    setNotFound(false)
                    setEmptyError(false)
                },2000)
            })
            setLoading(false)
            setPokemon(pokemonArray)
        }
    }
    // Filter Functionality
    const handleRadio = async (e) => {
        setPokemon([])
        setLoading(true)
        await axios.get(`https://pokeapi.co/api/v2/type/${e.target.value}/`).then((res) => {
            const pokemonName = res.data.pokemon
            fetchByTypes(pokemonName)
        })
    }


    const fetchByTypes = async (pokemonName) => {
        const pokemonArray = []
        for (let i = 0; i < pokemonName.length / 2; i++) {
            const reandomNumber = Math.floor(Math.random() * pokemonName.length);
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName[reandomNumber].pokemon.name}`).then((res) => {
                pokemonArray.push(res.data)
            }).catch((err) => {
                setNoType(true)
                setLoading(false)
            })
        }
        setLoading(false)
        setPokemon(pokemonArray)
    }


    return (
        <div className='app'>
            <MainNav search={searchItems} notFound={notFound} empty={emptyError} filterOptions={handleRadio} />
            <div className='background'>
                <div className='pokemonItemContainer containerWrapper'>
                    <img className='pokedexBlue' src={pokedexBlue} alt='pokedex' />
                    <img className='pokedex' src={pokedex} alt='pokedex' />
                    <Pokemon pokemon={pokemon.slice(0,seeMore)} noType={noType} />
                    {loading ?
                        <div className='loading'>
                            <ReactLoading type="bars" color="#fff" />
                        </div>
                        : ''}
                    <div className='seeMoreBtn'>
                        <button onClick={() => setSeeMore(seeMore + 3)}>LOAD MORE</button>
                    </div>
                    <div>
                        <img style={{position: "absolute",top: 300}} src={pokeball} />
                        <img style={{position: "absolute",right: 0,top: 70}} src={pokeball} />
                        <img style={{position: "absolute",right: 270,top: 675}} src={pokeball} />
                        <img style={{position: "absolute",left: 0,bottom: 250}} src={pokeball} />
                    </div>
                </div>
            </div>
            <MainFooter />
        </div>
    )
}

export default Homepage