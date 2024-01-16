import { describe, expect, it, test, vitest } from 'vitest'
import { render, renderHook, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from '@testing-library/react-hooks'
import useInput from './useInput'

/**
* @vitest-environment jsdom
*/

describe('useInput', () => {
    it('standarizes the string it recieves to lowercase', () => {
        const stringToModify = 'hOlAHolA'
        const expectedResult = 'holahola'
        const {result} = renderHook(() => useInput(stringToModify))
        expect(result.current).toBe(expectedResult)
    })
    it('changes the type of data to text', () => {
        const dataToChange = 3020
        const expectedResult = '3020'
        const {result} = renderHook(() => useInput(dataToChange))
        expect(result.current).toBe(expectedResult)
    })
})