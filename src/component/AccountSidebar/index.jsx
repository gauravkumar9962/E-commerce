import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router";
import Button from "@mui/material/Button";

const AccountSidebar = () => {
    return (
        <div className="card bg-white shadow-md rounded-md sticky top-[20px]">
            <div className="w-full !p-5 flex items-center justify-center flex-col">
                <div className="w-[110px] h-[110px] rounded-full overflow-hidden !mb-4 relative group">
                    <img src="https://i.pinimg.com/236x/32/fc/a7/32fca790fadec9c11112c680c134bd5e.jpg" className="w-full h-full object-cover" />

                    <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center opacity-0 transition-all group-hover:opacity-100"><FaCloudUploadAlt className="text-white text-[32px]" />
                        <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
                    </div>
                </div>
                <h3>Rover kumar</h3>
                <h6 className="text-[13px] font-[500]">wuthering@gmail.com</h6>
            </div>

            <ul className="list-none !pb-5 bg-[#f1f1f1] myAccountTabs">
                <li className="w-full">
                    <NavLink to={"/my-account"} exact={true} activeClassName="isActive">
                        <Button className=" w-full !py-3 !text-left !px-5 !justify-start  !capitalize !text-[rgba(0,0,0,0.8)] flex !rounded-none items-center gap-2"><FaRegUser className="text-[16px]" />My Profile</Button>
                    </NavLink>
                </li>


                <li className="w-full">
                    <NavLink to={"/my-list"} exact={true} activeClassName="isActive">
                        <Button className=" w-full !py-3 !text-left !px-5 !justify-start  !capitalize !text-[rgba(0,0,0,0.8)] flex !rounded-none items-center gap-2"><IoMdHeartEmpty className="text-[19px]" />My List</Button>
                    </NavLink>
                </li>

                <li className="w-full">
                    <NavLink to={"/my-orders"} exact={true} activeClassName="isActive">
                        <Button className=" w-full !py-3 !text-left !px-5 !justify-start  !capitalize !text-[rgba(0,0,0,0.8)] flex !rounded-none items-center gap-2"><IoBagCheckOutline className="text-[19px]" />My Orders</Button>
                    </NavLink>
                </li>

                <li className="w-full">
                    <Button className=" w-full !py-3 !text-left !px-5 !justify-start  !capitalize !text-[rgba(0,0,0,0.8)] flex !rounded-none items-center gap-2"><IoIosLogOut className="text-[19px]" />Logout</Button>
                </li>
            </ul>
        </div>
    )
}

export default AccountSidebar;