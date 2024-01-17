import React, { useState } from 'react'

const useInput = () => {
    const [modifiedString, setModifiedString] = useState(null)

    const handleInput = (stringToModify) => {
        const newString = typeof stringToModify !== 'string' ? 
        stringToModify.toString(): stringToModify.toLowerCase()
         setModifiedString(newString)
    }
    return {handleInput, modifiedString}
}

export default useInput