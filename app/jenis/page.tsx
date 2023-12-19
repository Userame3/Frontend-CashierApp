export const metadata = {
    title: "Jenis",
};
import axios from "axios";
import Link from "next/link";
import AddJenis from "./add";
import DeleteJenis from "./delete";
import EditJenis from "./edit";

type Jenis = {
    id: number;
    name: string;
    kategori_id: number;
};
const getJenis = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/jenis");

    return res.data.data;
};
const JenisList = async () => {
    const jenis: Jenis[] = await getJenis();
    return (
        <div className="py-10 px-10">
            <div className="py-2">
                <AddJenis />
            </div>
            <table className="table shadow-2xl">
                <thead>
                    <tr className="text-black uppercase text-center font-bold">
                        <th className="" >No.</th>
                        <th className="" >Jenis Makanan</th>
                        <th className="" >Kategori Id</th>
                        <th className="" >Action</th>
                    </tr>
                </thead>
                <tbody>
                    {jenis.map((Jenis, index) => (
                        <tr className="text-gray-700  text-center font-medium hover:font-bold bg-cyan-300" key={Jenis.id}>
                            <td>{index + 1}</td>
                            <td>{Jenis.name}</td>
                            <td>{Jenis.kategori_id}</td>
                            <td className="flex">
                                <div className="mr-1">
                                    <EditJenis {...Jenis} />
                                </div>

                                <DeleteJenis {...Jenis} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default JenisList;