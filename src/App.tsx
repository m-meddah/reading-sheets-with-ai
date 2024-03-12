import './App.css'
import { AIForm } from './components/AIForm'
import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/theme-provider'

function App() {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <ModeToggle />
      <AIForm />
    </ThemeProvider>
  )
}

export default App
