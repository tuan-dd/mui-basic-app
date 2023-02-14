import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/root';
import './main.css';
import Search, { loader as searchLoader } from './pages/search';
import FormLogin from './components/formLoginModal';
import Homepage, { loader as pageLoader } from './pages/homepage';
// import Index, { loader as defaultLoader } from './pages/index';
import ErrorPage from './error-page';
import Detail, { loader as detailLoader } from './pages/detail';

function App() {
   //    const Location = useLocation();
   //    const state = Location.state;
   //    console.log(Location)
   const router = createBrowserRouter([
      {
         path: '/',
         element: <Root />,
         errorElement: <ErrorPage />,
         children: [
            {
               errorElement: <ErrorPage />,
               children: [
                  // { index: true, element: <Index />, loader: defaultLoader, },
                  {
                     path: 'page/:pageId',
                     element: <Homepage />,
                     loader: pageLoader,
                     children: [
                        {
                           path: 'detail/:detailId',
                           element: <Detail />,
                           loader: detailLoader,
                        },
                     ],
                  },
                  {
                     path: 'login',
                     element: <FormLogin />,
                  },
                  {
                     path: 'search?',
                     element: <Search />,
                     loader: searchLoader,
                  },
               ],
            },
         ],
      },
   ]);
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
