import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/Root';

//1st way
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <Products /> }
    ]
  },
])

//alternative-old way of defining routes
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>} />
//     <Route path='/products' element={<Products/>} />
//   </Route>
// )
// const router = createBrowserRouter(routeDefinitions)

const App = () => {
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
