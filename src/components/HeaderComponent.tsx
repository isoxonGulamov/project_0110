"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import MonoLogo from "@/assets/monologo.svg";
import { useState, useEffect, useMemo } from "react";
const HeaderComponent = () => {
  const [shadow, setShadow] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isTop, setTop] = useState(false);
  let array: number[] = [];

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    array.push(currentScrollPos);
    if (array.length > 2) {
      array = array.slice(array.length - 2);
    }

    if (currentScrollPos > 30) {
      setShadow(true);
    } else {
      setShadow(false);
    }
      if (currentScrollPos > 550) {
     setTop(true)
   }else{
    setTop(false)
   }

    let result = array[0] - array[1];
    if (result > 20) {
      setIsVisible(true);
    } else if (result < -20) {
      setIsVisible(false);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  console.log(shadow,"shadow");
  
  const handleSc = useMemo(() => handleScroll, []);
  useEffect(() => {
    window.addEventListener("scroll", handleSc);

    return () => {
      window.removeEventListener("scroll", handleSc);
    };
  }, [handleSc]);

  return (
    <div className="container">
      {" "}
      <div
        className={`z-50 fixed ${shadow ? "shadow-lg" : "shadow-none"} ${
          isVisible ? "animation-header" : "animation-header2"
        } ${isTop ? "" : "animation-header3"}   
      duration-0 top-0 left-0 right-0 bg-[#fff] `}
      >
        <div className="container header-container">
          <div className="navbar-menu  pt-[8px] pb-[15px] relative  w-full flex items-center justify-between">
            <div className="flex gap-10 items-center">
              <Link href="/">
                <Image src={MonoLogo} alt="mono_logo" />
              </Link>
            </div>
            <div className="flex items-center font-[500]   gap-[30px] max-[600px]:gap-[20px]">
              {/* <div className="">
                <nav>
                  <ul className="menu flex pt-[15px] pb-[12px] max-[770px]:hidden h-full text-[#2A2F39] menu-list font-[500] gap-[20px] items-center justify-between">
                    <li className="dropdown dropdown-5">
                      Maktab
                      <ul className="dropdown_menu dropdown_menu-5">
                        <li className="dropdown_item-1">Maktab direktori</li>
                        <li className="dropdown_item-2">Maktab jamoasi</li>
                        <li className="dropdown_item-3">Qabul kunlari</li>
                        <li className="dropdown_item-4">Maktab nizomi</li>
                        <li className="dropdown_item-5">Tarkibiy tuzilma</li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-5">
                      O'qtuvchilarga
                      <ul className="dropdown_menu dropdown_menu-5">
                        <li className="dropdown_item-1">Maktab haqida</li>
                        <li className="dropdown_item-2">Fanlar bo'yicha testlar</li>
                        <li className="dropdown_item-3">Kasaba uyushmasi</li>
                        
                      </ul>
                    </li>
                    <li className="dropdown dropdown-5">
                      O'quvchilarga
                      <ul className="dropdown_menu dropdown_menu-5">
                        <li className="dropdown_item-1">Dars jadvali</li>
                        <li className="dropdown_item-2">Qo'ng'iroqlar jadvali</li>
                        <li className="dropdown_item-3">Imtihon materiallari</li>
                        <li className="dropdown_item-4">To'garaklar jadvali</li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-5">
                      Matbuot xizmati
                      <ul className="dropdown_menu dropdown_menu-5">
                        <li className="dropdown_item-1">Yangiliklar</li>
                        <li className="dropdown_item-2">E'lonlar</li>
                        <li className="dropdown_item-3">Fotogalereya</li>
                        <li className="dropdown_item-4">Videogalereya</li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
