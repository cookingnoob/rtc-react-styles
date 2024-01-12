import React, { useEffect, useState } from 'react'

const useAPI = ({pokemonName}) => {
  const[loading, setLoading] = useState(false)
  const[pokemonData, setPokemonData] = useState(null)
  
  return {loading, pokemonData}
}

export default useAPI