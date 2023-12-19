"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type Meja = {
    id: number;
    nama_menu: string;
    harga: string;
    deskripsi: string;
    jenis_id: number;
};

const API_URL = 'http://127.0.0.1:8000/api';

const EditMenu = (menu: Meja) => {
    const [modal, setModal] = useState(false);
    const [nama_menu, setName] = useState(menu.nama_menu);
    const [harga, setHarga] = useState(menu.harga);
    const [deskripsi, setDeskrpsi] = useState(menu.deskripsi);
    const [jenis_id, setJenisId] = useState(menu.jenis_id);
    const [isMutating, setIsMutating] = useState(false);
    const router = useRouter();
    const handleChange = () => setModal(!modal);
    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsMutating(true);
        const endpoint = `${API_URL}/menu/${menu.id}`;
        const data = {
            nama_menu: nama_menu,
            harga: harga,
            deskripsi: deskripsi,
            jenis_id: jenis_id,
        };

        try {
            await axios.put(endpoint, data);
            setIsMutating(false);
            router.refresh();
            setModal(false);
        } catch (error) {
            // Tambahkan penanganan pesan kesalahan jika diperlukan
            setIsMutating(false);
            console.error('Error updating data:', error);
        }
    };

    return (
        <div>
            <button className="" onClick={handleChange}>
                Edit
            </button>
            <input
                type="checkbox"
                checked={modal}
                onChange={handleChange}
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        Edit Menu {menu.nama_menu}
                    </h3>
                    <form onSubmit={handleUpdate}>
                        <div className="form-control">
                            <label className="label font-bold">Name</label>
                            <input
                                type="text"
                                value={nama_menu}
                                onChange={(e) => setName(e.target.value)}
                                className="input w-full input-bordered"
                                placeholder="Menu"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">Harga</label>
                            <input
                                type="text"
                                value={harga}
                                onChange={(e) => setHarga(e.target.value)}
                                className="input w-full input-bordered"
                                placeholder="Harga"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">Deskripsi</label>
                            <input
                                type="text"
                                value={deskripsi}
                                onChange={(e) => setDeskrpsi(e.target.value)}
                                className="input w-full input-bordered"
                                placeholder="Deskripsi"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">Jenis Id</label>
                            <input
                                type="number"
                                value={jenis_id}
                                onChange={(e) => setJenisId(Number(e.target.value))}
                                className="input w-full input-bordered"
                                placeholder="No Tlp"
                            />
                        </div>
                        <div className="modal-action">
                            <button type="button" className="btn" onClick={handleChange}>
                                Close
                            </button>
                            {!isMutating ? (
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            ) : (
                                <button type="button" className="btn loading">
                                    Submit loading ...
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditMenu;
