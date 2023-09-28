import React from 'react';
import Banner from '../../assets/Banner.png';
import Photo from '../../assets/Photo.png';

const Header = () => {
    return (
       <div> 
        <img className='w-[1920px] h-[285px]' src={ Banner} alt=''/>
       
<div className='flex mt-11 gap-5 ml-[77px]'>
<div className="avatar">
  <div className="w-24 rounded-full">
    <img src={Photo} />
  </div>
</div>
  <div className='mt-3'>
    <h2 className='font-bold text-xl'>Coffee Store</h2>
    <p> St, Toronto, USA</p>
  </div>
</div>
       
       
       
       </div>
    );
};

export default Header;