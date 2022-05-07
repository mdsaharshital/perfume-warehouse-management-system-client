import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import { ToastContainer } from "react-toastify";
import UpdateStock from "./Pages/UpdateStock/UpdateStock";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import AddNewItems from "./Pages/AddNewItems/AddNewItems";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import MyItems from "./Pages/MyItems/MyItems";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addnewitems"
          element={
            <RequireAuth>
              <AddNewItems />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <UpdateStock />
            </RequireAuth>
          }
        ></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
