import "./App.css";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import CategoryBlogs from "./Pages/CategoryBlogs/CategoryBlogs";
import DedicatedBlog from "./Pages/DedicatedBlog/DedicatedBlog";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Blogs/:category" element={<CategoryBlogs />} />
        <Route path="/Blog/:id" element={<DedicatedBlog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
