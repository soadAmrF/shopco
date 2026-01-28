import { Outlet } from "react-router-dom";
import Pin from "./components/Pin";
import Footer from "./components/Footer";

export default function Layouts() {
  return (
    <>
      <Pin />
      <Outlet />
      <Footer />
    </>
  );
}
