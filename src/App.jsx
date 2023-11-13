import React, { useEffect, useState } from 'react'
import './App.css';
import { SkeletonTheme } from 'react-loading-skeleton';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/HomePage/Home';
import Layout from './Components/Layout/Layout';
import NotFound from './Pages/NotFound/NotFound';
const LazyAbout = React.lazy(() => import ('./Pages/About/About'));
const LazyLogin = React.lazy(() => import ('./Pages/Login/Login'));
const LazyRegister = React.lazy(() => import ('./Pages/Register/Register'));



function App() {

  const [userData, setuserData] = useState(null)
  const [userDataImg, setuserDataImg] = useState(null)
  function saveUserData() {
    let Token = localStorage.token
    setuserData(Token)
    setuserDataImg(Token.image)
  }
  
  useEffect(()=> {
    if (localStorage.getItem('token') !== null && userData === null) {
      saveUserData()
    }
  }, [])


  const router = createBrowserRouter([
    { 
    path: '', 
    element: <Layout />, 
    children: [
      {path: '', element: <Home/>},
      {path: 'about', element: <React.Suspense> <LazyAbout/> </React.Suspense>},
      {path: 'login', element: <React.Suspense> <LazyLogin saveUserData ={saveUserData}/> </React.Suspense>},
      {path: 'register', element: <React.Suspense> <LazyRegister saveUserData ={saveUserData}/> </React.Suspense>},
      {path: '*', element: <NotFound/>}
  ]},
])
  return (

    <>
    <SkeletonTheme baseColor="#306c62" highlightColor="#f8b401">
      <RouterProvider router={router}/>
    </SkeletonTheme>
    </>

  );
}

export default App;
