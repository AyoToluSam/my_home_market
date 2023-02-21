import {useState, useEffect} from 'react'

export const useLocalStorage = (key, initialValue) => {
  
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const jsonValue = localStorage.getItem(key)
      console.log(jsonValue)
      if (jsonValue !== "undefined") return JSON.parse(jsonValue)
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    if (typeof window!== "undefined") {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [key, value])
  
  return [value, setValue]
}