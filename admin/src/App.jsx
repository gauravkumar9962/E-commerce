import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { createContext, useState } from 'react';

const MyContext = createContext();

function App() {

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex'>
              <div className={`sidebarWrapper shrink-0 overflow-hidden transition-all duration-300 ${isSideBarOpen ? "w-[18%]" : "w-0"}`}>
                <Sidebar />
              </div>
              <div className={`contentRight py-4! px-5! transition-all duration-300 ${isSideBarOpen === false ? 'w-[100%]' : 'w-[82%]'}`}>
                <Dashboard />
              </div>
            </div>
          </section>
        </>
      )
    }
  ])

  const values = {
    isSideBarOpen,
    setIsSideBarOpen
  };

  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  )
}

export default App
export { MyContext };