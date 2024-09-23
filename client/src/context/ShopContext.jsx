import { createContext, useState } from "react";
import { toast } from "react-hot-toast";
import { products } from "../assets/assets";
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const currency = "$";
  const delivery_fee = 10;

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select product size");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let count = 0;
    for (let obj of Object.values(cartItems)) {
      for (let val of Object.values(obj)) {
        count = count + val;
      }
    }
    return count;
  };

  const updateQuantity = (productId, size, quantity) => {
    const cartData = structuredClone(cartItems);
    cartData[productId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const productId in cartItems) {
      const productInfo = products.find((item) => item._id === productId);
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          totalAmount =
            totalAmount + productInfo.price * cartItems[productId][size];
        }
      }
    }
    return totalAmount;
  };

  const value = {
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
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
