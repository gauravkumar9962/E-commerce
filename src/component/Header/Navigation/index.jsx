import React from 'react'
import Button from '@mui/material/Button';
import { RiMenu2Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from './CategoryPanel';
import { useState } from 'react';
import "../Navigation/style.css"

const Navigation = () => {

    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    }

    return (
        <>
            <nav>
                <div className='container flex items-center justify-end gap-10'>
                    <div className='col_1 w-[30%]'>
                        <Button className='!text-black gap-2 w-full' onClick={openCategoryPanel}><RiMenu2Line className='text-[18px]' />Shop By Categories<IoIosArrowForward className='!ml-auto font-bold' /></Button>
                    </div>

                    <div className='col_2 !w-[70%]'>
                        <ul className='flex items-center gap-6 nav'>
                            <li className='list-none'>
                                <Link to="/" className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>Home</Button>
                                </Link>
                            </li>

                            <li className='list-none !relative'>
                                <Link to="/" className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>Fashion</Button>
                                </Link>

                                <div className='submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all'>
                                    <ul>
                                        <li className='list-none w-full relative'>
                                            <Link to="/" className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Men</Button>

                                                <div className='submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0 transition-all'>
                                                    <ul>
                                                        <li className='list-none w-full'>
                                                            <Link to="/" className='w-full'>
                                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Men</Button>
                                                            </Link>
                                                        </li>

                                                        <li className='list-none w-full'>
                                                            <Link to="/" className='w-full'>
                                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Baby</Button>
                                                            </Link>
                                                        </li>

                                                        <li className='list-none w-full'>
                                                            <Link to="/" className='w-full'>
                                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Women</Button>
                                                            </Link>
                                                        </li>

                                                        <li className='list-none w-full'>
                                                            <Link to="/" className='w-full'>
                                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Boys</Button>
                                                            </Link>
                                                        </li>

                                                        <li className='list-none w-full'>
                                                            <Link to="/" className='w-full'>
                                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Kids</Button>
                                                            </Link>
                                                        </li>

                                                        <li className='list-none w-full'>
                                                            <Link to="/" className='w-full'>
                                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Girls</Button>
                                                            </Link>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className='list-none w-full'>
                                            <Link to="/" className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Baby</Button>
                                            </Link>
                                        </li>

                                        <li className='list-none w-full'>
                                            <Link to="/" className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Women</Button>
                                            </Link>
                                        </li>

                                        <li className='list-none w-full'>
                                            <Link to="/" className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Boys</Button>
                                            </Link>
                                        </li>

                                        <li className='list-none w-full'>
                                            <Link to="/" className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Kids</Button>
                                            </Link>
                                        </li>

                                        <li className='list-none w-full'>
                                            <Link to="/" className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Girls</Button>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>

                            </li>

                            <li className='list-none'>
                                <Link to="/" className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>Electronics</Button>
                                </Link>
                            </li>

                            <li className='list-none'>
                                <Link to="/" className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>Bags</Button>
                                </Link>
                            </li>

                            <li className='list-none'>
                                <Link to="/" className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>Footware</Button>
                                </Link>
                            </li>

                            <li className='list-none'>
                                <Link to="/" className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>Groceries</Button>
                                </Link>
                            </li>

                            <li className='list-none'>
                                <Link to="/" className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>Beauty</Button>
                                </Link>
                            </li>

                            <li className='list-none'>
                                <Link to="/" className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>Wellness</Button>
                                </Link>
                            </li>

                            <li className='list-none'>
                                <Link to="/" className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>Jewellery</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='col_3 !w-[30%]'>
                        <p className='text-[14px] font-[500] flex items-center mb-0 mt-0'><GoRocket className='text-[18px]' />Free International Delivery</p>
                    </div>
                </div>
            </nav>

            {/* Categories panel component */}
            <CategoryPanel openCategoryPanel={openCategoryPanel} isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel} />

        </>
    )
}
export default Navigation;