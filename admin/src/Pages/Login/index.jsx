import Button from "@mui/material/Button";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Login = () => {

    const [loadingGoogle, setLoadingGoogle] = React.useState(false);
    const [loadingFacebook, setLoadingFacebook] = React.useState(false);

    function handleClickGoogle() {
        setLoadingGoogle(true);
    }

    function handleClickFacebook() {
        setLoadingFacebook(true);
    }

    const emailPasswordId = React.useId();
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

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
                    <Button className="rounded-full! text-[13px]! px-3! bg-[#fff]! flex gap-2">
                        <FaRegUser className="text-[12px]" />Sign In
                    </Button>
                </div>
            </header>
            <img src="/login.jpg" className="w-full fixed bottom-0 left-0 opacity-10 pointer-events-none" />

            <div className="loginBox card w-[35%] h-[300px] mx-auto mt-20 z-10">
                <div className="text-center">
                    <img src="/login.png" className="w-[130px] m-auto" />
                </div>
                <h1 className="text-center text-[35px] font-[800] mt-4">Welcome Back!<br />Sign in with your credential</h1>

                <div className="flex items-center justify-center w-full mt-5 gap-3">
                    <Button
                        size="small"
                        onClick={handleClickGoogle}
                        loading={loadingGoogle}
                        startIcon={<FcGoogle />}
                        loadingPosition="start"
                        variant="outlined"
                        className="text-[15px]! py-2! capitalize! px-5! text-[rgba(0,0,0,0.8)]!"
                    >
                        sign in with google
                    </Button>

                    <Button
                        size="small"
                        onClick={handleClickFacebook}
                        loading={loadingFacebook}
                        startIcon={<BsFacebook />}
                        loadingPosition="start"
                        variant="outlined"
                        className="text-[15px]! py-2! capitalize! px-5! text-[rgba(0,0,0,0.8)]!"
                    >
                        sign in with facebook
                    </Button>
                </div>

                <br />

                <div className="w-full flex items-center justify-center gap-3">
                    <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.4)]"></span>
                    <span className="text-[15px] font-[500]">Or Sign in With Your Email</span>
                    <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.4)]"></span>
                </div>

                <br />

                <div className="w-full px-8">
                    <TextField
                        id="email"
                        label="Enter Email"
                        variant="outlined"
                        className="w-full" />

                    <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
                        <InputLabel htmlFor={`${emailPasswordId}-input`}>Password</InputLabel>
                        <OutlinedInput
                            id={`${emailPasswordId}-input`}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={
                                            showPassword ? 'hide the password' : 'display the password'
                                        }
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </div>

                <div className="flex items-center justify-between gap-3 ml-8 w-[610px]">
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                    <Link to={"forget-password"} className="text-[15px] font-[700] text-blue-500 hover:underline hover:text-gray-500">Forget Password?</Link>
                </div>
                <Button className="btn-blue  ml-8! h-[50px]! w-[610px]">
                    SIGN IN
                </Button>
            </div>
        </section>
    )
}
export default Login;