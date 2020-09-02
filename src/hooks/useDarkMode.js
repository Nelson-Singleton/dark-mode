import useLocalStorage from './useLocalStorage'

function useDarkMode() {

    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', 'someValue')

    return [darkMode, setDarkMode]
    
    
}

export default useDarkMode