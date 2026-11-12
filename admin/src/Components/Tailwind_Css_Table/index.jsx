import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import ProgressBar from '../../Components/ProgressBar';
import Tooltip from '@mui/material/Tooltip';
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import Pagination from '@mui/material/Pagination';
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Tailwind_Css_Table = () => {

    const id = React.useId();
    const [categoryFilterVal, setCategoryFilterVal] = React.useState('');

    const handleChangeCatFilter = (event) => {
        setCategoryFilterVal(event.target.value);
    };

    return (
        <div className="relative overflow-x-auto !mt-5 bg-white">
            <div className="text-[20px] font-[600] px-6 py-3 w-full">Products
                <span className="text-[13px] font-[500] ml-2">(Tailwind css table)</span>
                <div className="mt-5 flex items-center justify-between">
                    <FormControl sx={{ minWidth: 200 }}>
                        <InputLabel id={`${id}-label`}>Category</InputLabel>
                        <Select
                            className="w-[225px]"
                            size="medium"
                            aria-describedby={`${id}-helper-text`}
                            labelId={`${id}-label`}
                            id={id}
                            value={categoryFilterVal}
                            label="Category"
                            onChange={handleChangeCatFilter}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Men</MenuItem>
                            <MenuItem value={20}>Women</MenuItem>
                            <MenuItem value={30}>Kids</MenuItem>
                        </Select>
                    </FormControl>
                    <div className="flex items-center gap-3">
                        <Button className="btn-green">Export</Button>
                        <Button className="btn-blue">Add Product</Button>
                    </div>
                </div>

            </div>

            <table className="w-full text-sm text-left rtl:text-right text-body">
                <thead className="text-body bg-gray-50 border-b rounded-base border-default">
                    <tr>
                        <th scope="col" className="!px-6 !py-3">
                            <div className="flex items-center gap-4">
                                <Checkbox {...label} size="small" />
                            </div>
                        </th >
                        <th scope="col" className="!px-2 !py-4 whitespace-nowrap">
                            Product
                        </th>
                        <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                            Category
                        </th>
                        <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                            Sub Category
                        </th>
                        <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                            Brand
                        </th>
                        <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                            Price
                        </th>
                        <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                            Sales
                        </th>
                        <th scope="col" className="!px-6 !py-4 whitespace-nowrap">
                            Action
                        </th>
                    </tr>
                </thead>
                <tr>
                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                        <Checkbox {...label} size="small" />
                    </td>

                    <td className="!px-2 !py-4 font-[500] whitespace-nowrap">
                        <div className="flex items-center gap-4">

                            <div className="img w-[65px] h-[65px] overflow-hidden rounded-md group">
                                <Link to={"product/93982"}>
                                    <img src="https://i.pinimg.com/736x/3a/2c/bd/3a2cbdd0e7995b011e7fa1da1c10c60d.jpg" className="w-full group-hover:scale-110 transition-all" /></Link>
                            </div>
                            <div className="info w-[75%]">
                                <Link to={"product/93982"}>
                                    <h3 className="font-[600] text-[13px]">✧ Columbina Hyposelenia (Damselette/Kuutar) ✧</h3>
                                </Link>

                            </div>
                        </div>
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        Electronics
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        Women
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        AnimeClub
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        <span className="line-through text-gray-500 text-[15px] font-[500]">$50.00</span><span className="text-[red] text-[15px] font-[600]"> / $58.00</span>
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        <p className="text-[14px]"><span className="font-[600]">234</span> Sales</p>
                        <ProgressBar value={50} type="error" />
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        <div className='flex items-center gap-3'>
                            <Tooltip title="Edit" placement="top">
                                <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                    <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                </Button>
                            </Tooltip>

                            <Tooltip title="View" placement="top">
                                <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                    <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                </Button>
                            </Tooltip>

                            <Tooltip title="Remove" placement="top">
                                <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                    <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                </Button>
                            </Tooltip>

                        </div>

                    </td>
                </tr>

                <tr>
                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                        <Checkbox {...label} size="small" />
                    </td>

                    <td className="!px-2 !py-4 font-[500] whitespace-nowrap">
                        <div className="flex items-center gap-4">

                            <div className="img w-[65px] h-[65px] overflow-hidden rounded-md group">
                                <Link to={"product/93982"}>
                                    <img src="https://i.pinimg.com/736x/3a/2c/bd/3a2cbdd0e7995b011e7fa1da1c10c60d.jpg" className="w-full group-hover:scale-110 transition-all" /></Link>
                            </div>
                            <div className="info w-[75%]">
                                <Link to={"product/93982"}>
                                    <h3 className="font-[600] text-[13px]">✧ Columbina Hyposelenia (Damselette/Kuutar) ✧</h3>
                                </Link>

                            </div>
                        </div>
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        Electronics
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        Women
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        AnimeClub
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        <span className="line-through text-gray-500 text-[15px] font-[500]">$50.00</span><span className="text-[red] text-[15px] font-[600]"> / $58.00</span>
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        <p className="text-[14px]"><span className="font-[600]">234</span> Sales</p>
                        <ProgressBar value={50} type="error" />
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        <div className='flex items-center gap-3'>
                            <Tooltip title="Edit" placement="top">
                                <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                    <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                </Button>
                            </Tooltip>

                            <Tooltip title="View" placement="top">
                                <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                    <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                </Button>
                            </Tooltip>

                            <Tooltip title="Remove" placement="top">
                                <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                    <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                </Button>
                            </Tooltip>

                        </div>

                    </td>
                </tr>

                <tr>
                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                        <Checkbox {...label} size="small" />
                    </td>

                    <td className="!px-2 !py-4 font-[500] whitespace-nowrap">
                        <div className="flex items-center gap-4">

                            <div className="img w-[65px] h-[65px] overflow-hidden rounded-md group">
                                <Link to={"product/93982"}>
                                    <img src="https://i.pinimg.com/736x/3a/2c/bd/3a2cbdd0e7995b011e7fa1da1c10c60d.jpg" className="w-full group-hover:scale-110 transition-all" /></Link>
                            </div>
                            <div className="info w-[75%]">
                                <Link to={"product/93982"}>
                                    <h3 className="font-[600] text-[13px]">✧ Columbina Hyposelenia (Damselette/Kuutar) ✧</h3>
                                </Link>

                            </div>
                        </div>
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        Electronics
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        Women
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        AnimeClub
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        <span className="line-through text-gray-500 text-[15px] font-[500]">$50.00</span><span className="text-[red] text-[15px] font-[600]"> / $58.00</span>
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        <p className="text-[14px]"><span className="font-[600]">234</span> Sales</p>
                        <ProgressBar value={50} type="error" />
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        <div className='flex items-center gap-3'>
                            <Tooltip title="Edit" placement="top">
                                <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                    <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                </Button>
                            </Tooltip>

                            <Tooltip title="View" placement="top">
                                <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                    <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                </Button>
                            </Tooltip>

                            <Tooltip title="Remove" placement="top">
                                <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                    <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                </Button>
                            </Tooltip>

                        </div>

                    </td>
                </tr>


                <tr>
                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                        <Checkbox {...label} size="small" />
                    </td>

                    <td className="!px-2 !py-4 font-[500] whitespace-nowrap">
                        <div className="flex items-center gap-4">

                            <div className="img w-[65px] h-[65px] overflow-hidden rounded-md group">
                                <Link to={"product/93982"}>
                                    <img src="https://i.pinimg.com/736x/3a/2c/bd/3a2cbdd0e7995b011e7fa1da1c10c60d.jpg" className="w-full group-hover:scale-110 transition-all" /></Link>
                            </div>
                            <div className="info w-[75%]">
                                <Link to={"product/93982"}>
                                    <h3 className="font-[600] text-[13px]">✧ Columbina Hyposelenia (Damselette/Kuutar) ✧</h3>
                                </Link>

                            </div>
                        </div>
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        Electronics
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        Women
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        AnimeClub
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        <span className="line-through text-gray-500 text-[15px] font-[500]">$50.00</span><span className="text-[red] text-[15px] font-[600]"> / $58.00</span>
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        <p className="text-[14px]"><span className="font-[600]">234</span> Sales</p>
                        <ProgressBar value={50} type="error" />
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        <div className='flex items-center gap-3'>
                            <Tooltip title="Edit" placement="top">
                                <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                    <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                </Button>
                            </Tooltip>

                            <Tooltip title="View" placement="top">
                                <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                    <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                </Button>
                            </Tooltip>

                            <Tooltip title="Remove" placement="top">
                                <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                    <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                </Button>
                            </Tooltip>

                        </div>

                    </td>
                </tr>
                <tr>
                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                        <Checkbox {...label} size="small" />
                    </td>

                    <td className="!px-2 !py-4 font-[500] whitespace-nowrap">
                        <div className="flex items-center gap-4">

                            <div className="img w-[65px] h-[65px] overflow-hidden rounded-md group">
                                <Link to={"product/93982"}>
                                    <img src="https://i.pinimg.com/736x/3a/2c/bd/3a2cbdd0e7995b011e7fa1da1c10c60d.jpg" className="w-full group-hover:scale-110 transition-all" /></Link>
                            </div>
                            <div className="info w-[75%]">
                                <Link to={"product/93982"}>
                                    <h3 className="font-[600] text-[13px]">✧ Columbina Hyposelenia (Damselette/Kuutar) ✧</h3>
                                </Link>

                            </div>
                        </div>
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        Electronics
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        Women
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        AnimeClub
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        <span className="line-through text-gray-500 text-[15px] font-[500]">$50.00</span><span className="text-[red] text-[15px] font-[600]"> / $58.00</span>
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        <p className="text-[14px]"><span className="font-[600]">234</span> Sales</p>
                        <ProgressBar value={50} type="error" />
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        <div className='flex items-center gap-3'>
                            <Tooltip title="Edit" placement="top">
                                <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                    <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                </Button>
                            </Tooltip>

                            <Tooltip title="View" placement="top">
                                <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                    <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                </Button>
                            </Tooltip>

                            <Tooltip title="Remove" placement="top">
                                <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                    <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                </Button>
                            </Tooltip>

                        </div>

                    </td>
                </tr>

                <tr>
                    <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                        <Checkbox {...label} size="small" />
                    </td>

                    <td className="!px-2 !py-4 font-[500] whitespace-nowrap">
                        <div className="flex items-center gap-4">

                            <div className="img w-[65px] h-[65px] overflow-hidden rounded-md group">
                                <Link to={"product/93982"}>
                                    <img src="https://i.pinimg.com/736x/3a/2c/bd/3a2cbdd0e7995b011e7fa1da1c10c60d.jpg" className="w-full group-hover:scale-110 transition-all" /></Link>
                            </div>
                            <div className="info w-[75%]">
                                <Link to={"product/93982"}>
                                    <h3 className="font-[600] text-[13px]">✧ Columbina Hyposelenia (Damselette/Kuutar) ✧</h3>
                                </Link>

                            </div>
                        </div>
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        Electronics
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        Women
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        AnimeClub
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        <span className="line-through text-gray-500 text-[15px] font-[500]">$50.00</span><span className="text-[red] text-[15px] font-[600]"> / $58.00</span>
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        <p className="text-[14px]"><span className="font-[600]">234</span> Sales</p>
                        <ProgressBar value={50} type="error" />
                    </td>

                    <td className="!px-6 !py-4 whitespace-nowrap">
                        <div className='flex items-center gap-3'>
                            <Tooltip title="Edit" placement="top">
                                <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                    <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                </Button>
                            </Tooltip>

                            <Tooltip title="View" placement="top">
                                <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                    <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                </Button>
                            </Tooltip>

                            <Tooltip title="Remove" placement="top">
                                <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                    <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                </Button>
                            </Tooltip>

                        </div>

                    </td>
                </tr>
            </table>
            <div className="flex items-center justify-center pt-5! pb-5! px-4!">
                <Pagination count={10} color="primary" />
            </div>
        </div>
    )
}
export default Tailwind_Css_Table;