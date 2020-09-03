import useLocalStorage from './useLocalStorage'

function useDarkMode(key, value) {
//sets state to local storage
    const [darkMode, setDarkMode] = useLocalStorage(key, value)
    return [darkMode, setDarkMode]    
}

export default useDarkMode