
import { RouterProvider , createBrowserRouter} from 'react-router-dom';
import './App.css'
import Landing from './views/Landing/Landing';
import Products from './views/Products/Products';
import AboutUs from './views/AboutUs/AboutUs';
import Contact from './views/Contact/Contact';
import ThankYou from './views/ThankYou/ThankYou';

function App() {
  const router = createBrowserRouter([
    {
    path:'/',
    element: <Landing/>,
  },
  {
    path:'/produkter',
    element: <Products/>
  },
  {
    path:'/omoss',
    element: <AboutUs/>
  },
  {
    path:'/kontakt',
    element: <Contact/>
  },
  {
    path:'/tack',
    element: <ThankYou/>
  }
]);
 

  return (
 <div className='App'>
  <RouterProvider router= {router}/>
 </div>
  )
}

export default App;
