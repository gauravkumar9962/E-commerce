import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BsFillBagCheckFill } from "react-icons/bs";

const Checkout = () => {
    return (
        <section className="!py-10">
            <div className="container flex gap-5">
                <div className="leftCol w-[70%]">
                    <div className="card bg-white shadow-md !p-5 rounded-md w-full">
                        <h1>Billing Details</h1>

                        <form className="w-full !mt-5">
                            <div className="flex items-center gap-5 !pb-5">
                                <div className="col w-[50%]">
                                    <TextField type="name" className="w-full" label="Full Name" variant="outlined" size="small"/>
                                </div>
                                <div className="col w-[50%]">
                                    <TextField type="email" className="w-full" label="Email" variant="outlined" size="small"/>
                                </div>
                            </div>

                            <h4 className="text-[14px] font-[500] !mb-5">Street Address</h4>

                            <div className="flex items-center gap-5 !pb-5">
                                <div className="col w-[100%]">
                                    <TextField type="house-number" className="w-full" label="House no. & street name" variant="outlined" size="small"/>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 !pb-5">
                                 <div className="col w-[100%]">
                                    <TextField type="address-line2" className="w-full" label="Apartment, suite, unit, etc. (optional)" variant="outlined" size="small"/>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 !pb-5">
                                <div className="col w-[50%]">
                                    <TextField type="city" className="w-full" label="City" variant="outlined" size="small"/>
                                </div>
                                <div className="col w-[50%]">
                                    <TextField type="State-line2" className="w-full" label="State" variant="outlined" size="small"/>
                                </div>
                            </div>

                            <h4 className="text-[14px] font-[500] !mb-5">Postcode / ZIP</h4>

                            <div className="flex items-center gap-5 !pb-5">
                                 <div className="col w-[100%]">
                                    <TextField type="address-line2" className="w-full" label="ZIP Code" variant="outlined" size="small"/>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 !pb-5">
                                <div className="col w-[50%]">
                                    <TextField type="phone" className="w-full" label="Phone Number" variant="outlined" size="small"/>
                                </div>
                                <div className="col w-[50%]">
                                    <TextField type="email" className="w-full" label="Email Address" variant="outlined" size="small"/>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                <div className="rightCol w-[30%]">
                <div className="card shadow-md bg-white !p-5 rounded-md">
                    <h2 className="!mb-4">Your Order</h2>

                    <div className="flex items-center justify-between !py-3 border-t border-b border-[rgba(0,0,0,0.2)]">
                        <span className="text-[14px] font-[600]">Product</span>
                        <span className="text-[14px] font-[600]">Subtotal</span>
                    </div>

                    <div className="!mb-5 scroll max-h-[250px] overflow-y-scroll overflow-x-hidden !pr-2">

                        <div className="flex items-center justify-between !py-2">
                            <div className="part1 flex items-center gap-3">
                                <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                    <img src="https://i.pinimg.com/736x/59/3e/09/593e096b0fd57b2ce3c3f4e4c8780d16.jpg" className="w-full transition-all group-hover:scale-105"/>
                                </div>

                                <div className="info">
                                    <h4 className="text-[14px]">A-Line Kurti with saya</h4>
                                    <span className="text-[13px]">Qty : 1</span>
                                </div>
                            </div>
                            <span className="text-[14px] font-[500]">$1,000</span>
                        </div>

                        <div className="flex items-center justify-between !py-2">
                            <div className="part1 flex items-center gap-3">
                                <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                    <img src="https://i.pinimg.com/736x/59/3e/09/593e096b0fd57b2ce3c3f4e4c8780d16.jpg" className="w-full transition-all group-hover:scale-105"/>
                                </div>

                                <div className="info">
                                    <h4 className="text-[14px]">A-Line Kurti with saya</h4>
                                    <span className="text-[13px]">Qty : 1</span>
                                </div>
                            </div>
                            <span className="text-[14px] font-[500]">$1,000</span>
                        </div>

                        <div className="flex items-center justify-between !py-2">
                            <div className="part1 flex items-center gap-3">
                                <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                    <img src="https://i.pinimg.com/736x/59/3e/09/593e096b0fd57b2ce3c3f4e4c8780d16.jpg" className="w-full transition-all group-hover:scale-105"/>
                                </div>

                                <div className="info">
                                    <h4 className="text-[14px]">A-Line Kurti with saya</h4>
                                    <span className="text-[13px]">Qty : 1</span>
                                </div>
                            </div>
                            <span className="text-[14px] font-[500]">$1,000</span>
                        </div>

                        <div className="flex items-center justify-between !py-2">
                            <div className="part1 flex items-center gap-3">
                                <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                    <img src="https://i.pinimg.com/736x/59/3e/09/593e096b0fd57b2ce3c3f4e4c8780d16.jpg" className="w-full transition-all group-hover:scale-105"/>
                                </div>

                                <div className="info">
                                    <h4 className="text-[14px]">A-Line Kurti with saya</h4>
                                    <span className="text-[13px]">Qty : 1</span>
                                </div>
                            </div>
                            <span className="text-[14px] font-[500]">$1,000</span>
                        </div>

                        <div className="flex items-center justify-between !py-2">
                            <div className="part1 flex items-center gap-3">
                                <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                    <img src="https://i.pinimg.com/736x/59/3e/09/593e096b0fd57b2ce3c3f4e4c8780d16.jpg" className="w-full transition-all group-hover:scale-105"/>
                                </div>

                                <div className="info">
                                    <h4 className="text-[14px]">A-Line Kurti with saya</h4>
                                    <span className="text-[13px]">Qty : 1</span>
                                </div>
                            </div>
                            <span className="text-[14px] font-[500]">$1,000</span>
                        </div>
                    </div>

                    <Button className="btn-org btn-lg w-full flex gap-3"><BsFillBagCheckFill/>checkout</Button>
                </div>
            </div>
            </div>
        </section>
    )
}
export default Checkout