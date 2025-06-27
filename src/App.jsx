import './App.css'
import LandingPage from './pages/LandingPage'
import RegistrationPage from "./auth/LoginUp"
import LogingPage from "./auth/LogingIn"
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Valid from './auth/validattion'
import ShowProduit from './components/showProduits'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage></LandingPage>}></Route>
          <Route index element={<LandingPage></LandingPage>}></Route>
          <Route path='/register' element={<RegistrationPage/>}></Route>
          <Route path='/login' element={<LogingPage/>}></Route>
          <Route path='/home' element={<Valid><Home/></Valid>}></Route>
          <Route path='/produits/:id' element={<ShowProduit/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
