import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box>
        <Input placeholder='Busca un pokemon por su nombre'></Input>
        <Button>Buscar</Button>
    </Box>
  )
}

export default Header