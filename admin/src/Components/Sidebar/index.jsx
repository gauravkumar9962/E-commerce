import Button from "@mui/material/Button";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { RiHomeLine } from "react-icons/ri";
import { LuUserRound } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from 'react-collapse';
import { MyContext } from "../../App";

const Sidebar = () => {
    const [subMenuIndex, setSubMenuIndex] = useState(null);

    const isOpenSubMenu = (index) => {
        if (subMenuIndex === index) {
            setSubMenuIndex(null);
        } else {
            setSubMenuIndex(index);
        }
    }

    const context = useContext(MyContext);

    return (
        <>
            <div className={`sidebar overflow-hidden top-0 left-0 bg-gradient-to-r from-red-100 to-green-100 h-full border-r border-[rgba(0,0,0,0.1)] py-2! px-4! transition-all duration-300 ${context.isSideBarOpen===true ? 'w-[18%] fixed' : 'w-[0px]'}`}>
                <div className="py-2! w-[50%]">
                    <Link to={"/"}>
                        <img src="/header.png" className="w-[120px]" />
                    </Link>
                </div>

                <ul className="mt-4!">
                    <li>
                        <Link to={"/"}>
                            <Button className="w-full capitalize! justify-start! flex gap-3 tex-[14px] text-[rgba(0,0,0,0.8)]! font-[500]! items-center py-2! hover:bg-[#f1f1f1]!">
                                <TbLayoutDashboard className="text-[20px]" /><span>Dashboard</span>
                            </Button>
                        </Link>

                        <Button className="w-full capitalize! justify-start! flex gap-3 tex-[14px] text-[rgba(0,0,0,0.8)]! font-[500]! items-center hover:bg-[#f1f1f1]!" onClick={() => isOpenSubMenu(1)}>
                            <RiHomeLine className="text-[20px]" /><span>Home Slides</span>
                            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"><FaAngleDown className={`transition-all ${subMenuIndex === 1 ? 'rotate-180' : ''}`} /></span>
                        </Button>

                        <Collapse isOpened={subMenuIndex === 1 ? true : false}>
                            <ul className="w-full">
                                <li className="w-full">
                                    <Link to={"/home"}>
                                        <Button className="text-[rgba(0,0,0,0.7)]! capitalize! justify-start! w-full! text-[13px]! font-[500]! pl-19! flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]"></span>{" "}
                                            Home Banner list
                                        </Button>
                                    </Link>
                                </li>

                                <li className="w-full">
                                    <Link to={"/home/addSlider"}>
                                        <Button className="text-[rgba(0,0,0,0.7)]! capitalize! justify-start! w-full! text-[13px]! font-[500]! pl-19! flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]"></span>{" "}
                                            Add Home Banner Slider
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>

                        <Link to={"/users"}>
                            <Button className="w-full capitalize! justify-start! flex gap-3 tex-[14px] text-[rgba(0,0,0,0.8)]! font-[500]! items-center py-2! hover:bg-[#f1f1f1]!">
                                <LuUserRound className="text-[20px]" /><span>Users</span>
                            </Button>
                        </Link>

                        <Button className="w-full capitalize! justify-start! flex gap-3 tex-[14px] text-[rgba(0,0,0,0.8)]! font-[500]! items-center hover:bg-[#f1f1f1]!" onClick={() => isOpenSubMenu(2)}>
                            <IoCartOutline className="text-[20px]" /><span>Products</span>
                            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"><FaAngleDown className={`transition-all ${subMenuIndex === 2 ? 'rotate-180' : ''}`} /></span>
                        </Button>

                        <Collapse isOpened={subMenuIndex === 2 ? true : false}>
                            <ul className="w-full">
                                <li className="w-full">
                                    <Link to={"/products"}>
                                        <Button className="text-[rgba(0,0,0,0.7)]! capitalize! justify-start! w-full! text-[13px]! font-[500]! pl-19! flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]"></span>{" "}
                                            Product list
                                        </Button>
                                    </Link>
                                </li>

                                <li className="w-full">
                                    <Link to={"/products/upload"}>
                                        <Button className="text-[rgba(0,0,0,0.7)]! capitalize! justify-start! w-full! text-[13px]! font-[500]! pl-19! flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]"></span>{" "}
                                            Add a Product
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>

                        <Button className="w-full capitalize! justify-start! flex gap-3 tex-[14px] text-[rgba(0,0,0,0.8)]! font-[500]! items-center hover:bg-[#f1f1f1]!" onClick={() => isOpenSubMenu(3)}>
                            <MdOutlineCategory className="text-[20px]" /><span>Category</span>
                            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"><FaAngleDown className={`transition-all ${subMenuIndex === 3 ? 'rotate-180' : ''}`} /></span>
                        </Button>

                        <Collapse isOpened={subMenuIndex === 3 ? true : false}>
                            <ul className="w-full">
                                <li className="w-full">
                                    <Link to={"/Category"}>
                                        <Button className="text-[rgba(0,0,0,0.7)]! capitalize! justify-start! w-full! text-[13px]! font-[500]! pl-19! flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]"></span>{" "}
                                            Category list
                                        </Button>
                                    </Link>
                                </li>

                                <li className="w-full">
                                    <Link to={"/Category/add"}>
                                        <Button className="text-[rgba(0,0,0,0.7)]! capitalize! justify-start! w-full! text-[13px]! font-[500]! pl-19! flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]"></span>{" "}
                                            Add Category
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>

                        <Link to={"/orders"}>
                            <Button className="w-full capitalize! justify-start! flex gap-3 tex-[14px] text-[rgba(0,0,0,0.8)]! font-[500]! items-center py-2! hover:bg-[#f1f1f1]!">
                                <BsBagCheck className="text-[20px]" /><span>Orders</span>
                            </Button>
                        </Link>

                        <Button className="w-full capitalize! justify-start! flex gap-3 tex-[14px] text-[rgba(0,0,0,0.8)]! font-[500]! items-center py-2! hover:bg-[#f1f1f1]!">
                            <AiOutlineLogout className="text-[20px]" /><span>Logout</span>
                        </Button>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Sidebar;