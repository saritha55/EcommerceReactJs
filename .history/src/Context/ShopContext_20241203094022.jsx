import React from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{

    const contextValue = {all_product};

    return (

        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>


    )

}