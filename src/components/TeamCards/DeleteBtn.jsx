import { Button } from '@chakra-ui/react'
import React from 'react'
import useTeam from '../../hooks/useTeam/useTeam'


const DeleteBtn = ({index}) => {
  const {deletePokemon} = useTeam()
  return (
    <Button id={`delete-${index}`} onClick={() => deletePokemon(index)}>X</Button>
  )
}

export default DeleteBtn