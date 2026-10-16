import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Navigation from "./Navigation";
import IconButton from '@mui/material/IconButton';
import { MdShoppingCart } from "react-icons/md";
import { IoMdGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';

const Header = () => {
    return (
        <header className="bg-white">
            <div className="top-strip !py-2 border-t-[5px] border-gray-250 border-b-[1px]">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col1 w-[50%]">
                            <p className="text-[13px] font-[500]">
                                Get up to 50% off new season styles, for limited time only
                            </p>
                        </div>

                        <div className="col2 flex items-center justify-end">
                            <ul className="flex items-centern gap-3">
                                <li className="list-none">
                                    <Link to="help-center" className="text-[13px] link font-[500] transition">
                                        Help Center{" "}
                                    </Link>
                                </li>

                                <li className="list-none">
                                    <Link to="/order-tracking" className="text-[13px] link font-[500] transition">
                                        Order Tracking
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="header border-b-[1px] border-gray-201">
                <div className="container flex place-items-center justify-between">
                    <div className="col1 w-[16%]">
                        <Link to={"/"}><img src="/amazon.png" /></Link>
                    </div>

                    <div className="col2 w-[45%] !pl-13">
                        <Search />
                    </div>

                    <div className="col3 w-[30%] flex items-center !pl-7">
                        <ul className="flex items-center justify-end gap-5 w-full">
                            <li className="list-none !pr-17">
                                <Link to="/login" className="link transition text-[15px] font-[500]">Login</Link> | &nbsp; <Link to="/register" className="link transition text-[15px] font-[500]">Register</Link>
                            </li>

                            <li>
                                <Tooltip title="Compare">
                                    <Stack spacing={2} direction="row">
                                        <IconButton aria-label="show 99 unread messages">
                                            <Badge color="secondary" badgeContent={100}>
                                                <IoMdGitCompare />
                                            </Badge>
                                        </IconButton>
                                    </Stack>
                                </Tooltip>
                            </li>

                            <li>
                                <Tooltip title="Wishlist">
                                    <Stack spacing={2} direction="row">
                                        <IconButton aria-label="show 99 unread messages">
                                            <Badge color="secondary" badgeContent={100}>
                                                <FaRegHeart />
                                            </Badge>
                                        </IconButton>
                                    </Stack>
                                </Tooltip>
                            </li>

                            <li>
                                <Tooltip title="Cart">
                                    <Stack spacing={2} direction="row">
                                        <IconButton aria-label="show 99 unread messages">
                                            <Badge color="secondary" badgeContent={100}>
                                                <MdShoppingCart />
                                            </Badge>
                                        </IconButton>
                                    </Stack>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

                <Navigation/>

        </header>
    );
}
export default Header;