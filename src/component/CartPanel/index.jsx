import Button from "@mui/material/Button";
import React, { useContext } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import { MyContext } from '../../App';
import { IoCloseSharp } from "react-icons/io5";

const CartPanel =()=> {
    const context = useContext(MyContext)
    return (
        <>
         {/* Cart Panel */}
       <Drawer open={context.openCartPanel} onClose={context.toggleCartPanel(false)} anchor={"right"} className='cartPanel'>
        <div className='flex items-center justify-between !py-3 !px-4 !gap-3 border-b border-[rgba(0,0,0,0.3)]'>
          <h3 className='text-[20px] font-[500]'>Shoping Cart Panel</h3><IoCloseSharp className='text-[20px] cursor-pointer' onClick={context.toggleCartPanel(false)} />
        </div>
        
        {/* Drawer Content */}
        <div className='scroll w-full !max-h-[400px] overflow-y-scroll overflow-x-hidden !py-3 !px-4'>
        <div className='cartItem w-full flex items-center !gap-4 border-b border-[rgba(0,0,0,0.3)] !pb-7 !pt-5'>
            <div className='img w-[25%] overflow-hidden h-[90px] rounded-md'>
            <Link to={"/productDetails/89854"} className="block group">
              <img src="https://i.pinimg.com/736x/8a/ad/10/8aad10cfb5945ba2cc9f74c533fcb1c1.jpg" className='w-full group-hover:scale-105 transition-all'/>
            </Link>
            </div>

            <div className='info w-[75%] relative'>
                <h4 className="text-[14px] font-[500]">
                  <Link to={"/productDetails/39043"} className="link transition-all">Wuthering Wave New Character is now arrived</Link> 
                </h4>
                <p className="flex items-center !gap-5 !mt-2 !mb-2">
                    <span>Qty : <span>1</span></span>
                    <span className="text-[#ff5252] font-bold">Price : $25</span>
                </p>

                <MdOutlineDeleteOutline className="absolute top-[50px] right-[10px] cursor-pointer text-[20px] link transition-all"/>
            </div>
          </div>

        <div className='cartItem w-full flex items-center !gap-4 border-b border-[rgba(0,0,0,0.3)] !pb-7 !pt-5'>
            <div className='img w-[25%] overflow-hidden h-[90px] rounded-md'>
            <Link to={"/productDetails/89854"} className="block group">
              <img src="https://i.pinimg.com/736x/8a/ad/10/8aad10cfb5945ba2cc9f74c533fcb1c1.jpg" className='w-full group-hover:scale-105 transition-all'/>
            </Link>
            </div>

            <div className='info w-[75%] relative'>
                <h4 className="text-[14px] font-[500]">
                  <Link to={"/productDetails/39043"} className="link transition-all">Wuthering Wave New Character is now arrived</Link> 
                </h4>
                <p className="flex items-center !gap-5 !mt-2 !mb-2">
                    <span>Qty : <span>1</span></span>
                    <span className="text-[#ff5252] font-bold">Price : $25</span>
                </p>

                <MdOutlineDeleteOutline className="absolute top-[50px] right-[10px] cursor-pointer text-[20px] link transition-all"/>
            </div>
          </div>

          <div className='cartItem w-full flex items-center !gap-4 border-b border-[rgba(0,0,0,0.3)] !pb-7 !pt-5'>
            <div className='img w-[25%] overflow-hidden h-[90px] rounded-md'>
            <Link to={"/productDetails/89854"} className="block group">
              <img src="https://i.pinimg.com/736x/8a/ad/10/8aad10cfb5945ba2cc9f74c533fcb1c1.jpg" className='w-full group-hover:scale-105 transition-all'/>
            </Link>
            </div>

            <div className='info w-[75%] relative'>
                <h4 className="text-[14px] font-[500]">
                  <Link to={"/productDetails/39043"} className="link transition-all">Wuthering Wave New Character is now arrived</Link> 
                </h4>
                <p className="flex items-center !gap-5 !mt-2 !mb-2">
                    <span>Qty : <span>1</span></span>
                    <span className="text-[#ff5252] font-bold">Price : $25</span>
                </p>

                <MdOutlineDeleteOutline className="absolute top-[50px] right-[10px] cursor-pointer text-[20px] link transition-all"/>
            </div>
          </div>

          <div className='cartItem w-full flex items-center !gap-4 border-b border-[rgba(0,0,0,0.3)] !pb-7 !pt-5'>
            <div className='img w-[25%] overflow-hidden h-[90px] rounded-md'>
            <Link to={"/productDetails/89854"} className="block group">
              <img src="https://i.pinimg.com/736x/8a/ad/10/8aad10cfb5945ba2cc9f74c533fcb1c1.jpg" className='w-full group-hover:scale-105 transition-all'/>
            </Link>
            </div>

            <div className='info w-[75%] relative'>
                <h4 className="text-[14px] font-[500]">
                  <Link to={"/productDetails/39043"} className="link transition-all">Wuthering Wave New Character is now arrived</Link> 
                </h4>
                <p className="flex items-center !gap-5 !mt-2 !mb-2">
                    <span>Qty : <span>1</span></span>
                    <span className="text-[#ff5252] font-bold">Price : $25</span>
                </p>

                <MdOutlineDeleteOutline className="absolute top-[50px] right-[10px] cursor-pointer text-[20px] link transition-all"/>
            </div>
          </div>

          <div className='cartItem w-full flex items-center !gap-4 border-b border-[rgba(0,0,0,0.3)] !pb-7 !pt-5'>
            <div className='img w-[25%] overflow-hidden h-[90px] rounded-md'>
            <Link to={"/productDetails/89854"} className="block group">
              <img src="https://i.pinimg.com/736x/8a/ad/10/8aad10cfb5945ba2cc9f74c533fcb1c1.jpg" className='w-full group-hover:scale-105 transition-all'/>
            </Link>
            </div>

            <div className='info w-[75%] relative'>
                <h4 className="text-[14px] font-[500]">
                  <Link to={"/productDetails/39043"} className="link transition-all">Wuthering Wave New Character is now arrived</Link> 
                </h4>
                <p className="flex items-center !gap-5 !mt-2 !mb-2">
                    <span>Qty : <span>1</span></span>
                    <span className="text-[#ff5252] font-bold">Price : $25</span>
                </p>

                <MdOutlineDeleteOutline className="absolute top-[50px] right-[10px] cursor-pointer text-[20px] link transition-all"/>
            </div>
          </div>

          <div className='cartItem w-full flex items-center !gap-4 border-b border-[rgba(0,0,0,0.3)] !pb-7 !pt-5'>
            <div className='img w-[25%] overflow-hidden h-[90px] rounded-md'>
            <Link to={"/productDetails/89854"} className="block group">
              <img src="https://i.pinimg.com/736x/8a/ad/10/8aad10cfb5945ba2cc9f74c533fcb1c1.jpg" className='w-full group-hover:scale-105 transition-all'/>
            </Link>
            </div>

            <div className='info w-[75%] relative'>
                <h4 className="text-[14px] font-[500]">
                  <Link to={"/productDetails/39043"} className="link transition-all">Wuthering Wave New Character is now arrived</Link> 
                </h4>
                <p className="flex items-center !gap-5 !mt-2 !mb-2">
                    <span>Qty : <span>1</span></span>
                    <span className="text-[#ff5252] font-bold">Price : $25</span>
                </p>

                <MdOutlineDeleteOutline className="absolute top-[50px] right-[10px] cursor-pointer text-[20px] link transition-all"/>
            </div>
          </div>
          
        </div>

            <br />

        <div className="bottomSec absolute bottom-[10px] left-[10px] w-full overflow-hidden !py-5 !pr-5">

        <div className="bottomInfo !py-3 !px-4 w-full border-t border-[rgba(0,0,0,0.3)] flex items-center justify-between flex-col">
            <div className="flex items-center justify-between w-full">
                <span className="text-[14px] font-[600]">1 Item</span>
                <span className="text-[#ff5252] font-bold">$86.23</span>
            </div>

            <div className="flex items-center justify-between w-full">
                <span className="text-[14px] font-[600]">Shipping</span>
                <span className="text-[#ff5252] font-bold">$8.23</span>
            </div>
        </div>

        <div className="bottomInfo !py-3 !px-4 w-full border-t border-[rgba(0,0,0,0.3)] flex items-center justify-between flex-col">
            <div className="flex items-center justify-between w-full">
                <span className="text-[14px] font-[600]">Total (tax excl.)</span>
                <span className="text-[#ff5252] font-bold">$93.00</span>
            </div>

            <div className="flex items-center justify-between w-full">
                <span className="text-[14px] font-[600]">Total (ta incl.)</span>
                <span className="text-[#ff5252] font-bold">$93.00</span>
            </div>

            <div className="flex items-center justify-between w-full">
                <span className="text-[14px] font-[600]">Taxes:</span>
                <span className="text-[#ff5252] font-bold">$0.00</span>
            </div>

            <br />

            <div className="flex items-center justify-between w-full gap-5">
                <Link to={"cart"} className=" w-[50%] d-block"><Button className="btn-org btn-lg w-full">View Cart</Button></Link>
                <Link to={"checkout"} className=" w-[50%] d-block"><Button className="btn-org btn-lg w-full">Checkout</Button></Link>
            </div>
        </div>
        </div>
        </Drawer>
        </>
    )
}
export default CartPanel;