import React from 'react';
import MainPage from './components/MainPage';
import ContactUs from './components/Contactus';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ScrolltoTopButton from './components/ScrolltoTopButton';
import GotoTop from './components/GotoTop';
function App() {
  const router = createBrowserRouter([
    { path: '/', element: <MainPage /> },
    { path: '/contact', element: <ContactUs /> },
    { path: '/motive', element: <Technologies /> },
    { path: '/services', element: <Services /> },
    { path: '/portfolio', element: <Portfolio /> },
  ]);

  return (
    <div>
      {/* <ScrolltoTopButton /> Add the button */}
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
