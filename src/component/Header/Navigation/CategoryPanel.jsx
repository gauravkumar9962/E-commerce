import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { MdClose } from "react-icons/md";

import CategoryCollapse from '../../CategoryCollapse';

const CategoryPanel = (props) => {

    const toggleDrawer = (newOpen) => () => {
        props.setIsOpenCatPanel(newOpen)
    };


    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">

            <h3 className='!p-4 text-[17px] font-bold flex items-center justify-between'>Shop By Categories<MdClose onClick={toggleDrawer(false)} className='cursor-pointer text-[20px]' /></h3>

            <Divider />

            <CategoryCollapse/>
        </Box>
    );

    return (
        <>

            {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
            <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>


        </>
    )
}

export default CategoryPanel;