import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
   const [toggle, setToggle] = useState(false);
   return (
      <nav className="w-full flex py-6 justify-between items-center navbar">
         <img src={logo} alt="Bank-Logo" className="w-[124px] h-[36px]"></img>

         {/* Responsive Menu for sm or greater devices */}
         <ul className="list-none sm:flex hidden justify-between items-center">
            {navLinks.map((nav, index) => {
               return (
                  <li
                     key={nav.id}
                     className={`font-poppins font-normal cursor-pointer text-[16px]
                     text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                  >
                     <a href="">{nav.title}</a>
                  </li>
               );
            })}
         </ul>

         {/* Responsive Menu for Mobile and Tabs */}
         <div className="sm:hidden flex flex-1 justify-end items-end">
            <img
               src={toggle ? close : menu}
               alt="menu"
               className="w-[28px] h-[28px] object-cover"
               onClick={() =>
                  setToggle((prev) => {
                     return !prev;
                  })
               }
            />

            <div
               className={`${toggle ? "flex" : "hidden"} p-6 
               bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[120px] rounded-xl sidebar`}
            >
               <ul className="list-none flex flex-col justify-between items-center">
                  {navLinks.map((nav, index) => {
                     return (
                        <li
                           key={nav.id}
                           className={`font-poppins font-normal cursor-pointer text-[16px]
                           text-white ${index === navLinks.length - 1 ? "mr-0" : "mb-5"}`}
                        >
                           <a href="">{nav.title}</a>
                        </li>
                     );
                  })}
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
