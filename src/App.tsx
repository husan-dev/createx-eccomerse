import { ConfigProvider as AntProvider } from "antd";
import { Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useParams,
} from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Landing from "@layouts/landing";
import Layout from "@layouts/layout";
import Contact from "@layouts/contact";
import Track from "@layouts/track";
import SignUp from "@pages/authentication/sign-up";
import SignIn from "@pages/authentication/sign-in";
import Checkout from "@layouts/checkout";
import MyOrders from "@pages/my-profile/my-orders";
import Wishlist from "@pages/my-profile/wishlist";
import MyReviews from "@pages/my-profile/my-reviews";
import RecentlyViewed from "@pages/my-profile/resently-viewed";
import Profile from "@pages/my-profile/profile";
import Product from "@layouts/product";
import ProductInfo from "@pages/product/general-info";
import ProductDetalis from "@pages/product/product-detalis";
import ProductReviews from "@pages/product/reviews";
import NotFound from "@pages/404";
import { supportedLngs } from "./constants";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loading from "@components/loading";
import ProductsClean from "@layouts/products-clean";
import ContactUs from "@pages/contacts/contact-us";
import OutletStores from "@pages/contacts/outlet-stores";
import Faq from "@pages/contacts/faq";
import { useTranslation } from "react-i18next";
import ErrorBoundary from "@pages/error-boundary";
import "./i18n";
import Blogs from "@layouts/blogs";
import Blog from "@layouts/blog";
import BreadcrumbContainer from "@components/breadcrumb-container";
import MyProfile from "@layouts/my-profile";

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
            <RouterProvider router={Routes()} />
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

function Routes() {
  const { i18n } = useTranslation();
  const routes = createBrowserRouter([
    {
      path: `/:lang`,
      element: <LangWrapper />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          element: <Layout />,
          children: [
            { path: "", index: true, element: <Landing /> },
            {
              path: "contacts",
              element: <Contact />,
              children: [
                { path: "", element: <Navigate to={"contact-us"} /> },
                { path: "contact-us", element: <ContactUs /> },
                { path: "outlet-stores", element: <OutletStores /> },
                { path: "faq", element: <Faq /> },
              ],
            },
            {
              path: "blog",
              element: (
                <>
                  <BreadcrumbContainer />
                  <Outlet />
                </>
              ),
              children: [
                {
                  path: "",
                  element: <Navigate to={"all"} />,
                },
                {
                  path: ":blog-category",
                  element: (
                    <>
                      <Outlet />
                    </>
                  ),
                  children: [
                    {
                      path: "",
                      element: <Blogs />,
                    },
                    { path: ":blog", element: <Blog /> },
                  ],
                },
              ],
            },
            {
              path: "product",
              element: <Product />,
              children: [
                { path: "", element: <Navigate to={"general-info"} /> },
                { path: "general-info", element: <ProductInfo /> },
                { path: "detalis", element: <ProductDetalis /> },
                { path: "reviews", element: <ProductReviews /> },
              ],
            },
            { path: "track", element: <Track /> },
            { path: "checkout", element: <Checkout /> },
            { path: "products", element: <ProductsClean /> },
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
    { path: "", element: <Navigate to={`/${i18n.language}`} /> },
  ]);
  return routes;
}
