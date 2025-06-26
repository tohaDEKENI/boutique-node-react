import './App.css'
import LandingPage from './pages/LandingPage'
import RegistrationPage from "./auth/LoginUp"
import LogingPage from "./auth/LogingIn"
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage></LandingPage>}></Route>
          <Route index element={<LandingPage></LandingPage>}></Route>
          <Route path='/sing' element={<RegistrationPage/>}></Route>
          <Route path='/con' element={<LogingPage/>}></Route>
        </Routes>
      </Router>
      
      
    </>
  )
}

export default App
