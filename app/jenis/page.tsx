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
      <table className="table table-zebra drop-shadow-md">
        <thead>
          <tr className="bg-base-300">
            <th>No.</th>
            <th>Jenis Makanan</th>
            <th>Kategori Id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jenis.map((Jenis, index) => (
            <tr className="bg-base-400" key={Jenis.id}>
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
