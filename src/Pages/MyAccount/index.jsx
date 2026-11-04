import Button from "@mui/material/Button";
import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router";
import TextField from '@mui/material/TextField';

const MyAccount =()=>{
    return (
        <section className="py-10! w-full">
            <div className="container flex gap-5">
                <div className="col1 w-[20%]">
                    <div className="card bg-white shadow-md rounded-md">
                        <div className="w-full !p-5 flex items-center justify-center flex-col">
                            <div className="w-[110px] h-[110px] rounded-full overflow-hidden !mb-4 relative group">
                                <img src="https://i.pinimg.com/236x/32/fc/a7/32fca790fadec9c11112c680c134bd5e.jpg" className="w-full h-full object-cover" />

                                <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center opacity-0 transition-all group-hover:opacity-100"><FaCloudUploadAlt className="text-white text-[32px]"/>
                                <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"/>
                                </div>
                            </div>
                            <h3>Rover kumar</h3>
                            <h6 className="text-[13px] font-[500]">wuthering@gmail.com</h6>
                        </div>

                        <ul className="list-none !pb-5 bg-[#f1f1f1] myAccountTabs">
                            <li className="w-full">
                                <NavLink to={"/my-account"} exact={true} activeClassName="isActive">
                                <Button className=" w-full !py-3 !text-left !px-5 !justify-start  !capitalize !text-[rgba(0,0,0,0.8)] flex !rounded-none items-center gap-2"><FaRegUser className="text-[16px]"/>My Profile</Button>
                                </NavLink>
                            </li>
                            

                            <li className="w-full">
                                <Button className=" w-full !py-3 !text-left !px-5 !justify-start  !capitalize !text-[rgba(0,0,0,0.8)] flex !rounded-none items-center gap-2"><IoMdHeartEmpty className="text-[19px]"/>My List</Button>
                            </li>

                            <li className="w-full">
                                <Button className=" w-full !py-3 !text-left !px-5 !justify-start  !capitalize !text-[rgba(0,0,0,0.8)] flex !rounded-none items-center gap-2"><IoBagCheckOutline className="text-[19px]"/>My Orders</Button>
                            </li>

                            <li className="w-full">
                                <Button className=" w-full !py-3 !text-left !px-5 !justify-start  !capitalize !text-[rgba(0,0,0,0.8)] flex !rounded-none items-center gap-2"><IoIosLogOut className="text-[19px]"/>Logout</Button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col2 w-[50%]">
                    <div className="card bg-white !p-5 shadow-md rounded-md">
                        <h2 className="!pb-3">My Profile</h2>
                        <hr />

                        <form className="!mt-5">
                            <div className="flex items-center gap-5">
                                <div className="w-[50%]">
                                    <TextField 
                                    label="Full Name" 
                                    variant="outlined" 
                                    size="small" 
                                    className="w-full"/>
                                </div>

                                <div className="w-[50%]">
                                    <TextField 
                                    label="Email" 
                                    variant="outlined" 
                                    size="small" 
                                    className="w-full"/>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 !mt-5">
                                <div className="w-[100%]">
                                    <TextField 
                                    label="Phone Number" 
                                    variant="outlined" 
                                    size="small" 
                                    className="w-full"/>
                                </div>
                            </div>

                            <br />

                            <div className="flex items-center gap-4">
                                <Button className="btn-org btn-lg w-[100px]">Save</Button>
                                <Button className=" btn-border btn-lg w-[100px]">Cancel</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MyAccount;