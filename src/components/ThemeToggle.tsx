import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
export default function ThemeToggle() {
  const {
    theme,
    setTheme
  } = useTheme();
  return <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="rounded-full p-2 hover:bg-accent transition-colors" aria-label="Toggle theme">
      {theme === 'light' ? <Moon className="h-5 w-5 text-amber-600" /> : <Sun className="h-5 w-5 text-amber-400" />}
    </button>;
}