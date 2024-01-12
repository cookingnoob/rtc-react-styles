import { Button } from '@chakra-ui/react'
import React from 'react'
import useDeleteCard from '../hooks/useDeleteCard'

const DeleteBtn = ({pokemonTeam, pokemonName}) => {
    const {deletePokemon} = useDeleteCard()
  return (
    <Button onClick={() => deletePokemon(pokemonTeam, pokemonName)}>X</Button>
  )
}

export default DeleteBtn