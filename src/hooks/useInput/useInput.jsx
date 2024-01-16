import React from 'react'

const useInput = (stringToModify) => {
  const newString = typeof stringToModify !== 'string' ? 
                    stringToModify.toString(): stringToModify.toLowerCase()
  return newString
}

export default useInput