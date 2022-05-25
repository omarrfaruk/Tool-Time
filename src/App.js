import { Route, Routes } from "react-router-dom";
import AddReview from "./components/Dashboard/AddReview";
import Dashboard from "./components/Dashboard/Dashboard";
import ManageProducts from "./components/Dashboard/ManageProducts";
import ManageOrder from "./components/Dashboard/ManageOrder";
import MakeAdmin from "./components/Dashboard/MakeAdmin";
import AddProduct from "./components/Dashboard/AddProduct";
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
import { Toaster } from "react-hot-toast";
import RequireAdmin from "./components/Shared/RequireAdmin";


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
            <Route path="myorders" element={<MyOrders />}></Route>
            <Route index element={<MyProfile />}></Route>
            <Route path="addreview" element={<AddReview />}></Route>
            <Route path="manageorder" element={<ManageOrder />}></Route>
            <Route path="addproduct" element={<AddProduct />}></Route>
            <Route path="makeadmin" element={<RequireAdmin><MakeAdmin /></RequireAdmin>}></Route>
            <Route path="manageproducts" element={<ManageProducts />}></Route>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        {/* <Footer></Footer> */}
      </Navbar>
      <Toaster />
    </div>
  );
}

export default App;
