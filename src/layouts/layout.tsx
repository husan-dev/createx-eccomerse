import Footer from "@components/layouts/footer";
import Header from "@components/layouts/header";
import MobileMenuBar from "@components/layouts/mobile-menu-bar";
import { Outlet } from "react-router-dom";

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
