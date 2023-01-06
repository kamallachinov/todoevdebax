import React, { createContext, useContext, useState } from 'react'

const Context = createContext();


const ThemeChangeProvider = ({ children }) => {
    const [todo, setTodo] = useState([])

    const data = {
        todo,
        setTodo
    }

    return (
        <Context.Provider value={data}>{children}</Context.Provider>

    );
}

export default ThemeChangeProvider

export const useTodo = () => useContext(Context)