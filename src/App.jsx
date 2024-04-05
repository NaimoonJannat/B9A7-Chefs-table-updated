import './App.css'
import RecipeSection from './Components/RecipeSection/RecipeSection'
import Banner from './Components/banner/banner'
import Header from './Components/header/Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  

  return (
    <div className='w-4/5 mx-auto'>
      <Header></Header>
      <Banner></Banner>
      <RecipeSection></RecipeSection>
      <ToastContainer />
    </div>
  )
}

export default App
