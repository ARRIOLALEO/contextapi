import './App.css'
import { Counter } from './components/Counter'
import { AddOne } from './components/AddOne'
import { CounterProvider } from './context/counterContext'
import { ManagerTheme } from './components/manageTheTemplate/ManageTheTemplate'
function App() {

  return (
    <div>
      <ManagerTheme/>
      <CounterProvider>
      <Counter />
      <AddOne />
      </CounterProvider>
    </div>
  )
}

export default App
