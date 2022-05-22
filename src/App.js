import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Purchase from "./components/Purchase/Purchase";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import RequireAuth from "./components/Shared/RequireAuth";


function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/purchase/:id' element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;
