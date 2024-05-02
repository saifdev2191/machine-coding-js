import {useContext, createContext, useState} from "react"

const Theming = createContext()

export const ConsumeContext = () => useContext(Theming)

export const WrapTheme = ({children}) => {
    const [theme, setTheme] = useState("light")

    const changeTheme = () => {
        setTheme(prevState => prevState === "light" ? "dark": "light")
    }
    
    return (
        <Theming.Provider value={{theme, changeTheme}}>
            {children}
        </Theming.Provider>
    )
}