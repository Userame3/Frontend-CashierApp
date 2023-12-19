export const metadata = {
  title: "Category",
}
import axios from 'axios'
import Link from 'next/link'
import AddCategory from './add'
import DeleteCategory from './delete'
import EditCategory from './edit'

type Category = {
  id: number;
  nama_kategori: string;
}
const getCategory = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/category");

  return res.data.data
}
const CategoryList = async () => {
  const category: Category[] = await getCategory()
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddCategory />
      </div>
      <table className="table shadow-2xl">
        <thead>
          <tr className="text-black uppercase text-center font-bold">
            <th>No.</th>
            <th>Nama Kategori</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {category.map((category, index) => (
            <tr key={category.id} className="text-gray-700  text-center font-medium hover:font-bold bg-cyan-300">
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
