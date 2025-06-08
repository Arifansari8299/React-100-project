import React, { useState,useEffect } from "react";
function DarkModeToggle(){
    const[isDark,setIsDark]=useState(()=>{
        return localStorage.getItem("theme") === "dark";
    });
    useEffect(()=>{
        if(isDark){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
        }
        else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    },[isDark])
    return(
        <button onClick={()=> setIsDark(!isDark)} >
            {isDark ? "🌞 Light" : "🌙 Dark"}
        </button>
    )
}
export default DarkModeToggle