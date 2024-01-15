import { describe, expect, it, test, vi, vitest } from 'vitest'
import { getByRole, render, renderHook, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'
import useAPI from '../../hooks/useAPI/useAPI'

/**
* @vitest-environment jsdom
*/


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
    it.todo('search button sends pokemon name to the useAPI hook', async () => {
        render(<Header/>)

        const searchBar = screen.getByPlaceholderText(/busca un pokemon por su nombre/i)
        const searchButton = screen.getByRole('button', {name: /buscar/i})
        await  userEvent.type(searchBar, 'psyduck')
        await userEvent.click(searchButton)
        expect(useAPI).toHaveBeenCalledWith('psyduck')
    })
})