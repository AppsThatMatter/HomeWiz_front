import { Routes, Route, Navigate, useNavigate, useLocation, Outlet } from 'react-router-dom';

import { history } from './helpers/history';
import  PrivateRoute  from './components/PrivateRoute';
import Nav from './components/Nav';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <div>
       <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Outlet/>
              <Nav />
              </PrivateRoute>
          }
        >
          <Route path="/" element={<Home/>} />
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>
    </div>

  );
}


export default App