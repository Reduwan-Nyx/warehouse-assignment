import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import InventoryDetail from './Components/Home/InventoryDetail/InventoryDetail';
import Inventory from './Components/Inventory/Inventory';
import About from './Components/About/About';
import NotFound from './Components/Home/NotFound/NotFound';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import RequireAuth from './Components/Pages/RequireAuth/RequireAuth';
import CheckOut from './Components/Home/CheckOut/CheckOut';
import AddService from './Components/Home/AddService/AddService';
import ManageServices from './Components/Home/ManageServices/ManageServices';
import MyItems from './Components/Home/MyItems/MyItems';
import { ToastContainer } from 'react-toastify';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route
          path="/inventory/:inventoryId"
          element={
            <RequireAuth>
              <InventoryDetail></InventoryDetail>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route
          path="/addservice"
          element={
            <RequireAuth>
              <AddService></AddService>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/checkout/:inventoryId"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageservice"
          element={
            <RequireAuth>
              <ManageServices></ManageServices>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
