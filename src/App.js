import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Signup from './Components/Signup/Signup';

import Home from './Components/Home/Home';

import MyOrders from './Components/Myorder/MyOrders';
import MyReviews from './Components/Myreview/MyReviews';
import MyProfile from './Components/Myprofile/MyProfile';
import Dashboard from './Components/Dashboard/Dashboard';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Blog from './Components/Blog/Blog';
import Puches from './Components/Puches/Puches';
import RequarAuth from './Components/RequarAuth/RequarAuth';
// import Alluser from './Components/Admin/Alluser/Alluser';
import AddIteams from './Components/Admin/AddIteams/AddIteams';
import ManageParts from './Components/Admin/ManageParts/ManageParts';
import Makeadmin from './Components/Admin/Makeadmin/Makeadmin';
import Allorders from './Components/Admin/Allorders/Allorders';



function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/puches/:id" element={<RequarAuth>
          <Puches />
        </RequarAuth>} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='/dashboard/myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/myreviews' element={<MyReviews></MyReviews>} ></Route>
          <Route path='/dashboard/makeadmin' element={<Makeadmin></Makeadmin>} ></Route>
          <Route path='/dashboard/allorders' element={<Allorders></Allorders>} ></Route>
          <Route path='/dashboard/addIteams' element={<AddIteams></AddIteams>} ></Route>
          <Route path='/dashboard/myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/manageParts' element={<ManageParts></ManageParts>}></Route>
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
