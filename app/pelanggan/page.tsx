export const metadata = {
    title: "Pelanggan",
};
import axios from "axios";
import Link from "next/link";
import AddPelanggan from "./add";
import DeletePelanggan from "./delete";
import EditPelanggan from "./edit";

type Pelanggan = {
    id: number;
    nama: string;
    email: string;
    no_tlp: number;
    alamat: string;
};
const getPelanggan = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/pelanggan");

    return res.data.data;
};
const PelangganList = async () => {
    const pelanggan: Pelanggan[] = await getPelanggan();
    return (
        <div className="py-10 px-10">
            <div className="py-2">
                <AddPelanggan />
            </div>
            <table className="table table-zebra">
                <thead>
                    <tr className="bg-base-200">
                        <th>No.</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>No Telpon</th>
                        <th>Alamat</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pelanggan.map((Pelanggan, index) => (
                        <tr className="bg-base-400" key={Pelanggan.id}>
                            <td>{index + 1}</td>
                            <td>{Pelanggan.nama}</td>
                            <td>{Pelanggan.email}</td>
                            <td>{Pelanggan.no_tlp}</td>
                            <td>{Pelanggan.alamat}</td>
                            <td className="flex">
                                <div className="mr-1">
                                    <EditPelanggan {...Pelanggan} />
                                </div>

                                <DeletePelanggan {...Pelanggan} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PelangganList;