import { createContext, useState, useEffect} from "react";

export const ItemsContext = createContext(null);
export const ItemsProvider = ({children}) => {
    const [selectedCaregory, setSelectedCategory] = useState("");
    return(
        <ItemsContext.Provider value={{
            selectedCaregory, setSelectedCategory
        }}>
            {children}
        </ItemsContext.Provider>

    )
}