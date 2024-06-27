import React, { useState } from 'react';

const Navigation = () => {
  const[active, setActive] = useState(false)
  const [mItem, setmItem] = useState(null);
  
  const menuItem = [
    { name: 'test1' },
    { name: 'test2' },
    { name: 'test3' },
    { name: 'test4' },
    { name: 'test5' },
  ];

  const handleMouseEnter =()=>{
    setActive(true)
  }
  const handleMouseLeave =()=>{
    setActive(false)
  }

  const handlemItemClick = (item) => {
    if(mItem === item.name){
      setmItem(null)
    }else{
      setmItem(item.name);
    }
  };

  return(   
    <div className='w-screen'>
      <div className={`${active ? 'h-[10vh]' : 'h-[6vh]'} bg-black`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <div className='flex w-1/2 h-full m-auto justify-between'>
          {menuItem.map((item) => (
            <div 
              key={item.name} 
              className={`h-full w-1/5 flex justify-center items-center border-l border-r border-l-white border-r-white mx-2 cursor-pointer ${mItem === item.name ? 'text-red-500' : 'text-white'}`}
              onClick={() => handlemItemClick(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
