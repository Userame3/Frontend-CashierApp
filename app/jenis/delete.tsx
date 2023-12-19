"use client"
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import JenisList from "./page";

type Jenis = {
  id: number;
  name: string;
  kategori_id: number;
};

const API_URL = "http://127.0.0.1:8000/api";
const DeleteJenis = (jenis: Jenis) => {
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleDelete = async (jenisId: Number) => {
    setIsMutating(true)
    try {
      let endpoint = `${API_URL}/jenis/${jenisId}`
      await axios.delete(endpoint); // Mengubah dari axios.post menjadi axios.delete

      setIsMutating(false);
      router.refresh() // Mengubah dari router.refresh menjadi router.reload
      setModal(false)
    } catch (error) {
      // Tangani kesalahan yang terjadi saat penghapusan
      console.log("Error deleting pelanggan:", error);
      setIsMutating(false);
      // Tambahkan logika untuk menampilkan pesan kesalahan kepada pengguna jika diperlukan
    }
  }
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
            Are sure to delete <span className="underline underline-offset-4">{jenis.name}</span> ?
          </h3>
          <div className="modal-action">
            <button type="button" className="btn border-none" onClick={handleChange}>
              Close
            </button>
            {!isMutating ? (
              <button
                type="button"
                onClick={() => handleDelete(jenis.id)}
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

export default DeleteJenis;