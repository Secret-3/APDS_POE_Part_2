import Sidebar from './Components/AdminDashboard/Sidebar/Sidebar';
import RightSide from './Components/AdminDashboard/RigtSide/RightSide';
import './App.css';
import Overview from './Components/Overview/Overview';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import MainDash from './Components/AdminDashboard/MainDash/MainDash';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

// Protected Route Component defined in the same file
const ProtectedRoute = ({ children, adminRequired = false }) => {
  const { isAuthenticated, userData } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (adminRequired && userData?.role !== 'admin') {
    return <Navigate to="/user-dashboard" />;
  }

  return children;
};

// Create router
const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/overview',
    element: (
      <ProtectedRoute>
        <Overview />
      </ProtectedRoute>
    )
  },
  {
    path: '/admin-dashboard',
    element: (
      <ProtectedRoute adminRequired>
        <div className="App">
          <div className="AppGlass">
            <Sidebar />
            <MainDash />
            <RightSide />
          </div>
        </div>
      </ProtectedRoute>
    )
  },
  {
    path: '/user-dashboard',
    element: (
      <ProtectedRoute>
        <Overview />
      </ProtectedRoute>
    )
  }
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;