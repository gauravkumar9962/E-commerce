import { createContext, useState, React } from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ProductListing from './Pages/ProductListing'
import ProductDetails from './Pages/ProductDetails'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductZoom from './component/ProductZoom'
import { IoCloseSharp } from 'react-icons/io5'
import { ProductDetailsComponent } from './component/ProductDetail'
import Login from './Pages/Login'
import Register from './Pages/Register'
import CartPanel from './component/CartPanel'
import CartPage from './Pages/Cart'
import Verify from './component/Verify'
import toast, { Toaster } from 'react-hot-toast';
import ForgetPassword from './Pages/ForgetPassword'
import Checkout from './Pages/Checkout'
import MyAccount from './Pages/MyAccount'
import MyList from './Pages/MyList'

const MyContext = createContext();

function App() {

    const notify = () => toast('Here is your toast.')
    const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
    const [fullWidth] = useState(true);
    const [maxWidth] = useState('lg');
    const [isLogin, setIsLogin] = useState(true);

    const [openCartPanel, setOpenCartPanel] = useState(false);

    const toggleCartPanel = (newOpen) => () => {
      setOpenCartPanel(newOpen);
    };

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const openAlertBox =(status, msg)=>{
    if(status==="success"){
      toast.success(msg);
    }
    if(status==="error"){
      toast.error(msg);
    }
  }

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin
  }

  return (
    <>
    <BrowserRouter>
    <MyContext.Provider value={values}>
      <Header/>
      <Routes>
        <Route path={"/"} exact={true} element={<Home/>}/>
        <Route path={"/productListing"} exact={true} element={<ProductListing/>}/>
        <Route path={"/productDetails/:id"} exact={true} element={<ProductDetails/>}/>
        <Route path={"/Login"} exact={true} element={<Login/>}/>
        <Route path={"/register"} exact={true} element={<Register/>}/>
        <Route path={"/cart"} exact={true} element={<CartPage/>}/>
        <Route path={"/verify"} exact={true} element={<Verify/>}/>
        <Route path={"/forget-password"} exact={true} element={<ForgetPassword/>}/>
        <Route path={"/checkout"} exact={true} element={<Checkout/>}/>
        <Route path={"/my-account"} exact={true} element={<MyAccount/>}/>
        <Route path={"/my-list"} exact={true} element={<MyList/>}/>
      </Routes>
      <Footer/>
      <CartPanel/>
    </MyContext.Provider>
    </BrowserRouter>

     <Toaster />

     <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProductDetailsModal}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
        className='productDetailsModal'
      >
        <DialogContent>
          <div className='flex items-center !w-full ProductDetailsModalContainer relative'>
            <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] absolute! !right-[0px] !bg-[#f1f1f1]' onClick={handleCloseProductDetailsModal}><IoCloseSharp className='text-[20px]'/></Button>
            <div className='col1 !w-[40%] !mr-[60px]'>
              <ProductZoom/>
            </div>

            <div className='col2 !w-[60%] !ml-[50px] productContent'>
              <ProductDetailsComponent/>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      
    </>
  )
}

export default App
export {MyContext}