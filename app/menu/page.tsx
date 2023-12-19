export const metadata = {
    title: "Menu",
};
import { Menu } from "@material-tailwind/react";
import axios from "axios";
import Link from "next/link";
import AddMenu from "./add";
import DeleteMenu from "./delete";
import EditMenu from "./edit";

type Menu = {
    id: number;
    nama_menu: string;
    harga: string;
    deskripsi: string;
    jenis_id: number;
};
const getMenu = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/menu");

    return res.data.data;
};
const MenuList = async () => {
    const menu: Menu[] = await getMenu();
    return (
        <div className="py-10 px-10">
            <div className="py-2">
                <AddMenu />
            </div>
            <div className="p-5 flex bg-transparent	content-start">
                {menu.map((Menu) => (
                    <div className="card w-60 h-fit mr-4 shadow-xl">
                        <div className="card-body bg-white rounded-md">
                            <h2 className="card-title">
                                {Menu.nama_menu}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p className="text-clip">{Menu.deskripsi}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline"><DeleteMenu {...Menu} /></div>
                                <div className="badge badge-outline"><EditMenu {...Menu} /></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default MenuList;