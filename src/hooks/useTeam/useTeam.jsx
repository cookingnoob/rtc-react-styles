import React, { useState } from 'react'

const useTeam = (initialTeam =['pikachu', 'gengar', 'charizard', 'psyduck', 'magikarp', 'meowth'] ) => {
    const [pokemonTeam, setPokemonTeam] = useState(initialTeam)

    const addPokemon = (newPokemon) => {
        if(pokemonTeam.length === 6) return 
        setPokemonTeam([...pokemonTeam, newPokemon])
    }

    const deletePokemon = (pokemonIndex) => {
        const arrayAfterDelete = pokemonTeam.filter((pokemon, index) => index !== pokemonIndex)
        setPokemonTeam(arrayAfterDelete)
    }

  return {pokemonTeam, addPokemon, deletePokemon}
}

export default useTeam