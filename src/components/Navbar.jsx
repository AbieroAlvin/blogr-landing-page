import { BrowserRouter } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import NavLinks from "./NavLinks";
import Button from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  return (
    <>
      <BrowserRouter>
        <nav className="bg-transparent">
          <div className="flex items-center font-medium justify-around p-3">
            <div className="md:w-auto w-full z-50 flex justify-between items-center gap-20">
              <div className="font-bold text-white text-4xl md:cursor-pointer translate-y-[-4.5px]">
                Blogr
              </div>
              <div onClick={handleClick} className="md:hidden text-white">
                {open ? <FaTimes size={30} /> : <FaBars size={30} />}
              </div>
              <ul className="md:flex hidden uppercase items-center justify-center gap-6 ">
                <NavLinks />
              </ul>
            </div>

            <div className="md:flex gap-4 items-center hidden ">
              <div className="cursor-pointer text-white/70">Login</div>
              <Button />
            </div>
            {/* Mobile */}
            <ul
              className={`md:hidden bg-white absolute w-[80%]  top-20  py-5 shadow-lg shadow-black/70 p-4 duration-500 ease-in rounded-xl ${
                open ? "left-15" : "left-[-300%]"
              }`}
            >
              <NavLinks />
              <div className="py-4 flex flex-col items-center justify-center gap-4 border-t-gray-400 border-t-2 mt-4">
                <div className="cursor-pointer ">Login</div>
                <button className="intro-cta px-6 py-3 text-white font-medium rounded-full">
                  Sign Up
                </button>
              </div>
            </ul>
          </div>
        </nav>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
