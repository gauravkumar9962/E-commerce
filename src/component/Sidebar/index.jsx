import { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../Sidebar/style.css"
import { Collapse } from 'react-collapse';
import Button from "@mui/material/Button";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { RangeSlider } from 'react-range-slider-input';
import SliderPackage from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from '@mui/material/Rating';



const Sidebar = () => {

    const [isOpenedCategoryFilter, SetIsOpenedCategoryFilter] = useState(true);
    const [isOpenedAvailFilter, SetIsOpenedAvailFilter] = useState(true);
    const [isOpenedSizeFilter, SetIsOpenedSizeFilter] = useState(true);
    const RangeSlider = SliderPackage.default ?? SliderPackage;

    return (
        <>
            <aside className="sidebar !py-5">
                <div className="box">
                    <h3 className="!mb-3 text-[16px] font-[600] flex items-center !pr-10">PRODUCT CATEGORIES
                        <Button className="!w-[30px] !h-[30px] !min-w-[30px] !text-black !rounded-full !ml-auto" onClick={() => SetIsOpenedCategoryFilter(!isOpenedCategoryFilter)}>
                            {
                                isOpenedCategoryFilter === true ? <IoIosArrowUp /> : <IoIosArrowDown />
                            }
                        </Button>
                    </h3>
                    <Collapse isOpened={isOpenedCategoryFilter}>

                        <div className="scroll !px-3 relative -left-[10px]">
                            <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Electronics" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Bags" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Footware" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Groceries" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Beauty" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Wellness" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Jewellery" className="w-full" />
                        </div>
                    </Collapse>
                </div>

                <div className="box">
                    <h3 className="!mb-3 text-[16px] font-[600] flex items-center !pr-10">AVAILABILITY
                        <Button className="!w-[30px] !h-[30px] !min-w-[30px] !text-black !rounded-full !ml-auto" onClick={() => SetIsOpenedAvailFilter(!isOpenedAvailFilter)}>
                            {
                                isOpenedAvailFilter === true ? <IoIosArrowUp /> : <IoIosArrowDown />
                            }
                        </Button>
                    </h3>
                    <Collapse isOpened={isOpenedAvailFilter}>

                        <div className="scroll !px-3 relative -left-[10px]">
                            <FormControlLabel control={<Checkbox size="small" />} label="Available" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="In Stock" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Not Available" className="w-full" />
                        </div>
                    </Collapse>
                </div>

                <div className="box">
                    <h3 className="!mb-3 text-[16px] font-[600] flex items-center !pr-10">SIZES
                        <Button className="!w-[30px] !h-[30px] !min-w-[30px] !text-black !rounded-full !ml-auto" onClick={() => SetIsOpenedSizeFilter(!isOpenedSizeFilter)}>
                            {
                                isOpenedSizeFilter === true ? <IoIosArrowUp /> : <IoIosArrowDown />
                            }
                        </Button>
                    </h3>
                    <Collapse isOpened={isOpenedSizeFilter}>

                        <div className="scroll !px-3 relative -left-[10px]">
                            <FormControlLabel control={<Checkbox size="small" />} label="Small" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Medium" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Large" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="XL" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="XXL" className="w-full" />
                        </div>
                    </Collapse>
                </div>

                <div className="box !mt-4">
                    <h3 className="!mb-3 text-[16px] font-[600] flex items-center !pr-10">
                        FILTER BY PRICE
                    </h3>

                    <RangeSlider />

                    <div className="flex !pt-4 !pb-2 priceRange">
                        <span className="text-[14px]">
                            From: <strong className="text-derk">Rs: {100}</strong>
                        </span>
                        <span className="!ml-auto text-[14px]">
                            From: <strong className="text-derk">Rs: {1000}</strong>
                        </span>
                    </div>

                </div>

                 <div className="box !mt-4">
                    <h3 className="!mb-3 text-[16px] font-[600] flex items-center !pr-10">
                        FILTER BY RATING
                    </h3>
                    <div className="w-full">
                        <Rating name="size-small" defaultValue={5} size="small" readOnly/>
                    </div>

                    <div className="w-full">
                        <Rating name="size-small" defaultValue={4} size="small" readOnly/>
                    </div>

                    <div className="w-full">
                        <Rating name="size-small" defaultValue={3} size="small" readOnly/>
                    </div>

                    <div className="w-full">
                        <Rating name="size-small" defaultValue={2} size="small" readOnly/>
                    </div>

                    <div className="w-full">
                        <Rating name="size-small" defaultValue={1} size="small" readOnly/>
                    </div>
                 </div>
            </aside>
        </>
    )
}

export default Sidebar;