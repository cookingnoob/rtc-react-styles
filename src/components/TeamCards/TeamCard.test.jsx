import { describe, expect, it, test, vi, vitest } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TeamCards from './TeamCards'
import useAPI from '../../hooks/useAPI/useAPI'


/**
* @vitest-environment jsdom
*/
vi.mock('../../hooks/useAPI/useAPI.jsx', async () => ({
    default: vi.fn()
}))

describe('TeamCards component', () => {
    it('calls use api with correct pokemon name', () => {
        useAPI.mockReturnValue({
            loading:false,
            pokemonData: {
                name: 'pikachu',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                }
            }
        })
        const pokemonName = 'pikachu'
        render(<TeamCards pokemonName={pokemonName} index={0}/>)
    
        expect(useAPI).toHaveBeenCalledWith(pokemonName)
    })

    it('renders spinner when the data is loading', () => {
        useAPI.mockReturnValue({
            loading:true,
            pokemonData: {
                name: 'pikachu',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                }
            }
        })
        const pokemonName = 'pikachu'
        render(<TeamCards pokemonName={pokemonName} index={0}/>)
        const spinner = document.getElementById('spinner')
        expect(spinner).toBeInTheDocument()
    })
    
    it('renders error message', () => {
        useAPI.mockReturnValue({
            loading:false,
            pokemonData: 'error'
        })
        const pokemonName = 'pikachu'
        render(<TeamCards pokemonName={pokemonName} index={0}/>)
        const errorMessage = screen.getByText(/hubo un problema/i)
        expect(errorMessage).toBeInTheDocument()
    })

    it('renders pokemon name', () => {
        useAPI.mockReturnValue({
            loading:false,
            pokemonData: {
                name: 'pikachu',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                }
            }
        })
        const pokemonName = 'pikachu'
        render(<TeamCards pokemonName={pokemonName} index={0}/>)
        const fetchedPokemon = screen.getByText(/pikachu/i)
        expect(fetchedPokemon).toBeInTheDocument()
    })

    it('renders pokemon sprite', () => {
        useAPI.mockReturnValue({
            loading:false,
            pokemonData: {
                name: 'pikachu',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                }
            }
        })
        const pokemonName = 'pikachu'
        render(<TeamCards pokemonName={pokemonName} index={0}/>)
        const pokemonSprite = screen.getByAltText('pikachu')
        expect(pokemonSprite).toBeInTheDocument()
    })

    it('renders delete button', () => {
        useAPI.mockReturnValue({
            loading:false,
            pokemonData: {
                name: 'pikachu',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                }
            }
        })
        const pokemonName = 'pikachu'
        render(<TeamCards pokemonName={pokemonName} index={1}/>)
        const deleteButton = document.getElementById('delete-1')
        expect(deleteButton).toBeInTheDocument()
    })
    
    it('renders problem message if there is no loading or data', () => {
        useAPI.mockReturnValue({
            loading:null,
            pokemonData: null
        })
        const pokemonName = 'pikachu'
        render(<TeamCards pokemonName={pokemonName} index={0}/>)
        expect(screen.getByText('No hay informacion')).toBeInTheDocument()
    })
 
})