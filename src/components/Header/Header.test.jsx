import { describe, expect, it, test, vi, vitest } from 'vitest'
import { getByRole, render, renderHook, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'
import useAPI from '../../hooks/useAPI/useAPI'

/**
* @vitest-environment jsdom
*/
vi.mock('../../hooks/useAPI/useAPI.jsx', async () => ({
    default: vi.fn()
}))

describe('Header component', () => {
    it('renders search bar', () => {
        render(<Header/>)
        const searchBar = screen.getByPlaceholderText(/busca un pokemon por su nombre/i)
        expect(searchBar).toBeInTheDocument()
    })

    it('renders search button', () => {
        render(<Header/>)
        const searchButton = screen.getByRole('button', {name: /buscar/i})
        expect(searchButton).toBeInTheDocument()
    })

    it('can type on the input', async() => {
        render(<Header/>)
        const searchBar = screen.getByPlaceholderText(/busca un pokemon por su nombre/i)
        await  userEvent.type(searchBar, 'psyduck')
        expect(searchBar.value).toBe('psyduck')
    })

    it('search button sends pokemon name to the useAPI hook', async () => {
        useAPI.mockReturnValue({
            loading:false,
            pokemonData: {
                name: 'pikachu',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                }
            }
        })
        render(<Header/>)
        const searchBar = screen.getByPlaceholderText(/busca un pokemon por su nombre/i)
        const searchButton = screen.getByRole('button', {name: /buscar/i})
        expect(searchBar).toBeInTheDocument()
        expect(searchButton).toBeInTheDocument()
        await userEvent.type(searchBar, 'pikachu')
        await userEvent.click()
        expect(useAPI).toHaveBeenCalledWith('pikachu')    
    })
})