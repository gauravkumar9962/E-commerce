import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import React from "react";
import UploadBox from "../../Components/UploadBox";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoMdClose } from "react-icons/io";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa"

const UploadProduct = () => {

    const [productCat, setProductCat] = React.useState('');
    const [productSubCat, setProductSubCat] = React.useState('');
    const [productFeatured, setProductFeatured] = React.useState('');
    const [productRam, setProductRam] = React.useState('');
    const [productWeight, setProductWeight] = React.useState('');
    const [productSize, setProductSize] = React.useState('');


    const handleChangeProductCat = (event) => {
        setProductCat(event.target.value);
    };
    const handleChangeProductSubCat = (event) => {
        setProductSubCat(event.target.value);
    };
    const handleChangeProductFeatured = (event) => {
        setProductFeatured(event.target.value);
    };
    const handleChangeProductRam = (event) => {
        setProductRam(event.target.value);
    };
    const handleChangeProductWeight = (event) => {
        setProductWeight(event.target.value);
    };
    const handleChangeProductSize = (event) => {
        setProductSize(event.target.value);
    };

    return (
        <>
            <section className="p-5 bg-gray-50">
                <form className="form py-3 p-8">
                    <div className="scroll max-h-[77vh] overflow-y-scroll pr-5">
                        <div className="grid grid-cols-1 mb-10">
                            <div className="col">
                                <h3 className="text-[14px] font-[500] mb-1 text-black">Product Name</h3>
                                <input type="text" className="bg-white w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-5 focus:outline-none focus:border-[rgba(0,0,0,0.5)] text-sm rounded-sm" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 mb-10">
                            <div className="co1">
                                <h3 className="text-[14px] font-[500] mb-1 text-black">Product Discription</h3>
                                <textarea type="text" className="bg-white w-full h-[140px] border border-[rgba(0,0,0,0.2)] p-3 focus:outline-none focus:border-[rgba(0,0,0,0.5)] text-sm rounded-sm" />
                            </div>
                        </div>

                        <div className="grid grid-cols-4 mb-10 gap-4">
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
                                <h3 className="text-[14px] font-[500] mb-1 text-black">Product Sub Category</h3>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    className="w-full"
                                    value={productSubCat}
                                    label="Category"
                                    onChange={handleChangeProductSubCat}
                                >
                                    <MenuItem value={''}>None</MenuItem>
                                    <MenuItem value={10}>Men</MenuItem>
                                    <MenuItem value={20}>Women</MenuItem>
                                    <MenuItem value={30}>Kids</MenuItem>
                                </Select>
                            </div>
                            <div className="co1">
                                <h3 className="text-[14px] font-[500] mb-1 text-black">Product Price</h3>
                                <input type="number" className="bg-white w-full h-[55px] border border-[rgba(0,0,0,0.2)] p-5 focus:outline-none focus:border-[rgba(0,0,0,0.5)] text-sm rounded-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                            </div>

                            <div className="co1">
                                <h3 className="text-[14px] font-[500] mb-1 text-black">Product Old Price</h3>
                                <input type="number" className="bg-white w-full h-[55px] border border-[rgba(0,0,0,0.2)] p-5 focus:outline-none focus:border-[rgba(0,0,0,0.5)] text-sm rounded-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                            </div>
                        </div>

                        <div className="grid grid-cols-4 mb-10 gap-4">
                            <div className="co1">
                                <h3 className="text-[14px] font-[500] mb-1 text-black">Is Featured?</h3>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    className="w-full"
                                    value={productFeatured}
                                    label="Category"
                                    onChange={handleChangeProductFeatured}
                                >

                                    <MenuItem value={10}>True</MenuItem>
                                    <MenuItem value={20}>False</MenuItem>

                                </Select>
                            </div>

                            <div className="co1">
                                <h3 className="text-[14px] font-[500] mb-1 text-black">Product Stock</h3>
                                <input type="number" className="bg-white w-full h-[55px] border border-[rgba(0,0,0,0.2)] p-5 focus:outline-none focus:border-[rgba(0,0,0,0.5)] text-sm rounded-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                            </div>

                            <div className="co1">
                                <h3 className="text-[14px] font-[500] mb-1 text-black">Product Brand</h3>
                                <input type="text" className="bg-white w-full h-[55px] border border-[rgba(0,0,0,0.2)] p-5 focus:outline-none focus:border-[rgba(0,0,0,0.5)] text-sm rounded-sm" />
                            </div>

                            <div className="co1">
                                <h3 className="text-[14px] font-[500] mb-1 text-black">Product Discount</h3>
                                <input type="number" className="bg-white w-full h-[55px] border border-[rgba(0,0,0,0.2)] p-5 focus:outline-none focus:border-[rgba(0,0,0,0.5)] text-sm rounded-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                            </div>
                        </div>

                        <div className="grid grid-cols-4 mb-10 gap-4">
                            <div className="co1">
                                <h3 className="text-[14px] font-[500] mb-1 text-black">Product Ram</h3>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    className="w-full"
                                    value={productRam}
                                    label="Category"
                                    onChange={handleChangeProductRam}
                                >
                                    <MenuItem value={'4GB'}>4GB</MenuItem>
                                    <MenuItem value={'6GB'}>6GB</MenuItem>
                                    <MenuItem value={'8GB'}>8GB</MenuItem>
                                    <MenuItem value={'12GB'}>12GB</MenuItem>
                                </Select>
                            </div>

                            <div className="co1">
                                <h3 className="text-[14px] font-[500] mb-1 text-black">Product Weight</h3>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    className="w-full"
                                    value={productWeight}
                                    label="Category"
                                    onChange={handleChangeProductWeight}
                                >
                                    <MenuItem value={'1KG'}>1KG</MenuItem>
                                    <MenuItem value={'2KG'}>2KG</MenuItem>
                                    <MenuItem value={'3KG'}>3KG</MenuItem>
                                    <MenuItem value={'4KG'}>4KG</MenuItem>
                                </Select>
                            </div>
                            <div className="co1">
                                <h3 className="text-[14px] font-[500] mb-1 text-black">Product Size</h3>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    className="w-full"
                                    value={productSize}
                                    label="Category"
                                    onChange={handleChangeProductSize}
                                >
                                    <MenuItem value={''}>None</MenuItem>
                                    <MenuItem value={'S'}>S</MenuItem>
                                    <MenuItem value={'M'}>M</MenuItem>
                                    <MenuItem value={'L'}>L</MenuItem>
                                </Select>
                            </div>

                            <div className="co1">
                                <h3 className="text-[14px] font-[500] mb-1 text-black">Product Rating</h3>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                            </div>
                        </div>

                        <div className="col w-full p-5 px-0">
                            <h3 className="font-[700] text-[18px] mb-3">Media & Images</h3>

                            <div className="grid grid-cols-8 gap-4">
                                <div className="uploadBoxWrapper  relative">
                                    <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50  cursor-pointer"><IoMdClose className="text-[16px] text-white" /></span>

                                    <div className="uploadBox p-3 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-full bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">

                                        <LazyLoadImage
                                            className="w-full h-full object-cover"
                                            alt={'image'}
                                            effect="blur"
                                            wrapperProps={{
                                                style: { transitionDelay: "1s" },
                                            }}
                                            src={'https://i.pinimg.com/1200x/b4/e6/5e/b4e65e58556568bd500fc754c87208f0.jpg'} />

                                    </div>
                                </div>

                                <div className="uploadBoxWrapper  relative">
                                    <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50  cursor-pointer"><IoMdClose className="text-[16px] text-white" /></span>

                                    <div className="uploadBox p-3 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-full bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">

                                        <LazyLoadImage
                                            className="w-full h-full object-cover"
                                            alt={'image'}
                                            effect="blur"
                                            wrapperProps={{
                                                style: { transitionDelay: "1s" },
                                            }}
                                            src={'https://i.pinimg.com/1200x/b4/e6/5e/b4e65e58556568bd500fc754c87208f0.jpg'} />

                                    </div>
                                </div>

                                <div className="uploadBoxWrapper  relative">
                                    <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50  cursor-pointer"><IoMdClose className="text-[16px] text-white" /></span>

                                    <div className="uploadBox p-3 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-full bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">

                                        <LazyLoadImage
                                            className="w-full h-full object-cover"
                                            alt={'image'}
                                            effect="blur"
                                            wrapperProps={{
                                                style: { transitionDelay: "1s" },
                                            }}
                                            src={'https://i.pinimg.com/1200x/b4/e6/5e/b4e65e58556568bd500fc754c87208f0.jpg'} />

                                    </div>
                                </div>

                                <UploadBox multiple={true} />
                            </div>
                        </div>
                    </div>

                    <hr />
                    <br />

                    <Button className="btn-blue btn-lg w-full flex gap-2">
                        <FaCloudUploadAlt className="text-[25px]"/>
                        Upload & Continue
                    </Button>
                </form>
            </section>
        </>
    )
}
export default UploadProduct;