import { ConfigProvider as AntProvider } from "antd";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Landing from "./layouts/landing";
import Layout from "./layouts/layout";
import Contact from "./layouts/contact";
import Blog from "./layouts/blog";
import MyProfile from "./layouts/my-profile";
import Track from "./layouts/track";
import SignUp from "./pages/authentication/sign-up";
import SignIn from "./pages/authentication/sign-in";
import Checkout from "./layouts/checkout";
import Products from "./layouts/products";
import MyOrders from "./pages/my-profile/my-orders";
import Wishlist from "./pages/my-profile/wishlist";
import MyReviews from "./pages/my-profile/my-reviews";
import RecentlyViewed from "./pages/my-profile/resently-viewed";
import Profile from "./pages/my-profile/profile";
import Product from "./layouts/product";
import ProductInfo from "./pages/product/general-info";
import ProductDetalis from "./pages/product/product-detalis";
import "./i18n";
import ProductReviews from "./pages/product/reviews";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { supportedLngs } from "./constants";

function App() {
  const { i18n } = useTranslation();

  return (
    <Fragment>
      <AntProvider
        theme={{
          token: {
            colorPrimary: "#17696A",
          },
        }}
      >
        <RouterProvider router={routes} />
      </AntProvider>
    </Fragment>
  );
}

export default App;

function LanguagePath() {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();
  const curPath = location.pathname;
  useEffect(() => {
    if (lang && i18n.resolvedLanguage !== lang) {
      if (supportedLngs.includes(lang)) {
        i18n.changeLanguage(lang);
      } else {
        navigate("/" + i18n.resolvedLanguage + curPath, { replace: true });
      }
    }
  }, [lang]);
  return <Outlet />;
}
const routes = createBrowserRouter([
  {
    path: `/:lang`,
    element: <LanguagePath />,
    children: [
      {
        element: <Layout />,
        children: [
          { path: "", index: true, element: <Landing /> },
          { path: "contacts", element: <Contact /> },
          { path: "blog", element: <Blog /> },
          {
            path: "product",
            element: <Product />,
            children: [
              { path: "general-info", element: <ProductInfo /> },
              { path: "detalis", element: <ProductDetalis /> },
              { path: "reviews", element: <ProductReviews /> },
            ],
          },
          {
            path: "my-profile",
            element: <MyProfile />,
            children: [
              { path: "", element: <Profile /> },
              { path: "orders", element: <MyOrders /> },
              { path: "wishlist", element: <Wishlist /> },
              { path: "recently-viewed", element: <RecentlyViewed /> },
              { path: "reviews", element: <MyReviews /> },
            ],
          },
          { path: "track", element: <Track /> },
          { path: "checkout", element: <Checkout /> },
          { path: "products", element: <Products /> },
          { path: "sign-up", element: <SignUp /> },
          { path: "sign-in", element: <SignIn /> },
        ],
      },
    ],
  },
  { path: "*", element: <Navigate to="/uz" replace /> },
]);
