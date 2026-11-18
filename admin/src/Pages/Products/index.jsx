import React from "react";
import Material_UI_Table from "../../Components/Material_UI_Table";
import SearchBox from "../../Components/SearchBox";

const Products = () => {

    return (
        <>
            <div className="card bg-white shadow-md rounded-md p-5 flex items-center justify-between">
                <h1 className="font-[700] text-[20px] text-gray-800">Products</h1>
                <div className="col1 w-[20] ml-auto">
                    <SearchBox />
                </div>
            </div>
            <Material_UI_Table />
        </>
    )
}
export default Products;