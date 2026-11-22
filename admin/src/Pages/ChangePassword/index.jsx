import Button from "@mui/material/Button";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6"
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const ChangePassword = () => {

    const emailPasswordId = React.useId();
    const [showNewPassword, setShowNewPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
    const handleClickShowPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

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
                    <img src="/login.png" className="w-[130px] m-auto" />
                </div>
                <h1 className="text-center text-[35px] font-[800] mt-4">Welcome Back!<br />Set New Password</h1>



                <br />

                <div className="w-full px-8">


                    <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
                        <InputLabel htmlFor={`${emailPasswordId}-input`}>New Password</InputLabel>
                        <OutlinedInput
                            id={`${emailPasswordId}-input`}
                            type={showNewPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={
                                            showNewPassword ? 'hide the password' : 'display the password'
                                        }
                                        onClick={handleClickShowNewPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showNewPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="New Password"
                        />
                    </FormControl>

                    <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
                        <InputLabel htmlFor={`${emailPasswordId}-input`}>Confirm Password</InputLabel>
                        <OutlinedInput
                            id={`${emailPasswordId}-input`}
                            type={showConfirmPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={
                                            showConfirmPassword ? 'hide the password' : 'display the password'
                                        }
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Confirm Password"
                        />
                    </FormControl>
                </div>

                <br />
                <Button className="btn-blue  ml-8! h-[50px]! w-[610px]">
                    Login IN
                </Button>
            </div>
        </section>
    )
}
export default ChangePassword;