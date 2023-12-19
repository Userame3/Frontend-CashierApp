import React from 'react'
import Link from "next/link";
import MainHeader from './MainHeader';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-cyan-50 w-full h-screen flex flex-row" >
      <MainHeader />
      {children}
    </div>
  );
};

export default MainLayout

// rafce