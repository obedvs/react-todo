import { useEffect, useState } from "react";
import { MoonIcon } from "./icons/MoonIcon"
import { SunIcon } from "./icons/SunIcon"

const Header = () => {

  const [darkTheme, setDarkTheme] = useState(localStorage.getItem('theme') === 'dark' || false);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkTheme])

  return (
    <header className="container flex justify-between max-w-4xl px-4 pt-8 mx-auto">
        <h1 className="text-3xl font-bold tracking-[0.25em] text-white uppercase">Todo</h1>
        <button onClick={() => setDarkTheme(!darkTheme)}>
          {
            darkTheme ? <SunIcon /> : <MoonIcon />
          }
        </button>
    </header>
  )
}

export default Header