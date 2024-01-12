import { describe, expect, it, test, vitest } from 'vitest'
import { getByRole, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Footer from './Footer'


/**
* @vitest-environment jsdom
*/
describe('Footer component', () => {
    it('renders a text', () => {
        render(<Footer/>)
        const footerText = screen.getByText(/by alan coste/i)
        expect(footerText).toBeInTheDocument()
    })
})
