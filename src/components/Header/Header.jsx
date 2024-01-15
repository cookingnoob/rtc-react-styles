import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import useAPI from '../../hooks/useAPI/useAPI'

const Header = () => {
  const [pokemonToSearch, setPokemonToSearch] = useState(null)
  useAPI(pokemonToSearch)
  const handleInput = (textInput) => {
    if(pokemonToSearch === null){
      return
    } 
    setPokemonToSearch(textInput)
  }


  return (
    <Box>
        <Input placeholder='Busca un pokemon por su nombre'></Input>
        <Button onClick={handleInput}>Buscar</Button>
    </Box>
  )
}

export default Header