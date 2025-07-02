import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

import ListaCategorias from "./components/listacategorias/ListaCategorias";
import DeletaCategoria from "./components/deletecategoria/DeletaCategoria";
import FormCategoria from "./components/formcategoria/FormCategoria";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[calc(100vh-140px)] bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/deletarcategoria/:id" element={<DeletaCategoria />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/produtos" element={<Home />} />
          </Routes>
        </div>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
