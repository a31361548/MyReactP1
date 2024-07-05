import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Navigation = () => {
  const[active, setActive] = useState(false)
  const [mItem, setmItem] = useState(null);
  
  const menuItem = [
    { name: 'Home',link:'/' },
    { name: 'Gsap',link:'/Gsap' },
    { name: 'Airplane', link:'/Scroll' },
    { name: 'DataGraphics',link:'/DataGraphics' },
    { name: 'Test5', },
  ];

  const navigate = useNavigate();

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
      if (item.link) {
        navigate(item.link);
      }
    }
  };

  return(   
    <div className='w-full'>
      <div className={`${active ? 'h-[10vh]' : 'h-[6vh]'} bg-black transition-all duration-700`}
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
