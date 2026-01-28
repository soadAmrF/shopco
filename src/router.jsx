import { Routes, Route } from "react-router-dom";
import Layouts from "./Layouts";
import Home from "./pages/Home";
import OnSale from "./pages/OnSale";
import New from "./pages/New";
import Brands from "./pages/Brands";
import ProductDetails from "./pages/ProductDetails";
import Men from "./pages/Men";
import Women from "./pages/Women";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="on-sale" element={<OnSale />} />
        <Route path="new-arrivals" element={<New />} />
        <Route path="brands" element={<Brands />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
      </Route>
    </Routes>
  );
}