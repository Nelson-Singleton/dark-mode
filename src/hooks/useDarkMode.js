import useLocalStorage from './useLocalStorage'

function useDarkMode() {

    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', "value")

    return [darkMode, setDarkMode]
    
    
}

export default useDarkMode