import React, { useState } from "react";
import DashboardBoxes from "../../Components/DashboardBoxes";
import { FaHandsClapping, FaPlus } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import Badge from "../../Components/Badge";
import { Collapse } from "react-collapse";
import Tailwind_Css_Table from "../../Components/Tailwind_Css_Table";
import Material_UI_Table from "../../Components/Material_UI_Table";
import Chart from "../../Components/Chart";

const Dashboard = () => {

    const [isOpenOrederdProduct, setIsOpenOrederdProduct] = useState(null);

    const isShowOrderdProduct = (index) => {
        if (isOpenOrederdProduct === index) {
            setIsOpenOrederdProduct(null);
        } else {
            setIsOpenOrederdProduct(index);
        }
    }

    return (
        <>
            <div className="w-full py-2! px-5! bg-gradient-to-r from-red-50 to-[#dffce3] border border-[rgba(0,0,0,0.2)] flex items-center gap-8 mb-5! justify-between rounded-4xl">
                <div className="info">
                    <h1 className="text-[35px] font-bold leading-10 mb-3!">Good Morning,<br /> <span className="flex items-center gap-5">Cameron<FaHandsClapping className="text-[#2ccf86] text-[30px]" /></span></h1>
                    <p>Here's What happening on your store today. See the statistics at onec.</p>
                    <Button className="btn-blue capitalize! mt-7! gap-2"><FaPlus />Add a Product</Button>
                </div>
                <img src="https://i.pinimg.com/1200x/01/de/21/01de210ff30d1a63e9eb3c38ccc6e68f.jpg" className="w-[300px] h-[300px] object-cover rounded-4xl" />
            </div>
            <div>
                <DashboardBoxes />

                <Tailwind_Css_Table />
                <Material_UI_Table />


                <div className="card my-5! shadow-md rounded-lg bg-white">
                    <div className="flex items-center justify-between py-5! px-5!">
                        <h2 className="text-[19px] font-[600]">Recent Orders</h2>
                    </div>

                    <div className="relative overflow-x-auto !mt-5">
                        <table className="w-full text-sm text-left rtl:text-right text-body">
                            <thead className="text-xs text-body bg-gray-50 border-b rounded-base border-default">
                                <tr>
                                    <th scope="col" className="!px-6 !py-3">
                                        &nbsp;
                                    </th >
                                    <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                        Order ID
                                    </th>
                                    <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                        Payment ID
                                    </th>
                                    <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                        Name
                                    </th>
                                    <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                        Phone Number
                                    </th>
                                    <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                        Address
                                    </th>
                                    <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                        PIN Code
                                    </th>
                                    <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                        Total Amount
                                    </th>
                                    <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                        Email
                                    </th>
                                    <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                        User ID
                                    </th>
                                    <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                        Order Status
                                    </th>
                                    <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                        Date
                                    </th>

                                </tr>
                            </thead>

                            <tbody>
                                <tr className="bg-neutral-primary">
                                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1] ml-5! mt-3!" onClick={() => isShowOrderdProduct(0)}>

                                        {
                                            <FaAngleDown className={`text-[16px] text-[rgba(0,0,0,0.7)] transition-all ${isOpenOrederdProduct === 0 ? 'rotate-180' : ''}`} />
                                        }

                                    </Button>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        <span className="text-[#3872fa]">e923ue83u3jc399c3</span>
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        <span className="text-[#3872fa]">232093843290</span>
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        gaurav kumar
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        9483849203
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        <span className="">Ismailpur Faridabad Hariyana Shivin clave near magal bazar house no.627 gali no.6 pusta road</span>
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        112271
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        $1120
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        wuthering@gmail.com
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        <span className="text-[#ff5252]">233442423455766554</span>
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        <Badge status="delivered" />
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        2026-12-10
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan={"10"}>
                                        <Collapse isOpened={isOpenOrederdProduct === 0 ? true : false}>
                                            <div className="relative overflow-x-auto mt-5!">
                                                <table className="w-full text-sm text-left rtl:text-right text-body">
                                                    <thead className="text-xs text-body bg-gray-50 border-b rounded-base border-default">
                                                        <tr>
                                                            <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                                                Product ID
                                                            </th>
                                                            <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                                                Product Title
                                                            </th>
                                                            <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                                                Image
                                                            </th>
                                                            <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                                                Ouantity
                                                            </th>
                                                            <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                                                Price
                                                            </th>
                                                            <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                                                SubTotal
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="bg-neutral-primary">
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                <span>e923ue83u3jc399c3</span>
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                <span>A shirt-pant with tie</span>
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                <img src="https://i.pinimg.com/736x/68/b3/44/68b344703a8d920e0b1a41a44227c289.jpg" className="w-[50px] h-[50px] object-cover rounded-md" />
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                1
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                $322
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                $322
                                                            </td>
                                                        </tr>

                                                        <tr className="bg-neutral-primary">
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                <span>e923ue83u3jc399c3</span>
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                <span>A shirt-pant with tie</span>
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                <img src="https://i.pinimg.com/736x/68/b3/44/68b344703a8d920e0b1a41a44227c289.jpg" className="w-[50px] h-[50px] object-cover rounded-md" />
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                1
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                $322
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                $322
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Collapse>
                                    </td>
                                </tr>

                            </tbody>

                            <tbody>
                                <tr className="bg-neutral-primary">
                                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1] ml-5! mt-3!" onClick={() => isShowOrderdProduct(1)}>

                                        {
                                            <FaAngleDown className={`text-[16px] text-[rgba(0,0,0,0.7)] transition-all ${isOpenOrederdProduct === 1 ? 'rotate-180' : ''}`} />
                                        }

                                    </Button>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        <span className="text-[#3872fa]">e923ue83u3jc399c3</span>
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        <span className="text-[#3872fa]">232093843290</span>
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        gaurav kumar
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        9483849203
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        <span className="">Ismailpur Faridabad Hariyana Shivin clave near magal bazar house no.627 gali no.6 pusta road</span>
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        112271
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        $1120
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        wuthering@gmail.com
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        <span className="text-[#ff5252]">233442423455766554</span>
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        <Badge status="delivered" />
                                    </td>
                                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                        2026-12-10
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan={"10"}>
                                        <Collapse isOpened={isOpenOrederdProduct === 1 ? true : false}>
                                            <div className="relative overflow-x-auto mt-5!">
                                                <table className="w-full text-sm text-left rtl:text-right text-body">
                                                    <thead className="text-xs text-body bg-gray-50 border-b rounded-base border-default">
                                                        <tr>
                                                            <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                                                Product ID
                                                            </th>
                                                            <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                                                Product Title
                                                            </th>
                                                            <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                                                Image
                                                            </th>
                                                            <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                                                Ouantity
                                                            </th>
                                                            <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                                                Price
                                                            </th>
                                                            <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                                                                SubTotal
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="bg-neutral-primary">
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                <span>e923ue83u3jc399c3</span>
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                <span>A shirt-pant with tie</span>
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                <img src="https://i.pinimg.com/736x/68/b3/44/68b344703a8d920e0b1a41a44227c289.jpg" className="w-[50px] h-[50px] object-cover rounded-md" />
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                1
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                $322
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                $322
                                                            </td>
                                                        </tr>

                                                        <tr className="bg-neutral-primary">
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                <span>e923ue83u3jc399c3</span>
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                <span>A shirt-pant with tie</span>
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                <img src="https://i.pinimg.com/736x/68/b3/44/68b344703a8d920e0b1a41a44227c289.jpg" className="w-[50px] h-[50px] object-cover rounded-md" />
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                1
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                $322
                                                            </td>
                                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                $322
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Collapse>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
                
                <Chart />
            </div>

        </>
    )
}
export default Dashboard;