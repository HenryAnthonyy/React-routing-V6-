import { Navigate, Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader/>
       <main>
         <Routes>
            <Route path="/" element={<Navigate to="/welcome"/>}/>
            <Route path="/welcome/*" element={<Welcome/>}/>
            <Route path="/products/" element={<Products/>}/>
            <Route path="/product-detail/:productID" element={<ProductDetail/>}/>
       </Routes>
       </main>
    </div>
  );
}

export default App;
