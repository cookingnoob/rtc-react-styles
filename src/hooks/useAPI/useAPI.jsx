import React, { useEffect, useState } from 'react'

const useAPI = () => {
  const[loading, setLoading] = useState(false)
  const[pokemonData, setPokemonData] = useState(null)
  
    const getPokemon = async (pokemonName) => {
      try{
        setLoading(true)
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const data = await res.json() 
        setPokemonData(data)
      }catch(error){
        setPokemonData('error')
      }finally{
        setLoading(false)
      }
    }


  return {loading, pokemonData, getPokemon}
}

export default useAPI