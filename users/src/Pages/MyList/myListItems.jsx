import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";

const MyListItems =(props)=>{

    return (
        <div className="cartItem w-full !p-3 flex items-center gap-4 !pb-5 border-b border-[rgba(0,0,0,0.4)]">
            <div className="img w-[10%] rounded-md overflow-hidden">
                <Link to={"/productDetails/:id"} className="group">
                <img src="https://i.pinimg.com/736x/7a/ca/a5/7acaa5d769d7130a42046a0c39c376b1.jpg" className="w-full group-hover:scale-105 transition-all"/>
                </Link>
            </div>

            <div className="info w-[90%] relative">
                <IoCloseSharp className="absolute cursor-pointer top-[0px] right-[5px] text-[22px] transition-all link"/>
                <span className="text-[13px]">Sangria</span>
                <h3 className="text-[15px]"><Link to={"/productDetails/:id"} className="link">A-Line Kurti with Sharara & Dupatta</Link></h3>

                <Rating name="size-small" defaultValue={4} size="medium" readOnly/>

                <div className="flex items-center gap-4 !mt-2 !mb-2">
                <span className="price text-black text-[15px] font-bold">$58.99</span>
                <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">$58.99</span>
                <span className="price text-[#ff5252] text-[15px]">50% OFF</span>
                </div>

                <Button className="btn-org btn-sm">Add to Cart</Button>

            </div>
        </div>
    )
}
export default MyListItems;