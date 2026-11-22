import Button from "@mui/material/Button";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6"
import OTPBox from "../../Components/OTPBox";

const VerifyAccount = () => {

    return (
        <section className="w-full h-full fixed bg-white">
            <header className="w-full fixed top-0 left-0 px-4 py-3 flex items-center justify-between z-50">
                <Link to={"/"}>
                    <div className="container h-[70px]">
                        <img src="/header.png" className="w-[100px]" />
                    </div>
                </Link>

                <div className="flex items-center gap-2">
                    <NavLink to={"/login"} exact={true} activeClassName={"isActive"}>
                        <Button className="rounded-full! text-[13px]! px-3! bg-[#dcdcdc]! flex gap-2">
                            <CgLogIn className="text-[15px]" />Login
                        </Button>
                    </NavLink>
                    <NavLink to={"/sign-up"} exact={true} activeClassName={"isActive"}>
                        <Button className="rounded-full! text-[13px]! px-3! bg-[#fff]! flex gap-2">
                            <FaRegUser className="text-[12px]" />Sign In
                        </Button>
                    </NavLink>
                </div>
            </header>
            <img src="/login.jpg" className="w-full fixed bottom-0 left-0 opacity-10 pointer-events-none" />

            <div className="loginBox card w-[35%] h-[300px] mx-auto mt-20 z-10">
                <div className="text-center">
                    <img src="/otp-verification.png" className="w-[230px] m-auto" />
                </div>
                <h1 className="text-center text-[35px] font-[800] mt-4">Welcome Back!<br />Please Verify Your Email Account</h1>



                <br />

                <div className="flex justify-center">
                    <span className="text-[15px] font-[500] flex items-center gap-2">OTP Send Top<p className="text-blue-500 font-bold">genshin@email.com</p></span>
                </div>

                <OTPBox />

            </div>
        </section>
    )
}
export default VerifyAccount;