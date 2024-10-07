import './App.css';
import Overview from './Components/Overview/Overview';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

// Import React Router components
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// Create a router
const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />  // Use direct component
  },
  {
    path: '/',
    element: <Login />  // Use direct component
  },
  {
    path: '/register',
    element: <Register />  // Use direct component
  },
  {
    path: '/overview',
    element: <Overview />  // Use direct component
  },
]);

function App() {
  return (
    <div>
    <RouterProvider router={router} />  // Use RouterProvider for routing
    </div>
  )
}

export default App;


/*import './App.css';
import Overview from '../Components/Overview/Overview';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';

//Impact React react 
import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

//Letcs create a router
const router = createBrowserRouter([
  {
    path: '/login',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/overview',
    element: <div><Overview/></div>
  },

])
function App(){
  return(
    <div>
      <Overview/>
      <Login/>
      <Register/>
    </div>
  )
}

export default App
/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
