import React, { ReactElement } from 'react'
import { NavLink } from "react-router-dom";
import Link from "next/link"
import {
  HomeModernIcon,
  ChartPieIcon,
  BellAlertIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
  TagIcon,
  ShoppingCartIcon
} from "@heroicons/react/20/solid";

type MenuItem = {
  name: string;
  icon: ReactElement | null;
  link: string;
  isActive: boolean;
}

const menu1: MenuItem[] = [
  {
    name: "Home",
    icon: <HomeModernIcon width={18} className='text-white' />,
    link: '/',
    isActive: false,
  },
  {
    name: "Category",
    icon: <ChartPieIcon width={18} className='text-white' />,
    link: '/category',
    isActive: false,
  },
  {
    name: "Jenis",
    icon: <TagIcon width={18} className='text-white' />,
    link: '/jenis',
    isActive: false,
  },
  {
    name: "Meja",
    icon: <HomeModernIcon width={18} className='text-white' />,
    link: '/meja',
    isActive: false,
  },
  {
    name: "Menu",
    icon: <DocumentDuplicateIcon width={18} className='text-white' />,
    link: '/menu',
    isActive: false,
  },
  {
    name: "Pelanggan",
    icon: <UserGroupIcon width={18} className='text-white' />,
    link: '/pelanggan',
    isActive: false,
  },
  {
    name: "Stok",
    icon: <ShoppingCartIcon width={18} className='text-white' />,
    link: '/stok',
    isActive: false,
  },
]

const Menus: React.FC<{ menu: MenuItem[] }> = ({ menu }) => {
  return (
    <div>
      <ul>
        {menu.map((menu, index) => {
          const menuActive = menu.isActive ? "bg-blue-300 bg-opacity-30 px-3 border border-blue-300 text-blue-800 py-2 flex" : "px-3 py-2 flex"
          const textActive = menu.isActive ? "text-blue-800" : "text-white"
          return (
            <li key={index} className={`${menuActive} cursor-pointer hover:font-bold tracking-wider`}>
              <Link href={menu.link} className="flex">
                {menu.icon}
                <div className={`ml-2 ${textActive} hidden sm:block mx-5 hover:font-bold`}>
                  {menu.name}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const MainHeader = () => {
  return (
    <div className='App'>
      <section className='w-64 bg-cyan-900	 h-screen'>
        <div className="border-b p-5">
          Coffee Shop
        </div>
        <div className="p-5 border-b text-sm">
          <h6>Master Data</h6>
          <Menus menu={menu1} />
        </div>
      </section>
    </div>
  );
}

export default MainHeader