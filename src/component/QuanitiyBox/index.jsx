import Button from "@mui/material/Button";
import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const QuantityBox = () => {
    const [qtyVal, setQtyVal] = useState(1);

    const pluseQty=()=>{
        setQtyVal(qtyVal+1)
    };

    const minusQty=()=>{
        if (qtyVal > 1) {
      setQtyVal(qtyVal - 1);
    }
    };

    return (
        <div className="qtyBox flex items-center relative">
            <input type="number" className="w-full !pl-3 h-[40px] !p-2 text-[15px] focus:outline-none border border-[rgba(0,0,0,0.4)] rounded-md" Value={qtyVal}
            onChange={(e) => setQtyVal(Number(e.target.value))}
            />

        <div className="flex items-center flex-col justify-between h-[40px] absolute top-0 right-0 z-50 border-l-1 border-[rgba(0,0,0,0.4))]">
            <Button className="!min-w-[30px] !w-[30px] !h-[20px] !text-[rgba(0,0,0,0.7)] !rounded-none !rounded-tr-md hover:!bg-[#bcbbbb]" onClick={pluseQty}>
                <FaAngleUp className="text-[12px]"/>
            </Button>
            <Button className="!min-w-[30px] !w-[30px] !h-[20px] !text-[rgba(0,0,0,0.7)] !rounded-none !rounded-br-md hover:!bg-[#bcbbbb]" onClick={minusQty}>
                <FaAngleDown className="text-[12px]"/>
            </Button>
        </div>

        

        </div>
    );
};

export default QuantityBox;