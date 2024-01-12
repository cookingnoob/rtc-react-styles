import { describe, expect, it, test, vitest } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Main from './Main'
/**
* @vitest-environment jsdom
*/

describe('Main component', () => {

    it('renders a title', () => {
        render(<Main/>)
        const title = screen.getByRole('heading', {name: /crea tu equipo pokemon/i})

        expect(title).toBeInTheDocument()
    })

    it('renders a text', () => {
        render(<Main />)
        const text = screen.getByText('Esta aplicación, desarrollada en React y estilizada con Chakra UI, ofrece una experiencia única para los fanáticos de Pokémon. Permite a los usuarios crear y personalizar su propio equipo de seis Pokémon, asegurando una interacción amigable y dinámica. Además, está meticulosamente probada con Vitest para garantizar su funcionalidad óptima')
        expect(text).toBeInTheDocument()
    })

})