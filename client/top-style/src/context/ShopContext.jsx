import { createContext, useState, useContext } from 'react';

export const ShopContext = createContext();

export const useShopContext = () => useContext(ShopContext);

export function ShopProvider({ children }) {
    const [todos, setTodos] = useState([]);

    // Add your state management functions
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // Return the Provider with your state and functions
    return (
        <ShopContext.Provider value={{
            todos,
            addTodo,
            deleteTodo
        }}>
            {children}
        </ShopContext.Provider>
    );
}