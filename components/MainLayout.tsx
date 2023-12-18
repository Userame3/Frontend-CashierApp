import React from 'react'
import Link from "next/link";
import MainHeader from './MainHeader';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-amber-100 w-full h-screen flex flex-row rounded-xl" >
      <MainHeader />
      {children}
    </div>
  );
};

export default MainLayout

// rafce