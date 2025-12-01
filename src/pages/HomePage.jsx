import { Outlet } from 'react-router-dom'
import Footer from '../components/common/Footer'
import Navbar  from '../components/common/Navbar'
import MainPage from './MainPageContent'

function HomePage() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default HomePage