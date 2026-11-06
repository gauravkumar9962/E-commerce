import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { RiHomeLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar=()=>{
    return (
        <>
        <div className="sidebar fixed top-0 left-0 bg-[#fff] w-[18%] h-full border-r border-[rgba(0,0,0,0.1)] py-2! px-4!">
            <div className="py-2! w-[50%]">
                <Link to={"/"}>
                <img src="https://i.pinimg.com/736x/45/4c/5c/454c5c7df9d99c1b1eee9cc310c00567.jpg" className="w-120px]"/>
                </Link>
            </div>

            <ul className="mt-4!">
                <li>
                    <Button className="w-full capitalize! justify-start! flex gap-3 tex-[14px] text-[rgba(0,0,0,0.8)]! font-[500]! items-center">
                        <TbLayoutDashboard className="text-[18px]"/><span>Dashboard</span>
                    </Button>

                    <Button className="w-full capitalize! justify-start! flex gap-3 tex-[14px] text-[rgba(0,0,0,0.8)]! font-[500]! items-center">
                        <RiHomeLine className="text-[18px]"/><span>Home Slides</span>
                    </Button>

                    <Button className="w-full capitalize! justify-start! flex gap-3 tex-[14px] text-[rgba(0,0,0,0.8)]! font-[500]! items-center">
                        <FaRegUser className="text-[18px]"/><span>Users</span>
                    </Button>

                    <Button className="w-full capitalize! justify-start! flex gap-3 tex-[14px] text-[rgba(0,0,0,0.8)]! font-[500]! items-center">
                        <IoCartOutline className="text-[18px]"/><span>Products</span>
                    </Button>

                    <Button className="w-full capitalize! justify-start! flex gap-3 tex-[14px] text-[rgba(0,0,0,0.8)]! font-[500]! items-center">
                        <MdOutlineCategory className="text-[18px]"/><span>Category</span>
                    </Button>

                    <Button className="w-full capitalize! justify-start! flex gap-3 tex-[14px] text-[rgba(0,0,0,0.8)]! font-[500]! items-center">
                        <BsBagCheck className="text-[18px]"/><span>Orders</span>
                    </Button>

                    <Button className="w-full capitalize! justify-start! flex gap-3 tex-[14px] text-[rgba(0,0,0,0.8)]! font-[500]! items-center">
                        <AiOutlineLogout className="text-[18px]"/><span>Logout</span>
                    </Button>
                </li>
            </ul>
        </div>
        </>
    )
}
export default Sidebar;