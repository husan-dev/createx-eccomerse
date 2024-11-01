import { Outlet } from "react-router-dom";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import MobileMenuBar from "../components/layouts/mobile-menu-bar";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <MobileMenuBar />
    </>
  );
}

export default Layout;
