import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import BookDetails from "../components/BookDetails";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement:<ErrorPage/>,
      children: [
           {
            path:'/',
            element: <Home />
           },
           {
            path:'/book/:bookId',
            element: <BookDetails />,
            loader:() => fetch(`../../public/books.json`)
           },

      ]
    },
  ]);