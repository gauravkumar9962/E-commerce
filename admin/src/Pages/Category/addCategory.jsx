import React from "react";
import UploadBox from "../../Components/UploadBox";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoMdClose } from "react-icons/io";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddCategory = () => {
    return (
        <>
            <section className="p-5 bg-gray-50">
                <form className="form py-3 p-8">
                    <div className="scroll max-h-[77vh] overflow-y-scroll pr-5 pt-4">
                        <div className="grid grid-cols-4 mb-10">
                            <div className="col">
                                <h3 className="text-[14px] font-[500] mb-1 text-black">Product Name</h3>
                                <input type="text" className="bg-white w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-5 focus:outline-none focus:border-[rgba(0,0,0,0.5)] text-sm rounded-sm" />
                            </div>
                        </div>
                        <h3 className="text-[18px] font-[500] mb-2 text-black">Product Name</h3>
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

                            <UploadBox multiple={true} />
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
export default AddCategory;