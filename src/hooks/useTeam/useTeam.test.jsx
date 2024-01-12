import { describe, expect, it, test, vitest } from 'vitest'
import { render, renderHook, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useTeam from './useTeam'
import { act } from '@testing-library/react-hooks'

/**
* @vitest-environment jsdom
*/

describe('use team hook', () => { 
    it('starts with six elements', () => {
        const expectedTeam = ['pikachu', 'gengar', 'charizard', 'psyduck', 'magikarp', 'meowth']
        const {result} = renderHook(useTeam)
        expect(result.current.pokemonTeam).toEqual(expectedTeam)
    })

    it('adds a pokemon', () => {
        const initialTeam = ['squirtle', 'bulbasaur']
        const {result} = renderHook(() => useTeam(initialTeam))
        const expectedTeam = ['squirtle', 'bulbasaur', 'meowth']
        act(() => result.current.addPokemon('meowth'))
        expect(result.current.pokemonTeam).toEqual(expectedTeam)
    })
    it.todo('saves the team in localStorage', () => {

    })
    it('doesnt let you add a pokemon if the team has 6 members', () => {
        const expectedTeam = ['pikachu', 'gengar', 'charizard', 'psyduck', 'magikarp', 'meowth']
        const {result} = renderHook(useTeam)
        act(() => result.current.addPokemon('bulbasaur'))
        expect(result.current.pokemonTeam).toEqual(expectedTeam)
    })
    
    it('deletes first pokemon from the team', () => {
        const expectedTeam = ['gengar', 'charizard', 'psyduck', 'magikarp', 'meowth']
        const {result} = renderHook(useTeam)
        act(() => result.current.deletePokemon(0))
        expect(result.current.pokemonTeam).toEqual(expectedTeam)
    })
    it('deletes second element from array and return the new array', () => {
        const expectedValue = ['pikachu','charizard', 'psyduck', 'magikarp', 'meowth']
        const {result} = renderHook(useTeam)
        act(() => result.current.deletePokemon(1))
        expect(result.current.pokemonTeam).toEqual(expectedValue)
    })

    it('deletes third element from array and return the new array', () => {
        const expectedValue = ['pikachu', 'gengar', 'psyduck', 'magikarp', 'meowth']
        const {result} = renderHook(useTeam)
        act(() => result.current.deletePokemon(2))
        expect(result.current.pokemonTeam).toEqual(expectedValue)
    })

     it('deletes fourth element from array and returns', () => {
         const expectedValue = ['pikachu', 'gengar', 'charizard','magikarp', 'meowth']
         const {result} = renderHook(useTeam)
         act(() => result.current.deletePokemon(3))
         expect(result.current.pokemonTeam).toEqual(expectedValue)
     })
    it('deletes fifth element from array and returns', () => {
         const expectedValue = ['pikachu', 'gengar', 'charizard', 'psyduck', 'meowth']
         const {result} = renderHook(useTeam)
         act(() => result.current.deletePokemon(4))
         expect(result.current.pokemonTeam).toEqual(expectedValue)
     })
     it('deletes sixth element from array and returns', () => {
         const expectedValue = ['pikachu', 'gengar', 'charizard', 'psyduck', 'magikarp',]
         const {result} = renderHook(useTeam)
         act(() => result.current.deletePokemon(5))
         expect(result.current.pokemonTeam).toEqual(expectedValue)
     })

     it('if the team has more than one of the same pokemon, only one gets deleted', () => {
        const initialTeam = ['pikachu', 'pikachu', 'pikachu', 'pikachu', 'pikachu','pikachu']
        const expectedValue = ['pikachu', 'pikachu', 'pikachu', 'pikachu', 'pikachu',]
        const {result} = renderHook(() => useTeam(initialTeam))
        act(() => result.current.deletePokemon(3))
        expect(result.current.pokemonTeam).toEqual(expectedValue)
    })
 })
