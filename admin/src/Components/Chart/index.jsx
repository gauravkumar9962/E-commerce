import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, AreaChart } from 'recharts';


const data = [
    { name: 'Jan', sales: 4000, users: 2400 },
    { name: 'Feb', sales: 3000, users: 1398 },
    { name: 'Mar', sales: 2000, users: 5800 },
    { name: 'Apr', sales: 2780, users: 3908 },
    { name: 'May', sales: 4000, users: 2400 },
    { name: 'Jun', sales: 3000, users: 1398 },
    { name: 'Jul', sales: 2000, users: 5800 },
    { name: 'Aug', sales: 2780, users: 3908 },
    { name: 'Sep', sales: 4000, users: 2400 },
    { name: 'Oct', sales: 3000, users: 1398 },
    { name: 'Nov', sales: 2000, users: 1800 },
    { name: 'Dec', sales: 2780, users: 3908 },
];


const Chart = ({ isAnimationActive = true }) => {

    return (
        <>

            <div className="cart py-5 px-5 shadow-md sm:rounded-lg bg-white">
                <div className="flex items-center justify-between py-5 pb-0">
                    <h2 className="text-[18px] font-[600]">Total Users & Total Sales</h2>
                </div>

                <div className="flex items-center gap-5 py-5 pt-1">
                    <span className="flex items-center gap-1 text-[15px]">
                        <span className="block bg-green-500 rounded-full w-[8px] h-[8px]"></span>Total Users
                    </span>

                    <span className="flex items-center gap-1 text-[15px]">
                        <span className="block bg-red-500 rounded-full w-[8px] h-[8px]"></span>Total Sales
                    </span>
                </div>
                <AreaChart width={1380} height={500} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid stroke="none" />
                    <XAxis dataKey="name" tick={{ fontSize: 14 }} />
                    <YAxis tick={{ fontSize: 14 }} />
                    <Tooltip />
                    <Legend />
                    <Area fill="#ff5252" fillOpacity={0.3} type="monotone" dataKey="sales" stroke="#ff5252" strokeWidth={3} activeDot={{ r: 8 }} />
                    <Area fill="#52ff83" fillOpacity={0.3}  type="monotone" dataKey="users" stroke="#82ca9d" strokeWidth={3} isAnimationActive={isAnimationActive} animationBegin={200} animationDuration={1300} />
                </AreaChart>
            </div>


        </>
    )
}
export default Chart;