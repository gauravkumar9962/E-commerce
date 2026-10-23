
import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../component/ProductZoom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

const ProductDetails = () => {

    const [productActionIndex , setProductActionIndex] = useState(null);
    return (
        <>
        <div className="!py-5">
            <div className="container">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to="/" className="link transition">
                        Home
                    </Link>

                    <Link to="/" className="link transition">
                        Fashion
                    </Link>

                     <Link className="link transition">
                        Cropped Satin Bomber Jacket
                    </Link>
                </Breadcrumbs>
            </div>
        </div>

        <section className='bg-white !py-5'>
            <div className="container flex !gap-50">
                <div className="productZoomContainer w-[30%]">
                    <ProductZoom />
                </div>

                <div className='productContent w-[70%]'>
                    <h1 className='text-[35px] font-[650] !mb-2'>Chikaikari woven kurta</h1>
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

                        <p className='!mt-3 !mb-5'>BUILT FOR APPLE INTELLIGENCE — Apple Intelligence is the personal intelligence system that helps you write, express yourself and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple.

                        TAKE TOTAL CAMERA CONTROL — Camera Control gives you an easier way to quickly access camera tools, like zoom or depth of field, so you can take the perfect shot in record time.

                        GET FURTHER AND CLOSER — The improved Ultra Wide camera with autofocus lets you take incredibly detailed macro photos and videos. Use the 48MP Fusion camera for stunning high-resolution images, and zoom in with the 2x optical-quality Telephoto.</p>

                        <div className='flex items-center !gap-3'>
                            <span className='text-[16px]'>Size :</span>
                            <div className='actions flex items-center !gap-1'>
                            <Button className={`${productActionIndex === 0 ? '!bg-[#ff5252] !text-white' : ''}`} onClick={() => setProductActionIndex(0)}>S</Button>
                            <Button className={`${productActionIndex === 1 ? '!bg-[#ff5252] !text-white' : ''}`} onClick={() => setProductActionIndex(1)}>M</Button>
                            <Button className={`${productActionIndex === 2 ? '!bg-[#ff5252] !text-white' : ''}`} onClick={() => setProductActionIndex(2)}>L</Button>
                            <Button className={`${productActionIndex === 3 ? '!bg-[#ff5252] !text-white' : ''}`} onClick={() => setProductActionIndex(3)}>XL</Button>
                            </div>
                        </div>
                        
                </div>
            </div>
        </section>
        </>
    );
};

export default ProductDetails;
