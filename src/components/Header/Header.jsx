import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import useAPI from '../../hooks/useAPI/useAPI'

const Header = () => {
  const [pokemonToSearch, setPokemonToSearch] = useState(null)


  const handleInput = (pokemonToSearch) => {
    console.log(pokemonToSearch)
  }

  return (
    <Box>
        <Input placeholder='Busca un pokemon por su nombre' onChange={setPokemonToSearch(e.target.value)}></Input>
        <Button onClick={handleInput}>Buscar</Button>
    </Box>
  )
}

export default Header