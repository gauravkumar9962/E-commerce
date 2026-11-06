import { React, useState } from "react";
import QuantityBox from '../QuanitiyBox';
import { MdShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoGitCompareOutline } from "react-icons/io5";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

export const ProductDetailsComponent = () => {

    const [productActionIndex , setProductActionIndex] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const fullText = `BUILT FOR APPLE INTELLIGENCE — Apple Intelligence is the personal intelligence system that helps you write, express yourself and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple. TAKE TOTAL CAMERA CONTROL — Camera Control gives you an easier way to quickly access camera tools, like zoom or depth of field, so you can take the perfect shot in record time. GET FURTHER AND CLOSER — The improved Ultra Wide camera with autofocus lets you take incredibly detailed macro photos and videos. Use the 48MP Fusion camera for stunning high-resolution images, and zoom in with the 2x optical-quality Telephoto.`;

    const characterLimit = 150; 

    const displayText = isExpanded 
            ? fullText 
            : `${fullText.substring(0, characterLimit)}......`;

    return (
        <>
        <h1 className='text-[35px] font-[650] !mb-2'>Chikaikari woven kurta Your Favourit Items</h1>
                    <div className='flex items-center !gap-3'>
                        <span className='text-gray-500 text-[18px]'> Brands  : 
                            <span className='font-[500] text-black opacity-75 !pl-2'>House of Chikaikari</span>
                        </span>

                        <Rating name="size-small" defaultValue={4} size="medium" readOnly/>

                        <span className='text-[15px] cursor-pointer'>Review (5)</span>

                    </div>

                    <div className="flex items-center gap-4 !mt-4">
                            <span className="oldPrice line-through text-gray-500 text-[20px] font-[500]">$58.99</span>
                             <span className="price text-[20px] text-[#ff5252] font-bold">$50.99</span>
                        </div>

                        <div className='!pt-5 !pb-2'>
                            <span className="inline-block bg-green-100 text-green-700 font-bold text-xs !px-4 !py-1.5 rounded-full tracking-wider">
                            IN STOCK
                            </span>
                        </div>

                        <p className='!mt-3 !mb-0'>{displayText}</p>
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-[#ff5252] font-semibold hover:underline ml-1 focus:outline-none !mb-[13px]"
                        >
                            {isExpanded ? 'Show Less' : 'Show More'}
                        </button>

                        <div className='flex items-center !gap-3'>
                            <span className='text-[16px]'>Size :</span>
                            <div className='actions flex items-center !gap-1'>
                            <Button className={`${productActionIndex === 0 ? '!bg-[#ff5252] !text-white' : ''}`} onClick={() => setProductActionIndex(0)}>S</Button>
                            <Button className={`${productActionIndex === 1 ? '!bg-[#ff5252] !text-white' : ''}`} onClick={() => setProductActionIndex(1)}>M</Button>
                            <Button className={`${productActionIndex === 2 ? '!bg-[#ff5252] !text-white' : ''}`} onClick={() => setProductActionIndex(2)}>L</Button>
                            <Button className={`${productActionIndex === 3 ? '!bg-[#ff5252] !text-white' : ''}`} onClick={() => setProductActionIndex(3)}>XL</Button>
                            </div>
                        </div>

                        <p className='text-[14px] !mt-4 !mb-2'>Free Shipping (Est. Delivery Time 2-3 Days)</p>

                        <div className='flex items-center !gap-4 !pt-3'>
                            <div className='qtyBoxWrapper w-[70px]'>
                                <QuantityBox/>
                            </div>
                            <Button className='btn-org flex !gap-2'><MdShoppingCart className='text-[18px]'/> Add to Cart</Button>
                        </div>

                        <div className="flex items-center !gap-5 !mt-4 !pt-3">
                            <span className='flex items-center !gap-2 text-[15px] font-[500] link cursor-pointer'><FaRegHeart className='text-[18px] '/>
                            Add To Wishlist</span>

                             <span className='flex items-center !gap-2 text-[15px] font-[500] link cursor-pointer'><IoGitCompareOutline className='text-[18px]'/>
                            Add To compare</span>
                        </div>
        </>
    )
};