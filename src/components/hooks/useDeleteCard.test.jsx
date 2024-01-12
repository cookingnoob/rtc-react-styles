import { describe, expect, it, test, vitest } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useDeleteCard from './useDeleteCard'


/**
* @vitest-environment jsdom
*/

describe('useDeleteCard', () => {
    const {deletePokemon} = useDeleteCard()
    it('deletes first from an array and returns the new array', () => {
        const {deletePokemon} = useDeleteCard()
        const pokemonTeam = ['pikachu', 'gengar', 'charizard', 'psyduck', 'magikarp', 'meowth']
        const expectedValue = ['gengar', 'charizard', 'psyduck', 'magikarp', 'meowth']
        const actualValue = deletePokemon(pokemonTeam, 'pikachu')
        expect(actualValue).toEqual(expectedValue)
    })
    it('deletes second element from array and return the new array', () => {
        const pokemonTeam = ['pikachu', 'gengar', 'charizard', 'psyduck', 'magikarp', 'meowth']
        const expectedValue = ['pikachu','charizard', 'psyduck', 'magikarp', 'meowth']
        const actualValue = deletePokemon(pokemonTeam, 'gengar')
        expect(actualValue).toEqual(expectedValue)
    })
    it('deletes third element from array and returns', () => {
        const pokemonTeam = ['pikachu', 'gengar', 'charizard', 'psyduck', 'magikarp', 'meowth']
        const expectedValue = ['pikachu', 'gengar', 'psyduck', 'magikarp', 'meowth']
        const actualValue = deletePokemon(pokemonTeam, 'charizard')
        expect(actualValue).toEqual(expectedValue)
    })
    
    it('deletes fourth element from array and returns', () => {
        const pokemonTeam = ['pikachu', 'gengar', 'charizard', 'psyduck', 'magikarp', 'meowth']
        const expectedValue = ['pikachu', 'gengar', 'charizard','magikarp', 'meowth']
        const actualValue = deletePokemon(pokemonTeam, 'psyduck')
        expect(actualValue).toEqual(expectedValue)
    })

    it('deletes fifth element from array and returns', () => {
        const pokemonTeam = ['pikachu', 'gengar', 'charizard', 'psyduck', 'magikarp', 'meowth']
        const expectedValue = ['pikachu', 'gengar', 'charizard', 'psyduck', 'meowth']
        const actualValue = deletePokemon(pokemonTeam, 'magikarp')
        expect(actualValue).toEqual(expectedValue)
    })
    it('deletes sixth element from array and returns', () => {
        const pokemonTeam = ['pikachu', 'gengar', 'charizard', 'psyduck', 'magikarp', 'meowth']
        const expectedValue = ['pikachu', 'gengar', 'charizard', 'psyduck', 'magikarp',]
        
        const actualValue = deletePokemon(pokemonTeam, 'meowth')
              
        expect(actualValue).toEqual(expectedValue)
    })
} )