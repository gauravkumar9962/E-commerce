import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const [isPasswordShow, setIsPasswordShow] = useState(false)
    return (
        <section className="section !py-10">
            <div className="container">
                <div className="card shadow-md w-[500px] !m-auto rounded-md bg-white !p-5 !px-10">
                    <h3 className="text-center text-[20px]">Sign Up</h3>

                    <form className="w-full !mt-5">
                        <div className="form-group w-full !mb-5">
                             <TextField type="name" id="name" label="Enter Name" variant="outlined" className="w-full" />
                        </div>

                        <div className="form-group w-full !mb-5">
                             <TextField type="email" id="email" label="Enter Email" variant="outlined" className="w-full" />
                        </div>

                        <div className="form-group w-full relative">
                             <TextField type={isPasswordShow===false ? 'password' : 'text'} id="password" label="Enter Password" variant="outlined" className="w-full" />

                             <Button className="!absolute !top-[10px] right-[10px] z-50 !w-[35px] h-[35px] !min-w-[35px] !rounded-full !text-black" onClick={()=>{setIsPasswordShow(!isPasswordShow)}}>
                                {
                                    isPasswordShow===false ? <IoMdEye className="text-[20px]"/> : <IoMdEyeOff className="text-[20px]"/>
                                }
                                </Button>
                        </div>

                        <div className="flex items-center w-full !mt-5 !mb-3">
                            <Button className="btn-org btn-lg w-full">Continue</Button>
                        </div>

                        <p className="text-center">Already have an Account? <Link className="link text-[14px] text-[#ff5252] font-[600]" to='/login'>Login</Link></p>

                        <p className="text-center font-[400]">Or continue with social account</p>

                        <Button className="flex gap-3 w-full !bg-[#f1f1f1] !text-black btn-lg"><FcGoogle className="text-[20px]"/>Login with Google</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register;