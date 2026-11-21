import React from "react";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";
import MenuItem from "@mui/material/MenuItem";

const AddSubCategory = () => {

    const [productCat, setProductCat] = React.useState('');

    const handleChangeProductCat = (event) => {
        setProductCat(event.target.value);
    };

    return (
        <>
            <section className="p-5 bg-gray-50">
                <form className="form py-3 p-8">
                    <div className="scroll max-h-[77vh] overflow-y-scroll pr-5 pt-4">
                        <div className="grid grid-cols-4 mb-10 gap-5">
                            <div className="co1">
                                <h3 className="text-[14px] font-[500] mb-1 text-black">Product Category</h3>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    className="w-full"
                                    value={productCat}
                                    label="Category"
                                    onChange={handleChangeProductCat}
                                >
                                    <MenuItem value={''}>None</MenuItem>
                                    <MenuItem value={10}>Electronics</MenuItem>
                                    <MenuItem value={20}>Fashion</MenuItem>
                                    <MenuItem value={30}>Beauty</MenuItem>
                                </Select>
                            </div>

                            <div className="co1">
                                <h3 className="text-[14px] font-[500] mb-1 text-black">Sub Category Name</h3>
                                <input type="text" className="bg-white w-full h-[55px] border border-[rgba(0,0,0,0.2)] p-5 focus:outline-none focus:border-[rgba(0,0,0,0.5)] text-sm rounded-sm" />
                            </div>
                        </div>

                    </div>

                    <div className="w-[250px]">
                        <br />
                        <br />

                        <Button className="btn-blue btn-lg w-full flex gap-2">
                            <FaCloudUploadAlt className="text-[25px]" />
                            Upload & Continue
                        </Button>
                    </div>
                </form>
            </section>
        </>
    )
}
export default AddSubCategory;