import React from 'react';

const Product = (props) => {
    const { img, name, price,avatar, bakery } = props.product;
    return (
       <div>  
           <div className='border-2 border-[#00000040] rounded-[13px] '>
            <img src={img} alt="" />
            <div className='text-left px-3 pb-3'>
                <h6 className='mt-3 font-bold'>{name}</h6>
                <div className='flex gap-3 mt-3'>
                <div className="avatar">
    <div className="w-9">
      <img src={avatar} />
    </div>
  </div>
  <p className='mt-2'>{bakery}</p>
                </div>
                <p className='mt-3'>${price}</p>
            </div>

        </div>
       </div>
    );
};

export default Product ;