import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetails from './pages/ProductDetails';

//1st way
const router = createBrowserRouter([
  //list of objects, every object defines a route
  {
    path: '/',
    element: <RootLayout />,
    // so that RootLayout acts as a wrapper of the below components
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:productID', element: <ProductDetails /> } //dynamic path
    ],
    errorElement: <ErrorPage />
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
