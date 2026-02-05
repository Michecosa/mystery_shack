import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import DefaultLayout from "./layout/DefaultLayout";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import Reliquie from "./pages/Reliquie";
import YouShouldntBeHere from "./pages/YouShouldntBeHere";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/carrello" element={<Cart />}></Route>
            <Route path="/reliquie" element={<Reliquie />}></Route>
            <Route
              path="/non-dovresti-essere-qui"
              element={<YouShouldntBeHere />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
