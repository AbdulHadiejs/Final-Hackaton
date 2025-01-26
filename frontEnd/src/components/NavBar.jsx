import React, { useEffect, useState } from 'react';
import { HiBars3CenterLeft } from "react-icons/hi2";
import { Link } from 'react-router-dom';
// import SearchBar from './SearchBar';
import { CiHeart, CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
// import { useSelector } from 'react-redux';

const NavBar = () => {
  // const cartItems = useSelector((state)=> state.cart.items)
  // const [itemsLength, setItemsLength] = useState(0)
  // useEffect(() => {
  //   console.log(cartItems);
  //   setItemsLength(cartItems.length)
    
  // }, [cartItems])
  
  
  const [isDropdown, setIsDropdown] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Orders', href: '/order' },
    { name: 'Cart page', href: '/cart' },
    { name: 'Check Out', href: '/checkOut' },
  ];

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white mt-3">
      {/* Left Section: Hamburger and Search */}
      <div className="flex gap-10 items-center">
        <Link to="/" className="text-3xl text-gray-600 cursor-pointer hover:text-gray-800">
          <HiBars3CenterLeft />
        </Link>
        {/* <SearchBar /> */}
      </div>

      {/* Right Section: Icons */}
      <div className="flex items-center gap-2 lg:gap-6">
        {/* User Icon */}
        <div className="relative">
          <button
            onClick={() => setIsDropdown((prev) => !prev)}
            className="hidden text-2xl text-gray-600 md:block cursor-pointer hover:text-gray-800"
          >
            <CiUser />
          </button>
          {isDropdown && (
            <div className="absolute mt-2 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-10 w-40">
              <ul className="py-2">
                {navigation.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      onClick={() => setIsDropdown(false)}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Other Icons */}
        <Link to="/favorites" className="text-2xl text-gray-600 cursor-pointer hover:text-gray-800">
          <CiHeart />
        </Link>
        <Link
          to="/cart"
          className="flex items-center gap-2 bg-primary px-4 py-2 rounded-full shadow-md cursor-pointer hover:bg-primary-light"
        >
          <IoCartOutline className="text-2xl text-gray-600" />
          {/* <span className="text-gray-800 font-medium text-sm">{itemsLength}</span> */}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
