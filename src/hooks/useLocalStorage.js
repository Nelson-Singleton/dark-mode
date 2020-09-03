import React, {useState} from 'react'

function useLocalStorage(key, initialValue){
//places a key/value in local storage that can used for conditional logic
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        //if item exists, return it parsed as a function.
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {        
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];
}

export default useLocalStorage






