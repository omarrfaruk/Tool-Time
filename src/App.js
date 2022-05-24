import { Route, Routes } from "react-router-dom";
import AddReview from "./components/Dashboard/AddReview";
import Dashboard from "./components/Dashboard/Dashboard";
import MyOrders from "./components/Dashboard/MyOrders";
import MyProfile from "./components/Dashboard/MyProfile";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Purchase from "./components/Purchase/Purchase";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import NotFound from "./components/Shared/NotFound";
import RequireAuth from "./components/Shared/RequireAuth";


function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
          <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<MyOrders />}></Route>
            <Route path="myprofile" element={<MyProfile />}></Route>
            <Route path="addreview" element={<AddReview />}></Route>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        {/* <Footer></Footer> */}
      </Navbar>
    </div>
  );
}

export default App;
