import React from "react";
import { IoSearch } from "react-icons/io5"

const SearchBox=()=>{

    return (
        <div className="w-full h-auto bg-[#f1f1f1] relative overflow-hidden">
            <IoSearch className="absolute top-[12px] left-[10px] z-50 pointer-events-none opacity-50"/>
            <input type="text" className="w-full h-[40px] bg-[#f1f1f1] border border-[rgba(0,0,0,0.1)] p-2 pl-8 focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-md" placeholder="Search...."/>
        </div>
    )
}
export default SearchBox;