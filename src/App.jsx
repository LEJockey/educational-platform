import React from 'react'
import './App.css';
import { SkeletonTheme } from 'react-loading-skeleton';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/HomePage/Home';
import Layout from './Components/Layout/Layout';
import NotFound from './Pages/NotFound/NotFound';
const LazyAbout = React.lazy(() => import ('./Pages/About/About'));



function App() {

  const router = createBrowserRouter([
    { 
    path: '', 
    element: <Layout />, 
    children: [
      {path: '', element: <Home/>},
      {path: 'about', element: <React.Suspense> <LazyAbout/> </React.Suspense>},
      
      {path: '*', element: <NotFound/>}
  ]},
])
  return (

    <>
    <SkeletonTheme baseColor="#C6A467" highlightColor="#B86C0C">
      <RouterProvider router={router}/>
    </SkeletonTheme>
    </>

  );
}

export default App;
