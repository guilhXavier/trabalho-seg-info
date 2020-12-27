import { Login, Criptografia } from './ui/screen/'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/criptografia">
            <Criptografia />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  )
}

export default App
