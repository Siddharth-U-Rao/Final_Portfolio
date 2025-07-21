import { useEffect, useState } from "react"
import {Moon, Sun} from "lucide-react"
import { cn } from "../lib/utils";

export const ThemeToggle=()=>{
    const[isDarkMode,setDarkmode]=useState(false);
    useEffect(()=>{
    const storedtheme=localStorage.getItem("theme");
    if(storedtheme==="dark"){
        setDarkmode(true);
        document.documentElement.classList.add("dark");
    }
    else{
        localStorage.setItem("theme","light");
        setDarkmode(false);
    }
    },[])
    const ToggleTheme=()=>{
       if(isDarkMode){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme","light");
        setDarkmode(false);
       }
       else{
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme","dark");
        setDarkmode(true);
       }
    }
    return(
    <button onClick={ToggleTheme}  className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-none"
            )}>
            {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-900"/>}
        </button>
    );
};