import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import useAPI from '../../hooks/useAPI/useAPI'
import useInput from '../../hooks/useInput/useInput'

const Header = () => {
  const [pokemonToSearch, setPokemonToSearch] = useState(null)
  const {handleInput, modifiedString} = useInput()

  const getInputValue = (e) => {
    handleInput(e.target.value)
  }

  return (
    <Box>
        <Input placeholder='Busca un pokemon por su nombre' value={pokemonToSearch} onChange={getInputValue}></Input>
        <Button >Buscar</Button>
    </Box>
  )
}

export default Header