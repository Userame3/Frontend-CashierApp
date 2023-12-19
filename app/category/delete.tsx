"use client";
import React, { use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Category = {
  id: number;
  nama_kategori: string;
};

const API_URL = "http://127.0.0.1:8000/api";
const DeleteCategory = (category: Category) => {
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleDelete = async (categoryId: Number) => {
    setIsMutating(true);
    let endpoint = `${API_URL}/category/${categoryId}`;
    await axios.delete(endpoint);

    setIsMutating(false);
    router.refresh();
    setModal(false);
  };
  return (
    <div>
      <button className="btn bg-red-500 text-white border-none" onClick={handleChange}>
        Delete
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal text-gray">
        <div className="modal-box bg-cyan-100">
          <h3 className="font-bold text-lg">
            Are sure to delete <span className="underline underline-offset-4">{category.nama_kategori}</span> ?
          </h3>
          <div className="modal-action">
            <button type="button" className="btn border-none" onClick={handleChange}>
              Close
            </button>
            {!isMutating ? (
              <button
                type="button"
                onClick={() => handleDelete(category.id)}
                className="btn bg-red-800 text-white border-none"
              >
                Delete
              </button>
            ) : (
              <button type="button" className="btn loading">
                Delete loading ...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCategory;
