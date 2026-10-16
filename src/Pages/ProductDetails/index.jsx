import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../component/ProductZoom';

const ProductDetails = () => {
    return (
        <section className='!py-5 !pb-0'>
            <div className='container'>
              
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/" className='link transition'>
                            HOME
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/"
                            className='link transition'
                        >
                            FASHION
                        </Link>
                    </Breadcrumbs>
             
            </div>

            <div className='container flex !gap-4'>
                <div className='productZoomContainer'>
                    <ProductZoom/>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails;