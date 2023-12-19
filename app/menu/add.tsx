"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API_URL = "http://127.0.0.1:8000/api";
const AddMenu = () => {
    const [modal, setModal] = useState(false);
    const [nama_menu, setName] = useState("");
    const [harga, setHarga] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [jenis_id, setJenisId] = useState("");
    const [isMutating, setIsMutating] = useState(false);
    const router = useRouter();
    const handleChange = () => setModal(!modal);
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsMutating(true);
        let endpoint = `${API_URL}/menu`;
        const data = {
            nama_menu: nama_menu,
            harga: harga,
            deskripsi: deskripsi,
            jenis_id: jenis_id
        };
        await axios.post(endpoint, data);
        setName("");
        setHarga("");
        setDeskripsi("");
        setJenisId("");
        setIsMutating(false);
        router.refresh();
        setModal(false);
    };
    return (
        <div>
            <button className="btn bg-sky-800 text-white border-none" onClick={handleChange}>
                Add New Menu
            </button>
            <input
                type="checkbox"
                checked={modal}
                onChange={handleChange}
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add New Menu</h3>
                    <form onSubmit={handleSubmit}>
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
                                onChange={(e) => setDeskripsi(e.target.value)}
                                className="input w-full input-bordered"
                                placeholder="Deskripsi"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">Jenis Id</label>
                            <input
                                type="text"
                                value={jenis_id}
                                onChange={(e) => setJenisId(e.target.value)}
                                className="input w-full input-bordered"
                                placeholder="Jenis"
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

export default AddMenu;
