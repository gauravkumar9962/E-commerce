
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../component/ProductZoom';

const ProductDetails = () => {
    return (
        <>
        <div className="!py-5">
            <div className="container">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to="/" className="link transition">
                        HOME
                    </Link>

                    <Link to="/" className="link transition">
                        FASHION
                    </Link>
                </Breadcrumbs>
            </div>
        </div>

        <section className='bg-white !py-5'>
            <div className="container flex !gap-4">
                <div className="productZoomContainer w-[30%]">
                    <ProductZoom />
                </div>
            </div>
        </section>
        </>
    );
};

export default ProductDetails;
