import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import BookDetails from "../components/BookDetails";
import ErrorPage from "../components/ErrorPage";
import ListedBooks from "../pages/ListedBooks";
import ReadList from "../components/ReadList";
import WishList from "../components/WishList";
import PagesToRead from "../pages/PagesToRead";
import AboutUs from "../components/AboutUs";

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
            path:'/about',
            element: <AboutUs />
           },
           {
            path:'/pagesToRead',
            element: <PagesToRead />,
            loader:() => fetch(`../../public/books.json`)
            
           },
          
           {
            path:'/book/:bookId',
            element: <BookDetails />,
            loader:() => fetch(`../../public/books.json`)
           },
           {
             path:'/listedBooks',
             element:<ListedBooks />,
             children:[
                {
                  path: 'readList',
                  element: <ReadList />,
                  loader:() => fetch(`../../public/books.json`)
                },
                {
                  path: 'wishList',
                  element: <WishList />,
                  loader:() => fetch(`../../public/books.json`)
                },
             ]
           }

      ]
    },
  ]);