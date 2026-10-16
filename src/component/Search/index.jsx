import React from "react";
import { Link } from "react-router-dom";
import '../Search/style.css';
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";
const Search = () => {
    return (
        <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[7px] relative">
            <input type="text" placeholder="Search Products..."className="w-full h-[50px] focus:outline-none bg-inherit p-2 text-[15px]"/>
             <Button className="!absolute top-[5px] right-[5px] z-50 !w-[40px] !min-w-[40px] h-[40px] !rounded-full !text-black"><FaSearch className="text-[#414141] text-[19px]"/></Button>
        </div>
    )
}
export default Search;