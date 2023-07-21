import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <nav className="py-2 w-full">
      <div className="w-[89%] m-auto max-w-[1400px] flex justify-between items-center">
        <a href="">
          <h1 className="text-3xl drop-shadow text-[#FFAFCC] font-bold">IMAGINE</h1>
        </a>

        <ul className="flex items-center gap-8 md:static absolute left-0 ">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>

          <li>
            <button>Login</button>
          </li>
          <li>
            <button>Signup</button>
          </li>
        </ul>

        <div className="md:hidden" onClick={handleMobileMenu}>
          {!openMobileMenu ? <FiMenu size={25} /> : <MdClose size={25} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
