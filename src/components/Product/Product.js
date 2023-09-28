import React from "react";
import { FaRegHeart } from "react-icons/fa"; 

const Product = (props) => {
  const { img, name, price, avatar, bakery } = props.product;
  return (
    <div>
      <div className="border-2 border-[#00000040] rounded-[13px] card">
      <div className="relative">
          <img src={img} alt="" className='h-[200px] w-[400px]'/>
          <div className="absolute top-0 right-0 mt-2 mr-2">
            <div className="rounded-full bg-white p-2">
              <FaRegHeart size={15} color="#FF0000" /> 
            </div>
          </div>
        </div>
        <div className="text-left px-3 pb-3">
          <h6 className="mt-3 font-bold">{name}</h6>
          <div className="flex gap-3 mt-3">
            <div className="avatar">
              <div className="w-9">
                <img src={avatar} />
              </div>
            </div>
            <p className="mt-2">{bakery}</p>
          </div>
          <p className="mt-3">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
