import React, { useContext, useState } from "react";
import "../ProductsItems/style.css";
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import  Button  from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa6";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { MyContext } from "../../App";

const ProductItems = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const context = useContext(MyContext)

    const fullText = `boAt EnergyShroom 20000 mAh Power Bank, 2 way 22.5 watt Fast Charging, Quick Charge 3.0, High Temperature and Scratch Resistant,12-Layer Smart IC Protection.`

    const characterLimit = 50; 

     const displayText = isExpanded 
    ? fullText 
    : `${fullText.substring(0, characterLimit)}...`;

    return (
        <div className="productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)] flex items-center">
            <div className="group imgWrapper w-[25%] rounded-md relative">
                <Link to="/">
                <div className="img h-[220px] overflow-hidden">
                    <img src="https://cdn1.jiomartjcp.com/v2/catalog-cloud/ccprod/t.resize(w:300)/products/assets/item/free/original/JKuiYzOuq9-Boat-EnergyShroom-20K-PB400-Black-494351842-i-1-1200Wx1200H.jpeg" className="w-full h-full"/>

                     <img src="https://cdn1.jiomartjcp.com/v2/catalog-cloud/ccprod/t.resize(w:540)/products/assets/item/free/original/jLVRv3L_Lg-Boat-EnergyShroom-20K-PB400-Black-494351842-i-5-1200Wx1200H.jpeg" className="w-full h-full transition-all duration-600 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"/>

                </div>
                </Link>
                <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-[#ff5252] text-white rounded-lg !p-1 text-[12px] font-[500]">10%</span>

                <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
                    
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black  hover:!bg-[#ff5252] hover:!text-white group" onClick={()=>context.setOpenProductDetailsModal(true)}><MdZoomOutMap className="text-[18px] text-black hover:text-white"/></Button>
                    

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black  hover:!bg-[#ff5252] hover:!text-white group"><IoGitCompareOutline className="text-[18px] text-black hover:text-white"/></Button>

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black  hover:!bg-[#ff5252] hover:!text-white group"><FaRegHeart className="text-[18px] text-black hover:text-white"/></Button>
                </div>
            </div>

            <div className="info !p-3 !py-5 !px-8 w-[75%]">
                <h6 className="text-[11px] !font-[400]">
                    <Link to="/" className="link transition-all !pl-2">boAt</Link></h6>
                <h3 className="text-[18px] title !mt-2 !mb-3 font-[500] !mb-2 text-[#000] !pl-1">
                    <Link to="/" className="link transition-all">{displayText}</Link>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-[#ff5252] font-semibold hover:underline ml-1 focus:outline-none"
                    >
                        {isExpanded ? 'Show Less' : 'Show More'}
                    </button>
                    </h3>

                    <p className="text-[14px] !mb-3">
                    We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire that they cannot.
                    </p>

                        <Rating name="size-small" defaultValue={4} size="small" readOnly/>

                        <div className="flex items-center gap-4">
                            <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">$58.99</span>
                             <span className="price text-[#ff5252] font-bold">$58.99</span>
                        </div>

                        <div className="!mt-3">
                            <Button className="btn-org flex gap-4"><GrCart/>Add to Cart</Button>
                        </div>
            </div>
        </div>
    )
}

export default ProductItems;