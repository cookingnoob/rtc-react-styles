import { describe, expect, it, test, vi, vitest } from 'vitest'
import { getByRole, render, renderHook, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DeleteBtn from './DeleteBtn'
import useTeam from '../../hooks/useTeam/useTeam'

/**
* @vitest-environment jsdom
*/
vi.mock('../../hooks/useTeam/useTeam.jsx', async () => ({
    default: vi.fn().mockReturnValue({
        pokemonTeam: ['pikachu', 'gengar', 'charizard', 'psyduck', 'magikarp', 'meowth'],
        addPokemon: vi.fn(),
        deletePokemon: vi.fn()
    })
}))
describe('delete button component', () => {
    it('calls deletepokemon when clicked', async () => {
        const index = 0
        render(<DeleteBtn index={index} />)
        const deleteBtn = document.getElementById(`delete-${index}`)
        expect(deleteBtn).toBeInTheDocument()
        await userEvent.click(deleteBtn)
        expect(useTeam().deletePokemon).toHaveBeenCalledWith(index)
    })
})