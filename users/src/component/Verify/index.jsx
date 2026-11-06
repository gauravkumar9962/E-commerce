import Button from "@mui/material/Button";
import React from "react";
import OTPBox from "../OTPBox";
const Verify =()=>{

    return (
        <section className="section !py-10">
            <div className="container">
                <div className="card shadow-md w-[500px] !m-auto rounded-md bg-white !p-5 !px-10">
                    <div className="text-center flex items-center justify-center">
                        <img src="/verify.png" width={"80"}/>
                    </div>
                    <h3 className="text-center text-[20px] text-black !mt-4 !mb-1">Verify OTP</h3>

                    <p className="text-center !mt-0 !mb-4">OTP send to <span className="text-[#ff5252] font-bold">spam123@gmail.com</span></p>

                    <OTPBox/>
            </div>
            </div>
        </section>
    )
}
export default Verify;