import { Heading, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import TeamCards from './mainComponents/TeamCards'

const Main = () => {
  return (
    <>
    <Heading as={"h1"}>Crea tu equipo pokemon</Heading>
    <Text>Esta aplicación, desarrollada en React y estilizada con Chakra UI, ofrece una experiencia única para los fanáticos de Pokémon. Permite a los usuarios crear y personalizar su propio equipo de seis Pokémon, asegurando una interacción amigable y dinámica. Además, está meticulosamente probada con Vitest para garantizar su funcionalidad óptima</Text>
    <TeamCards/>
    </>
  )
}

export default Main