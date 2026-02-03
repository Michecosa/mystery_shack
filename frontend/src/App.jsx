import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import DefaultLayout from "./layout/DefaultLayout";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import Reliquie from "./pages/Reliquie";
import YouShouldntBeHere from "./pages/YouShouldntBeHere";
import ChiSiamo from "./pages/ChiSiamo";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/carrello" element={<Cart />}></Route>
            <Route path="/reliquie" element={<Reliquie />}></Route>
            <Route path="/chisiamo" element={<ChiSiamo />}></Route>
            <Route
              path="/you-shouldnt-be-here"
              element={<YouShouldntBeHere />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
