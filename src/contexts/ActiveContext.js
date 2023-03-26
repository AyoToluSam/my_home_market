import { createContext, useContext, useState} from 'react'
import { useRouter } from 'next/router'

const activeContext = createContext()

export const useActive = () => {
  return useContext(activeContext)
}

export const ActiveProvider = ({children}) => {

  const router = useRouter()

  const [active, setActive] = useState(() => {
    if (router.pathname === "/") {
      return 1
    }
    else if (router.pathname === "/Market") {
      return 2
    }
    else if (router.pathname === "/sell") {
      return 3
    }
    else if (router.pathname === "/About") {
      return 4
    }
  })

  return (
    <activeContext.Provider
    value={{active, setActive}}
    >
      {children}
    </activeContext.Provider>
  )
}
