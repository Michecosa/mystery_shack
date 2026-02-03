import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import DefaultLayout from "./layout/DefaultLayout";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/carrello" element={<Cart />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
