'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react";

function DarkModeSwitch() {
    
    const {theme ,setTheme} = useTheme();
    const [ currentTheme ,setThemeHandler] = useState<boolean>(true)
    useEffect(()=>{
        setTheme('light')
    },[])

  return (
    <button className="...style goes here " onClick={() => {
        currentTheme ? setTheme('dark') : setTheme('light');
        return setThemeHandler(!currentTheme);
    }} >{currentTheme ? 'Light' : 'Dark'}</button>
  )
}

export default DarkModeSwitch