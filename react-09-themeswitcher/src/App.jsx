import { useEffect, useState } from 'react'

import './App.css'
import { ThemeProider } from './context/theme'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme =() =>{setThemeMode("light")}
  const darktTheme =() =>{setThemeMode("dark")}

  //change in theme logic
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/*  themBTN*/}
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* card */}
                    </div>
                </div>
            </div>
    </ThemeProider>
  )
}

export default App
