import React, { useEffect, useState } from 'react'

const useAPI = (pokemonName) => {
  const[loading, setLoading] = useState(false)
  const[pokemonData, setPokemonData] = useState(null)
  
  useEffect(() => {
    const getPokemon = async () => {
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
    getPokemon()
  }, [])

  return {loading, pokemonData}
}

export default useAPI