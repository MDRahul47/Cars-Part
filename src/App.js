import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Signup from './Components/Signup/Signup';
import Services from './Components/Services/Services';
import Home from './Components/Home/Home';
import RequarAuth from './Components/RequarAuth/RequarAuth';
import MyOrders from './Components/Myorder/MyOrders';
import MyReviews from './Components/Myreview/MyReviews';
import MyProfile from './Components/Myprofile/MyProfile';
import Dashboard from './Components/Dashboard/Dashboard';


function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={
          <RequarAuth>
            <Services />
          </RequarAuth>
        } />

        <Route path="/signup" element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='/dashboard/myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/myreviews' element={<MyReviews></MyReviews>} ></Route>
          <Route path='/dashboard/myprofile' element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
