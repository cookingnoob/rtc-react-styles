import { describe, expect, it, test, vitest } from 'vitest'
import { getByRole, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'

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
})