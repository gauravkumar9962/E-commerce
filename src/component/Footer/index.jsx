import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiDropbox } from "react-icons/tfi";
import { IoWalletOutline } from "react-icons/io5";
import { FiGift } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { Link, Links } from 'react-router-dom';
import { HiOutlineChatAlt2 } from "react-icons/hi";
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { RiPaypalFill } from "react-icons/ri";
import { SiPaytm } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa6";



const Footer = () => {
    return (
        <>
            <footer className='py-6 bg-[#f6f6f6]'>
                <div className='container'>
                    <div className='flex items-center justify-center gap-2 !py-10 !pb-10'>
                        <div className='co1 flex items-center justify-center flex-col group w-[16%]'>
                            <LiaShippingFastSolid className='text-[50px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-2' />
                            <h3 className='text-[16px] font-[600] !mt-3'>Free Shipping</h3>
                            <p className=' text-[12px] font-[500]'>For all Orders Over $100</p>
                        </div>

                        <div className='co1 flex items-center justify-center flex-col group w-[16%]'>
                            <TfiDropbox className='text-[50px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-2' />
                            <h3 className='text-[16px] font-[600] !mt-3'>30 Days Returns</h3>
                            <p className=' text-[12px] font-[500]'>For an Exchange Product</p>
                        </div>

                        <div className='co1 flex items-center justify-center flex-col group w-[16%]'>
                            <IoWalletOutline className='text-[50px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-2' />
                            <h3 className='text-[16px] font-[600] !mt-3'>Secured Payment</h3>
                            <p className=' text-[12px] font-[500]'>Payment Cards Accepted</p>
                        </div>

                        <div className='co1 flex items-center justify-center flex-col group w-[16%]'>
                            <FiGift className='text-[50px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-2' />
                            <h3 className='text-[16px] font-[600] !mt-3'>Special Gifts</h3>
                            <p className=' text-[12px] font-[500]'>Our First Prodect Order</p>
                        </div>

                        <div className='co1 flex items-center justify-center flex-col group w-[16%]'>
                            <BiSupport className='text-[50px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-2' />
                            <h3 className='text-[16px] font-[600] !mt-3'>Support 24/7</h3>
                            <p className=' text-[12px] font-[500]'>Contact us Anytime</p>
                        </div>


                    </div>
                    <hr />
                    <br />

                    <div className='footer flex gap-3 !py-12'>
                        <div className='part1 w-[25%] border-r border-[rgba(0,0,0,0.2)]'>
                            <h2 className='text-[20px] font-[600] !mb-4'>Contant us</h2>
                            <p className='text-[14px] font-[400] !pb-4'>Classyshop - Mega Super Store <br /> 507-Union Trade Center France</p>

                            <Link className='link' to="mailto:someone@example.com">sales@yourcompany.com</Link>
                            <span className='text-[22px] font-[600] block w-full !mt-3 !mb-5 text-[#ff5252]'>(+91) 9876-543-210</span>

                            <div className='flex items-center gap-2'><HiOutlineChatAlt2 className='text-[45px] text-[#ff5252]' />
                                <span className='text-[17px] font-[600]'>Online Chat <br /> Get Expert Help</span>
                            </div>
                        </div>

                        <div className='part2 w-[20%] flex !pl-8'>
                            <div className='part2_col1 w-[50%]'>
                                <h2 className='text-[20px] font-[600] !mb-4'>Products</h2>

                                <ul className='list'>
                                    <li className='list-none text-[14px] w-full !mb-3'>
                                        <Link to="/" className='link'>Prices drop</Link>
                                    </li>

                                    <li className='list-none text-[14px] w-full !mb-3'>
                                        <Link to="/" className='link'>New Products</Link>
                                    </li>

                                    <li className='list-none text-[14px] w-full !mb-3'>
                                        <Link to="/" className='link'>Best Sales</Link>
                                    </li>

                                    <li className='list-none text-[14px] w-full !mb-3'>
                                        <Link to="/" className='link'>Contact Us</Link>
                                    </li>

                                    <li className='list-none text-[14px] w-full !mb-3'>
                                        <Link to="/" className='link'>Sitemap</Link>
                                    </li>

                                    <li className='list-none text-[14px] w-full !mb-3'>
                                        <Link to="/" className='link'>Stores</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='part2 w-[50%] flex !pl-0'>
                            <div className='part2_col2 w-[50%]'>
                                <h2 className='text-[20px] font-[600] !mb-4'>Our Company</h2>

                                <ul className='list'>
                                    <li className='list-none text-[14px] w-full !mb-3'>
                                        <Link to="/" className='link'>Delivery</Link>
                                    </li>

                                    <li className='list-none text-[14px] w-full !mb-3'>
                                        <Link to="/" className='link'>Legal Notice</Link>
                                    </li>

                                    <li className='list-none text-[14px] w-full !mb-3'>
                                        <Link to="/" className='link'>Terms And Condition Of Use</Link>
                                    </li>

                                    <li className='list-none text-[14px] w-full !mb-3'>
                                        <Link to="/" className='link'>About Us</Link>
                                    </li>

                                    <li className='list-none text-[14px] w-full !mb-3'>
                                        <Link to="/" className='link'>Sceure Payment</Link>
                                    </li>

                                    <li className='list-none text-[14px] w-full !mb-3'>
                                        <Link to="/" className='link'>Login</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='part2 w-[95%] flex !pl-15 flex-col'>
                                <h2 className='text-[18px] font-[600] !mb-4'>Subscribe to newsletter</h2>
                                <p className='text-[13px]'>Subscribe to our latest newletter to get news about special discounts.</p>

                                <form className='!mt-5'>
                                    <input type="text" className='w-full h-[45px] border outline-none !p1-4 rounded-sm !mb-4 focus:border-[#ff5252]' placeholder='Your Email Adderss' />

                                    <Button className='btn-org'>SUBSCRIBE</Button>
                                    <FormControlLabel control={<Checkbox/>} label="I agree to the term and condition and the privacy policy" />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className='bottomStrip border-t border-[rgba(0,0,0,0.1)] !py-3 bg-white'>
                <div className='container flex items-center justify-between'>
                    <ul className='flex items-center gap-2'>
                        <li className='list-none'>
                            <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.3)] flex items-center justify-center group hover:bg-[#ff5252] transition-all'>
                                <FaFacebookF className='text-[15px] group-hover:text-white' />
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.3)] flex items-center justify-center group hover:bg-[#ff5252] transition-all'>
                                <FaXTwitter className='text-[15px] group-hover:text-white' />
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.3)] flex items-center justify-center group hover:bg-[#ff5252] transition-all'>
                                <FaYoutube className='text-[15px] group-hover:text-white' />
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.3)] flex items-center justify-center group hover:bg-[#ff5252] transition-all'>
                                <FaPinterestP className='text-[15px] group-hover:text-white' />
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.3)] flex items-center justify-center group hover:bg-[#ff5252] transition-all'>
                                <FaInstagram className='text-[15px] group-hover:text-white' />
                            </Link>
                        </li>
                    </ul>

                    <p className='text-[13px] text-center mb-0'>@ 2026 - Ecommerce Template</p>

                    <div className='flex items-center justify-between gap-6'>
                        <li><RiVisaLine className='text-[35px]'/></li>
                        <li><RiPaypalFill className='text-[20px]'/></li>
                        <li><SiPaytm className='text-[35px]'/></li>
                        <li><FaGooglePay className='text-[35px]'/></li>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer;