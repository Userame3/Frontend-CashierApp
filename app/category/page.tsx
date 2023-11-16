export const metadata = {
  title: "Category",
};
import axios from "axios";
import Link from "next/link";
import AddCategory from "./add";
import DeleteCategory from "./delete";
import EditCategory from "./edit";

type Category = {
  id: number;
  nama_kategori: string;
};
const getCategory = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/category");

  return res.data.data;
};
const CategoryList = async () => {
  const category: Category[] = await getCategory();
  return (
    <div className="py-10 px-10 ">
      <div className="py-2">
        <AddCategory />
      </div>
      <table className="table table-zebra drop-shadow-md">
        <thead>
          <tr className="bg-base-300">
            <th>No.</th>
            <th>Nama Kategori</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {category.map((category, index) => (
            <tr className="bg-base-400" key={category.id}>
              <td>{index + 1}</td>
              <td>{category.nama_kategori}</td>
              <td className="flex">
                <div className="mr-1">
                  <EditCategory {...category} />
                </div>

                <DeleteCategory {...category} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
