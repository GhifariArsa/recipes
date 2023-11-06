const { createContext, useContext, useState } = require("react");

const IngredientContext = createContext();

export function useIngredients() {
    return useContext(IngredientContext);
}

export function IngredientProvider({ children }) {
    const [ingredients, setIngredients] = useState([]);

    return (
        <IngredientContext.Provider value={{ingredients, setIngredients}}>
            {children}
        </IngredientContext.Provider>
    )
}

