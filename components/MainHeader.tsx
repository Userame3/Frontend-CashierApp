import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const MainHeader = () => {
  return (
    <header className="navbar bg-base-100 drop-shadow-md hover:drop-shadow-xl px-5">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-lg text-center capitalize">
          Cashier App
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <details>
              <summary>Menu</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link href="/category">Category</Link>
                </li>
                <li>
                  <Link href="/jenis">Jenis</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainHeader;
