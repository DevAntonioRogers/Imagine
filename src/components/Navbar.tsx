import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { AiFillInstagram, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`py-2 w-full ${isScrolling ? "fixed top-0 bg-white shadow-lg z-10" : "relative"}`}>
      <div className="w-[89%] m-auto max-w-[1400px] flex justify-between items-center">
        <a href="">
          <h1 className="text-3xl font-bold text-[#FFAFCC]">IMAGINE</h1>
        </a>

        <ul
          className={`md:flex items-center gap-8 md:static absolute text-gray-600  ${
            openMobileMenu
              ? "top-12 py-4 w-full bg-[#FFAFCC] left-0 text-center space-y-10 text-white drop-shadow-lg z-20"
              : "hidden"
          }`}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#services">About</a>
          </li>
          <li>
            <a href="#about">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="flex gap-4 text-white items-center ml-auto md:ml-0">
          <div className="bg-[#FFAFCC] p-1 rounded-full hover:translate-y-[-2px] transition-all">
            <AiFillFacebook size={18} />
          </div>
          <div className="bg-[#FFAFCC] p-1 rounded-full hover:translate-y-[-2px] transition-all">
            <AiFillInstagram size={18} />
          </div>
          <div className="bg-[#FFAFCC] p-1 rounded-full hover:translate-y-[-2px] transition-all">
            <AiOutlineTwitter size={18} />
          </div>
        </div>

        <div className="md:hidden ml-4" onClick={handleMobileMenu}>
          {!openMobileMenu ? <FiMenu size={25} /> : <MdClose size={25} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
