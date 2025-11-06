import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate=useNavigate();

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    const cartData = { ...cartItems }; // shallow copy

    if (!cartData[itemId]) cartData[itemId] = {};
    if (!cartData[itemId][size]) cartData[itemId][size] = 0;

    cartData[itemId][size] += 1;

    setCartItems(cartData);
    toast.success("Added to cart!");
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce(
      (total, sizes) =>
        total +
        Object.values(sizes).reduce((sum, qty) => sum + qty, 0),
      0
    );
  };

  const updateQuantity =async(itemId,size,quantity)=>{
           let cartData=structuredClone(cartItems);
           cartData[itemId][size]=quantity;

           setCartItems(cartData);
  }

   const getCartAmount= () =>{
    let totalAmount=0;
    for( const items in cartItems){
      let itemInfo=products.find((product)=> product._id === items);
      for(const item in cartItems[items]){
        try{
          if(cartItems[items][item]>0){
            totalAmount += itemInfo.price* cartItems[items][item];
          }
        } catch(error){

        }
      }
    }

    return totalAmount;
   }
  return (
    <ShopContext.Provider
      value={{
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
