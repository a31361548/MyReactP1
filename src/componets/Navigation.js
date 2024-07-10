import React, { useState,useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../AuthContext'

const Navigation = ({ onModalTabClick }) => {
  const { isLoggedIn, logout, role } = useContext(AuthContext);
  const [active, setActive] = useState(false);
  const [mItem, setmItem] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  const handleLogout = async () => {
    try {
      await logout(); // 调用 context 中的 logout 方法
      navigate('/'); // 登出后重定向到首页
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  

  useEffect(() => {
    const items = [
      { name: 'Home', link: '/' },
      { name: 'Gsap', link: '/Gsap' },
      { name: 'DataGraphics', link: '/DataGraphics' },
    ];
    if (!isLoggedIn) {
      items.push({ name: 'ModalTab', link: '' });
    } else {
      items.push({ name: 'Airplane', link: '/Scroll' });
      items.push({ name: 'Logout', link: '' }); 
      if (role === 1) {
        items.push({ name: 'Settings', link: '/Settings' });
      }
    }
    setMenuItems(items);
  }, [isLoggedIn, role]);
  

  const navigate = useNavigate();
  

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  const handlemItemClick = (item) => {
    if (mItem === item.name) {
      setmItem(null);
    } else {
      setmItem(item.name);
      if (item.name === 'ModalTab') {
        onModalTabClick();
      } else if (item.name === 'Logout') {
        handleLogout();
      } else if (item.link) {
        navigate(item.link);
      }
    }
  };

  return (
    <div className='w-full'>
      <div
        className={`${active ? 'h-[10vh]' : 'h-[6vh]'} bg-black transition-all duration-700`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
      <div className='flex w-1/2 h-full m-auto justify-between'>
        {menuItems.map((item) => (
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
};

export default Navigation;
