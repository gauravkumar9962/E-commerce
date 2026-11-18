import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { createContext, useState, forwardRef } from 'react';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Products from './Pages/Products';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoMdClose } from 'react-icons/io';
import Slide from '@mui/material/Slide';
import UploadProduct from './Pages/Products/UploadProduct';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyContext = createContext();

function App() {

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState({
    open: false,
    model: ''
  });

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
    },
    {
      path: "/login",
      exact: true,
      element: (
        <>
          <Login />
        </>
      )
    },
    {
      path: "/sign-up",
      exact: true,
      element: (
        <>
          <SignUp />
        </>
      )
    },
    {
      path: "/products",
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
                <Products />
              </div>
            </div>
          </section>
        </>
      )
    }
  ])

  const values = {
    isSideBarOpen,
    setIsSideBarOpen,
    isLogin,
    setIsLogin,
    isOpenFullScreenPanel,
    setIsOpenFullScreenPanel
  };

  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />


        <Dialog
          fullScreen
          open={isOpenFullScreenPanel.open}
          onClose={() => setIsOpenFullScreenPanel({open:false})}
          slots={{
          transition: Transition,
        }}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                onClick={() => setIsOpenFullScreenPanel({open:false})}
                aria-label="close"
              >
                <IoMdClose />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                <span className='text-black'>{isOpenFullScreenPanel?.model}</span>
              </Typography>
            </Toolbar>
          </AppBar>
          <List>
            {isOpenFullScreenPanel?.model==="Add Product" && <UploadProduct />}
          </List>
        </Dialog>

      </MyContext.Provider>
    </>
  )
}

export default App
export { MyContext };