import { Button, Card, CardBody, CardHeader, Img, Spinner, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import useDeleteCard from '../hooks/useDeleteCard'
import DeleteBtn from './DeleteBtn'


const TeamCards = ({loading, pokemonData, index}) => {

  const handleClick= (pokemonTeam, index) => {
    const teamAfterDelete = useDeleteCard(pokemonTeam, index)
    // setPokemonTeam(teamAfterDelete)
  }


  if(loading === true && pokemonData !== null) return <Spinner id='spinner'></Spinner>
  if(loading === false && pokemonData === null) return <Text>Hubo un problema</Text>
  if(loading === false && pokemonData !== null) return (
    <Card>
      <CardHeader>{pokemonData.name}</CardHeader>
      <CardBody>
        <Img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>

        <DeleteBtn/>

      </CardBody>
    </Card>
  )
}

export default TeamCards