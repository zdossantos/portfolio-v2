import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

const ThemeContext = createContext({
    theme: 'light' as Theme,
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light')

    useEffect(() => {
        // Vérifie les préférences système
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

        const updateTheme = (e: MediaQueryListEvent | MediaQueryList) => {
            const newTheme = e.matches ? 'dark' : 'light'
            setTheme(newTheme)
            document.documentElement.classList.toggle('dark', e.matches)
        }

        // Initial check
        updateTheme(mediaQuery)

        // Listen for changes
        mediaQuery.addEventListener('change', updateTheme)

        return () => mediaQuery.removeEventListener('change', updateTheme)
    }, [])

    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)