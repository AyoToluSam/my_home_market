import { useLocalStorage } from '@/utilities/useLocalStorage'
import { createContext, useContext, useState, useEffect} from 'react'


//Creating a context to handle all the information about the cart,
//and pass through all the components of the application using the provider.

const CartContext = createContext()

//The function below when called, will return a useContext hook with the 
//above created context already passed into it. The useContext hook
//will in turn return all the values passed into the provider.

export const useCart = () => {
  return (
    useContext(CartContext)
  )
}

//A wrapper component that returns the context provider. This is useful 
//for passing other components or data to the context provider.

export const CartProvider = ({children}) => {
    
  const [data, setData] = useState([]);

  //Fetching the data from the API endpoint and saving it in the above state.
  //This is to provide the data to the whole application using the context.

  const getData = async () => {
    const res = await fetch("https://63f78f6ee8a73b486afaedef.mockapi.io/products");
    const data = await res.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, [])
  
//The state below handles the opening and closing of the cart button

  const [isOpen, setIsOpen] = useState(false)
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

//The custom hook below is defined in the utilities folder. It handles 
//the state of the items in the cart and persists the state by saving it 
//to the local storage.

  const [cartItems, setCartItems] = useLocalStorage("Shopping Cart", [])

//The functions below are explained as named. They are passed as context
//to the provider.

  const getItemQuantity = (id) => {
    return cartItems?.find(item => item.id === id)?.quantity || 0
  }

  const increaseItemQuantity = (id) => {
    setCartItems( cartItems => {
      if (!cartItems) {
        return [{id, quantity: 1}]
      }
      else if (cartItems.find(item => item.id === id) == null) {
        return [...cartItems, {id, quantity: 1}]
      } else {
        return cartItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity + 1}
          }
          return item
        })
      }
    })
  }

  const decreaseItemQuantity = (id) => {
    setCartItems( cartItems => {
      if (cartItems.find(item => item.id === id)?.quantity === 1) {
        return cartItems.filter(item => item.id !== id)
      } else {
        return cartItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity - 1}
          }
          return item
        })
      }
    })
  }

  const removeFromCart = (id) => {
    setCartItems( cartItems => {
      return cartItems.filter(item => item.id !== id)
    })
  }

  const removeAll = () => {
    setCartItems([]);
  }

  const getCartQuantity = () => {
    if (!cartItems) {
      return 0;
    }
    return cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
  }

  const cartQuantity = getCartQuantity()

  return (
    <CartContext.Provider 
      value={{
        getItemQuantity, 
        increaseItemQuantity, 
        decreaseItemQuantity, 
        removeFromCart,
        removeAll, 
        isOpen,
        openCart, 
        closeCart, 
        cartQuantity, 
        cartItems,
        data
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

