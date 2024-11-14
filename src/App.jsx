
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Project from './Pages/Project'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Auth/>} />
      <Route path='/register' element={<Auth/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/projects' element={<Project/>} />
      <Route path='*' element={<Navigate to={'/'}/>}/>
      

    </Routes>
      <Footer/>
    </>
  )
}

export default App
