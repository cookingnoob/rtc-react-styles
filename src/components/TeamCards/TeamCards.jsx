import { Button, Card, CardBody, CardHeader, Img, Spinner, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import DeleteBtn from './DeleteBtn'
import useAPI from '../../hooks/useAPI/useAPI'

const TeamCards = ({pokemonName, index}) => {
  
  const {loading, pokemonData} = useAPI(pokemonName)


  if(!loading && !pokemonData) return <Text>No hay informacion</Text>
  if(loading === true && pokemonData !== null) return <Spinner id='spinner'></Spinner>
  if(loading === false && pokemonData === 'error') return <Text>Hubo un problema con el servidor</Text>
  if(loading === false && pokemonData !== null) return (
    <Card>
      <CardHeader>{pokemonData.name}</CardHeader>
      <CardBody>
        <Img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
        <DeleteBtn index={index} />
      </CardBody>
    </Card>
  )
}

export default TeamCards