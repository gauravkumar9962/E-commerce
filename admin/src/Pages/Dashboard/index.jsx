import React, { useContext, useState } from "react";
import DashboardBoxes from "../../Components/DashboardBoxes";
import { FaHandsClapping, FaPlus } from "react-icons/fa6";
import Button from "@mui/material/Button";
import Tailwind_Css_Table from "../../Components/Tailwind_Css_Table";
import Material_UI_Table from "../../Components/Material_UI_Table";
import Chart from "../../Components/Chart";
import { MyContext } from "../../App";
import RecentOrders from "../../Components/RecentOrders";

const Dashboard = () => {

    const context = useContext(MyContext);

    return (
        <>
            <div className="w-full shadow-lg py-2! px-5! bg-gradient-to-r from-red-100 to-green-100 border border-[rgba(0,0,0,0.2)] flex items-center gap-8 mb-5! justify-between rounded-4xl">
                <div className="info">
                    <h1 className="text-[35px] font-bold leading-10 mb-3!">Good Morning,<br /> <span className="flex items-center gap-5">Cameron<FaHandsClapping className="text-[#2ccf86] text-[30px]" /></span></h1>
                    <p>Here's What happening on your store today. See the statistics at onec.</p>
                    <Button className="btn-blue capitalize! mt-7! gap-2" onClick={() => context.setIsOpenFullScreenPanel({
                        open: true,
                        model: 'Add Product'
                    })}><FaPlus />Add Product</Button>
                </div>
                <img src="https://i.pinimg.com/1200x/01/de/21/01de210ff30d1a63e9eb3c38ccc6e68f.jpg" className="w-[300px] h-[300px] object-cover rounded-4xl" />
            </div>
            <div>
                <DashboardBoxes />

                <Tailwind_Css_Table />
                <Material_UI_Table />


                <RecentOrders />

                <Chart />
            </div>

        </>
    )
}
export default Dashboard;