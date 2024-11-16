import PopularCategroies from "@pages/landing/popular-categroies";
import Subscribe from "../components/layouts/subscribe";
import Adventages from "../pages/landing/adventages";
import Banner from "../pages/landing/banner";
import DownloadApp from "../pages/landing/download-app";
import FashionBlog from "../pages/landing/fashion-blog";
import FollowInstagram from "../pages/landing/follow-instagram";
import Partners from "../pages/landing/partner";
import TopCategories from "../pages/landing/top-categories";

function Landing() {
  return (
    <>
      <Banner />
      <TopCategories />
      <PopularCategroies />
      <DownloadApp />
      <Adventages />
      <FollowInstagram />
      <FashionBlog />
      <Partners />
      <Subscribe />
    </>
  );
}

export default Landing;
