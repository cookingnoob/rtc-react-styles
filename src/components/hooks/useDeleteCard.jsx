import React from 'react'

const useDeleteCard = () => {
    const deletePokemon = (pokemonTeam, pokemonName) => {
        const newTeam = pokemonTeam.filter(pokemon => pokemon !== pokemonName)
        return newTeam
    }
  return {deletePokemon}
}

export default useDeleteCard