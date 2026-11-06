import React, { useState } from "react";
import AccountSidebar from "../../component/AccountSidebar";
import Button from "@mui/material/Button";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Badge from "../../component/Badge";

const Orders = () => {

    const [isOpenOrederdProduct, setIsOpenOrederdProduct] = useState(null);

    const isShowOrderdProduct = (index) => {
        if (isOpenOrederdProduct === index) {
            setIsOpenOrederdProduct(null);
        } else {
            setIsOpenOrederdProduct(index);
        }
    }
    return (
        <section className="py-10! w-full">
            <div className="container flex gap-5">
                <div className="col1 w-[20%]">
                    <AccountSidebar />
                </div>
                <div className="col2 w-[80%]">
                    <div className="shadow-md rounded-md bg-white">
                        <div className="!py-2 !px-3 border-b border-[rgba(0,0,0,0.3)]">
                            <h2>My Oders</h2>
                            <p className="!mt-0">There are <span className="font-bold text-[#ff5252]">2</span> Oders</p>

                            <div className="relative overflow-x-auto !mt-5">
                                <table className="w-full text-sm text-left rtl:text-right text-body">
                                    <thead className="text-xs text-body bg-gray-50 border-b rounded-base border-default">
                                        <tr>
                                            <th scope="col" className="!px-6 !py-3">

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
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1] mt-3!" onClick={() => isShowOrderdProduct(0)}>

                                                {
                                                    isOpenOrederdProduct === 0 ? <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" /> : <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                                }

                                            </Button>
                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                <span className="text-[#ff5252]">e923ue83u3jc399c3</span>
                                            </td>
                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                <span className="text-[#ff5252]">232093843290</span>
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

                                        {
                                            isOpenOrederdProduct === 0 && (
                                                <tr>
                                                    <td colSpan={"6"}>
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
                                                    </td>
                                                </tr>
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    )
}

export default Orders;