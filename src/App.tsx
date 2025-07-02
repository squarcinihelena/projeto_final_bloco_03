// src/App.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {
          
        }
        <div className="min-h-[calc(100vh-140px)] bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {

            }
          </Routes>
        </div>
        <Footer />
        <ToastContainer /> 
        {

        }
      </BrowserRouter>
    </>
  );
}

export default App;