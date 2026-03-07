"use client";

import Link  from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
 useEffect(() => {
    const handleScroll = () => {
      //detect scroll
      setHeaderActive(window.scrollY > 50);
    };
      //add scroll event
    window.addEventListener("scroll", handleScroll);

    //clear scroll event

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  

  return (
    <header className={`${headerActive ? 
      "h-[100px]" : "h-[124]"} fixed left-0 right-0 w-full bg-primary-200 transition-all`}>
      <div className="container mx-auto h-full flex items-center justify-between">
        {/*LOGO*/}
        <Link href="/">
          <Image src="/assets/img/logo.png" alt="Logo" width={117} height={55} />
        </Link>
        {/* mobile nav hidden on large devices */}
        <MobileNav containerStyles="text-white xl:hidden"/>
        {/*desktop nav  hidden on small devices */}
        <Nav containerStyles=" flex gap-4 text-white hidden xl:flex" />
      </div>
    </header>
  );
}; 

export default Header;