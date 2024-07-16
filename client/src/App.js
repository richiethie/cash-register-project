import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// import Search from './pages/search'
// import Trainer from './pages/trainer'
// import Login from './pages/login' 

import Navbar from "./components/navbar"

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Screen>
          <Routes>
            {/* <Route path='/' element={<Search />} />
            <Route path='/login' element={<Login />} />
            <Route path='/trainer/:id' element={<Trainer />} /> */}
          </Routes>
        </Screen>
    </BrowserRouter>
    
  );
}

export default App;
