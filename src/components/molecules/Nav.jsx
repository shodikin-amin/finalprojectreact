import { useState } from "react";
// import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import React from "react";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // eslint-disable-next-line no-unused-vars
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="/">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {" "}
              Beranda
            </li>
          </Link>
          <Link spy={true} smooth={true} to="">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {" "}
              Galeri
            </li>
          </Link>
          <Link spy={true} smooth={true} to="/profile">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {" "}
              Profile
            </li>
          </Link>
          <Link spy={true} smooth={true} to="/pendaftaran">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {" "}
              Pendaftaran
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10vh flex justify-between z-999 w-screen bg-hijau1 text-hijau1txt lg:px-20 px-4 py-4">
        <div className="flex items-center flex-0">
          <Link to="/">
            <img
              className="w-[3em]"
              src="./src/assets/img/logo/asqolanlogo.png"
              alt="Logo SMP ISLAM ASQOLAN"
            />
          </Link>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-center font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-12 text-[1.2rem]">
              <Link spy={true} smooth={true} to="/">
                <li className="hover:text-hovertxt transition hover:border-b-2 border-primetxt hover:border-hovertxt hover:font-medium cursor-pointer">
                  {" "}
                  Beranda
                </li>
              </Link>
              <Link spy={true} smooth={true} to="galeri">
                <li className="hover:text-hovertxt transition hover:border-b-2 border-primetxt hover:border-hovertxt hover:font-medium cursor-pointer">
                  {" "}
                  Galeri
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/profile">
                <li className="hover:text-hovertxt transition hover:border-b-2 border-primetxt hover:border-hovertxt hover:font-medium cursor-pointer">
                  {" "}
                  Profile
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/pendaftaran">
                <li className="hover:text-hovertxt transition hover:border-b-2 border-primetxt hover:border-hovertxt hover:font-medium cursor-pointer">
                  {" "}
                  Pendaftaran
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex gap-4">
          {click && content}
          <Link className="flex" to={""}>
            <button>{click ? <FaSearch /> : <FaSearch size={25} />}</button>
          </Link>

          <Link className="flex" to={"/login"}>
            <button>{click ? <VscAccount /> : <VscAccount size={25} />}</button>
          </Link>
          <button className="block md:hidden transition" onClick={handleClick}>
            {click ? <FaTimes /> : <CiMenuFries size={25} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
