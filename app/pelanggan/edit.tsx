"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type Pelanggan = {
    id: number;
    nama: string;
    email: string;
    no_tlp: number;
    alamat: string;
};

const API_URL = 'http://127.0.0.1:8000/api';

const EditPelanggan = (pelanggan: Pelanggan) => {
    const [modal, setModal] = useState(false);
    const [nama, setName] = useState(pelanggan.nama);
    const [email, setEmail] = useState(pelanggan.email);
    const [no_tlp, setNoTlp] = useState(pelanggan.no_tlp);
    const [alamat, setAlamat] = useState(pelanggan.alamat);
    const [isMutating, setIsMutating] = useState(false);
    const router = useRouter();
    const handleChange = () => setModal(!modal);
    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsMutating(true);
        const endpoint = `${API_URL}/pelanggan/${pelanggan.id}`;
        const data = {
            nama: nama,
            email: email,
            no_tlp: no_tlp,
            alamat: alamat,
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
            <button className="btn" onClick={handleChange}>
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
                        Edit Pelanggan {pelanggan.nama}
                    </h3>
                    <form onSubmit={handleUpdate}>
                        <div className="form-control">
                            <label className="label font-bold">Name</label>
                            <input
                                type="text"
                                value={nama}
                                onChange={(e) => setName(e.target.value)}
                                className="input w-full input-bordered"
                                placeholder="Name Pelanggan"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input w-full input-bordered"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">No Telpon</label>
                            <input
                                type="number"
                                value={no_tlp}
                                onChange={(e) => setNoTlp(Number(e.target.value))}
                                className="input w-full input-bordered"
                                placeholder="No Tlp"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">No Telpon</label>
                            <input
                                type="text"
                                value={alamat}
                                onChange={(e) => setAlamat(e.target.value)}
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

export default EditPelanggan;
