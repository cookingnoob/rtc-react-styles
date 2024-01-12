import { describe, expect, it, test, vi, vitest } from 'vitest'
import { render, renderHook, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from '@testing-library/react-hooks'
import useAPI from './useAPI'

/**
* @vitest-environment jsdom
*/

describe('use api hook', () => { 
    it('loading status changes to true while fetching', async () => {
        const mockData = {
                name: 'pikachu',
                id: '25',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                }
            }
        vi.spyOn(window, "fetch").mockImplementationOnce(() => {
            return Promise.resolve({
                json: () =>  new Promise(resolve => setTimeout(() => resolve(mockData),5000))
            })
        })
        const {result} = renderHook(useAPI)

        expect(result.current.loading).toBeTruthy()
    })

    it('fetched pokemon data is set as the state and loading is false', async () => {
        const mockData = {
            name: 'pikachu',
            id: '25',
            sprites: {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
            }
        }
        vi.spyOn(window, "fetch").mockImplementationOnce(() => {
            return Promise.resolve({
                json: () =>  Promise.resolve(mockData)
            })
        })
        const {result} = renderHook(() => useAPI('pikachu'))
        await waitFor(() => {
            expect(result.current.pokemonData).toEqual(mockData)
        });
    })

    it('if there was an error, pokemon state is null and loading is false', async() => {
        const mockData = {
            name: 'pikachu',
            id: '25',
            sprites: {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
            }
        }
        vi.spyOn(window, "fetch").mockImplementationOnce(() => {
            return Promise.resolve({
                json: () =>  Promise.reject(mockData)
            })
        })
        const {result} = renderHook(() => useAPI('pikachu'))
        await waitFor(() => {
            expect(result.current.pokemonData).toEqual('error')
        });
    })
})

