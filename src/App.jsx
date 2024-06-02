import './App.css'
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<SignUp/>}></Route>
    </Routes>
  )
}

export default App
