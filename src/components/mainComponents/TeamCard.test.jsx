import { describe, expect, it, test, vi, vitest } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TeamCards from './TeamCards'
import useDeleteCard from '../hooks/useDeleteCard'

/**
* @vitest-environment jsdom
*/
describe('TeamCards component', () => {
    it('renders spinner when the data is loading', () => {
        const pokemonData = {
            name: 'pikachu',
            id: '25',
            sprites: {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
            }
        }
        render(<TeamCards loading={true} pokemonData={pokemonData}/>)
        const spinner = document.getElementById('spinner')
        expect(spinner).toBeInTheDocument()
    })
    it('renders error message', () => {
        render(<TeamCards loading={false} pokemonData={null}/>)
        const errorMessage = screen.getByText(/hubo un problema/i)
        expect(errorMessage).toBeInTheDocument()
    })

    it('renders pokemon name', () => {
        const pokemonData = {
            name: 'pikachu',
            id: '25',
            sprites: {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
            }
        }
        render(<TeamCards loading={false} pokemonData={pokemonData}/>)
        const pokemonName = screen.getByText(/pikachu/i)
        expect(pokemonName).toBeInTheDocument()
    })

    it('renders pokemon sprite', () => {
        const pokemonData = {
            name: 'pikachu',
            id: '25',
            sprites: {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
            }
        }
        render(<TeamCards loading={false} pokemonData={pokemonData}/>)
        const pokemonSprite = screen.getByAltText('pikachu')
        expect(pokemonSprite).toBeInTheDocument()
    })

    it('renders delete button', () => {
        const pokemonData = {
            name: 'pikachu',
            id: '25',
            sprites: {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
            }
        }
        render(<TeamCards loading={false} pokemonData={pokemonData}/>)
        const deleteButton = screen.getByRole('button', {name: /x/i})
        expect(deleteButton).toBeInTheDocument()
    })

    it('tries to fetch the data with useAPI', async () => {
        const mockResponse = {
            name: 'pikachu',
            id: '25',
            sprites: {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
            }
        }
        vi.spyOn(window, "fetch").mockImplementationOnce(() => {
            return Promise.resolve({
                json: () => Promise.resolve(mockResponse) })
        })
    })
})

//tengo que cambiar el pokemonData de pasar en props a ser invocado en una funcion como ayer
//const pokemonData = useAPI() 
//useAPI es la funcion que va a tener el mock