import {createContext,useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState([])

    const addItem = (productToAdd) => {

      if(!prodInCart(productToAdd.id)){
        setCart([...cart,productToAdd])  
      }else {
        const newCart = cart.map(prod => {
          if(prod.id === productToAdd.id) {
            const newProduct = {
                ...prod, count : productToAdd.count
            }
            return newProduct
          } else{
            return prod
          }
        })

        setCart(newCart)
      }
       
    }

    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
          accu += prod.count
        })
        return accu
      }

      const prodInCart = (id) => {
        return cart.some(prod => prod.id ===id)

      }

      const getProductQuantity = (id) => {
        return cart.find(prod => prod.id === id)
      
      }

      const removeItem = (id) => {
       const newCart = cart.filter(prod => prod.id !==id)
       setCart(newCart)
      }
      
      const clearCart = () => {
        setCart([])
    }
     
     return <CartContext.Provider value={{cart, addItem, getQuantity, getProductQuantity,removeItem, clearCart}}>
          {children}
      </CartContext.Provider>
}


export default CartContextProvider