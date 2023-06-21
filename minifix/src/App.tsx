
import { RouterProvider , createBrowserRouter} from 'react-router-dom';
import './App.css'
import Landing from './views/Landing/Landing';
import Products from './views/Products/Products';

function App() {
  const router = createBrowserRouter([
    {
    path:'/',
    element: <Landing/>,
  },
  {
    path:'/produkter',
    element: <Products/>
  }
]);
 

  return (
 <div className='App'>
  <RouterProvider router= {router}/>
 </div>
  )
}

export default App
