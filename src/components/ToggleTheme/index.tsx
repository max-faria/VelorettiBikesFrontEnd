import { useDispatch } from "react-redux"
import React from "react"
import { useAppSelector } from "../../App/hooks";
import { toggleTheme } from "../../Features/Theme/ThemeSlice";

const ThemeToggle:React.FC = () => {
    const dispatch = useDispatch();
    const currentTheme = useAppSelector(state => state.theme.theme)

    return (
        <div>
           <button
           onClick={() => dispatch(toggleTheme())}
           className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
           >{currentTheme === 'light' ? 'Switch to Dark' : 'Switch to Light'}</button>
        </div>
    )  
}

export default ThemeToggle