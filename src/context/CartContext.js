import {createContext,useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState([])

    const addItem = (productToAdd) => {
        setCart([...cart,productToAdd])
    }

    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
          accu += prod.count
        })
        return accu
      }
      return <CartContext.Provider value={{cart, addItem, getQuantity}}>
          {children}
      </CartContext.Provider>
}


export default CartContextProvider