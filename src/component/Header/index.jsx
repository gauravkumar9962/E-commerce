import React, { useContext, useState } from "react";
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
import { MyContext } from "../../App";
import Button from "@mui/material/Button";
import { FaRegUser } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

const Header = () => {
    const context = useContext(MyContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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

                            {
                                context.isLogin === false ? (
                                    <li className="list-none !pr-17">
                                        <Link to="/login" className="link transition text-[15px] font-[500]">Login</Link> | &nbsp; <Link to="/register" className="link transition text-[15px] font-[500]">Register</Link>
                                    </li>
                                ) : (
                                    <>
                                        <Button className="myAccountWrap !text-[#000] flex items-center gap-3 cursor-pointer" onClick={handleClick}>
                                            <div className="flex items-center justify-center w-[40px] h-[40px] min-w-[40px] rounded-full bg-[#f1f1f1]"><FaRegUser className=" text-[16px] text-[rgba(0,0,0,0.7)]" /></div>

                                            <div className="info flex flex-col !mb-0">
                                                <h4 className="leading-3 text-[14px] text-[rgba(0,0,0,0.6)] font-[500] text-left justify-start">gaurav kumar</h4>
                                            </div>
                                        </Button>

                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={open}
                                            onClose={handleClose}
                                            onClick={handleClose}
                                            slotProps={{
                                                paper: {
                                                    elevation: 0,
                                                    sx: {
                                                        overflow: 'visible',
                                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                        mt: 1.5,
                                                        '& .MuiAvatar-root': {
                                                            width: 32,
                                                            height: 32,
                                                            ml: -0.5,
                                                            mr: 1,
                                                        },
                                                        '&::before': {
                                                            content: '""',
                                                            display: 'block',
                                                            position: 'absolute',
                                                            top: 0,
                                                            right: 14,
                                                            width: 10,
                                                            height: 10,
                                                            bgcolor: 'background.paper',
                                                            transform: 'translateY(-50%) rotate(45deg)',
                                                            zIndex: 0,
                                                        },
                                                    },
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <Link to={"/my-account"}>
                                            <MenuItem onClick={handleClose} className="flex gap-2">
                                                <FaRegUser className="text-[14px]"/> Profile
                                            </MenuItem>
                                            </Link>
                                            <Link to={"/my-orders"}>
                                            <MenuItem onClick={handleClose} className="flex gap-2">
                                                <IoBagCheckOutline className="text-[18px]" /> <span className="text-[14px]">Order</span>
                                            </MenuItem>
                                            </Link>
                                            <Link to={"/my-list"}>
                                            <MenuItem onClick={handleClose} className="flex gap-2">
                                                <IoMdHeartEmpty className="text-[18px]" /> <span className="text-[14px]">My List</span>
                                            </MenuItem>
                                            </Link>
                                            <MenuItem onClick={handleClose} className="flex gap-2">
                                                <IoIosLogOut className="text-[18px]" /> <span className="text-[14px]">Logout</span>
                                            </MenuItem>
                                        </Menu>
                                    </>
                                )
                            }



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
                                        <IconButton aria-label="show 99 unread messages" onClick={() => context.setOpenCartPanel(true)}>
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

            <Navigation />

        </header>
    );
}
export default Header;