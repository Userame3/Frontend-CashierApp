"use client"
import React, { SyntheticEvent, use } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

type Stok = {
    id: number;
    menu_id: number;
    jumlah: string;
};

const API_URL = 'http://127.0.0.1:8000/api'
const DeleteStok = (stok: Stok) => {
    const [modal, setModal] = useState(false)
    const [isMutating, setIsMutating] = useState(false)
    const router = useRouter()
    const handleChange = () => setModal(!modal)
    const handleDelete = async (stokId: Number) => {
        setIsMutating(true)
        try {
            let endpoint = `${API_URL}/stok/${stokId}`
            await axios.delete(endpoint); // Mengubah dari axios.post menjadi axios.delete

            setIsMutating(false);
            console.log('Berhasil')
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
            <button className="btn" onClick={handleChange}>
                Delete
            </button>
            <input
                type="checkbox"
                checked={modal}
                onChange={handleChange}
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete Stok {stok.id} ?</h3>
                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleChange}>
                            Close
                        </button>
                        {!isMutating ? (
                            <button type="button" className="btn btn-primary" onClick={() => handleDelete(stok.id)}>
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
}

export default DeleteStok