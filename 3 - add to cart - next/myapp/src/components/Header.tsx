'use client'

import logo from "@/public/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon,Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSelector} from "react-redux";
import { RootState } from "@/store";

const Header = () => {
  const cartValue = useSelector((state: RootState)=>state.cart.totalQuantity)
  return (
    <>
     <header>
     <div className="flex justify-around py-8 items-center gap-x-4">
      <Link href={'./'}> <Image src={logo}  alt="logo" />
     </Link>
      <ul className="flex gap-x-16">
        <li> <Link href={'category/female'}>Female</Link> </li>
        <li> <Link href={'category/male'}>Male</Link> </li>
        <li> <Link href={'category/kids'}>Kids</Link> </li>
        <li> <Link href={'category/products'}>All Products</Link>
         </li>
      </ul>
      <div className="px-2 flex justify-center items-center rounded-sm h-7 border-solid border-2 border-gray-300">
        <div className="flex justify-center items-center">
           <Search className="text-gray-400 h-4"/>
      </div>
     <Input type="text" placeholder="What you looking for" className="h-5 w-200"/>
     
      </div>
      
      <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative">
       <span className="absolute right-1 top-0 rounded-full bg-red-500 text-white text-sm h-4 w-4 text-center" >{cartValue}</span>
        <ShoppingCartIcon /></div>
      </div>
     </header>
     </>
  );
};

export default Header;
