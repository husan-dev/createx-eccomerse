import { ConfigProvider as AntProvider } from "antd";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useParams,
} from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Landing from "@layouts/landing";
import Layout from "@layouts/layout";
import Contact from "@layouts/contact";
import Blog from "@layouts/blog";
import MyProfile from "@layouts/my-profile/desktop-my-profile";
import Track from "@layouts/track";
import SignUp from "@pages/authentication/sign-up";
import SignIn from "@pages/authentication/sign-in";
import Checkout from "@layouts/checkout";
import Products from "@layouts/products";
import MyOrders from "@pages/my-profile/my-orders";
import Wishlist from "@pages/my-profile/wishlist";
import MyReviews from "@pages/my-profile/my-reviews";
import RecentlyViewed from "@pages/my-profile/resently-viewed";
import Profile from "@pages/my-profile/profile";
import Product from "@layouts/product";
import ProductInfo from "@pages/product/general-info";
import ProductDetalis from "@pages/product/product-detalis";
import "./i18n";
import ProductReviews from "@pages/product/reviews";
import NotFound from "@pages/404";
import { supportedLngs } from "./constants";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import Loading from "@components/loading";

const querycClient = new QueryClient();
function App() {
  return (
    <Fragment>
      <QueryClientProvider client={querycClient}>
        <AntProvider
          theme={{
            token: {
              colorPrimary: "#17696A",
            },
          }}
        >
          <Suspense fallback={<Loading />}>
            <RouterProvider router={routes} />
          </Suspense>

          <ReactQueryDevtools initialIsOpen />
        </AntProvider>
      </QueryClientProvider>
    </Fragment>
  );
}

export default App;

function LangWrapper() {
  const { lang } = useParams();
  if (lang && !supportedLngs.includes(lang)) {
    return <NotFound />;
  }
  return <Outlet />;
}

const routes = createBrowserRouter([
  {
    path: `/:lang`,
    element: <LangWrapper />,
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

          { path: "track", element: <Track /> },
          { path: "checkout", element: <Checkout /> },
          { path: "products", element: <Products /> },
          { path: "sign-up", element: <SignUp /> },
          { path: "sign-in", element: <SignIn /> },
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
    ],
  },
  { path: "*", element: <NotFound /> },
]);
