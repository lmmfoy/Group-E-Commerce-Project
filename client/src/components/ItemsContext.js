import { createContext, useState, useEffect} from "react";

export const ItemsContext = createContext(null);
export const ItemsProvider = ({children}) => {
    //variable to store selected category value
    const [selectedCaregory, setSelectedCategory] = useState("");
    //variable to manipulate the quantity of items placed in the cart
    const [numCartItems, setNumCartItems] = useState(0);
    return(
        <ItemsContext.Provider value={{
            selectedCaregory, setSelectedCategory, numCartItems, setNumCartItems
        }}>
            {children}
        </ItemsContext.Provider>

    )
}