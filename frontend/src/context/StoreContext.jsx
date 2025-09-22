import { createContext, useEffect, useState } from 'react';
import axios from 'axios'
import './StoreContext.css';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000"
    const [token, setToken] = useState("");
    const [sweet_list, setSweetList] = useState([])

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const count = (prev[itemId] || 0) - 1;
            if (count <= 0) {
                const { [itemId]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [itemId]: count };
        });
    }

    

    const getTotalCartAmount = () => {
        let total = 0;
        for (const id in cartItems) {
            const item = sweet_list.find(s => s._id === id);
            if (item) total += item.price * cartItems[id];
        }
        return total;
    }

    const fetchSweetList = async () => {
        const response = await axios.get(`${url}/api/sweet/list`);
        setSweetList(response.data.data || [])
    }

    useEffect(()=>{
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
        }
        async function loadData() {
            await fetchSweetList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])

    const contextValue = {
        sweet_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;