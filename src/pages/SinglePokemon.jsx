import React,{useEffect} from 'react'
import {useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Pokemon from '../components/Pokemon'


function SinglePokemon() {

    const {name} = useParams()

    const [singlePokemon,setSinglePokemon] = useState([])

    useEffect(() => {
        fetchSingle()
    },[])

    const fetchSingle = async () => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
            const newArray = [...singlePokemon,res.data]
            setSinglePokemon(newArray)
        }).catch((err) => {
            console.log(err)
        })
    }

    const singleContainer = {
        maxWidth: 500,
        margin: 'auto',
        marginTop: 50
    }


    return (
        <div style={singleContainer}>
            <Pokemon pokemon={singlePokemon} />
        </div>
    )
}

export default SinglePokemon