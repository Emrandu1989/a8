import { createBrowserRouter } from "react-router-dom";
import BookDetails from "../components/BookDetails";
import ErrorPage from "../components/ErrorPage";
import WishList from "../components/WishList";
import Layout from "../layouts/Layout";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import ReadList from "../pages/ReadList";
import ContactUs from "../pages/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead />,
        loader: () => fetch(`./books.json`),
      },

      {
        path: "/book/:bookId",
        element: <BookDetails />,
        loader: () => fetch(`./books.json`),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
        children: [
          {
            path: "readList",
            element: <ReadList />,
            loader: () => fetch(`./books.json`),
          },
          {
            path: "wishList",
            element: <WishList />,
            loader: () => fetch(`./books.json`),
          },
        ],
      },
    ],
  },
]);
