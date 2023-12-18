"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API_URL = "http://127.0.0.1:8000/api";
const AddMeja = () => {
    const [modal, setModal] = useState(false);
    const [nomor_meja, setNoMeja] = useState("");
    const [kapasitas, setKapasitas] = useState("");
    const [status, setStatus] = useState("");
    const [isMutating, setIsMutating] = useState(false);
    const router = useRouter();
    const handleChange = () => setModal(!modal);
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setIsMutating(true)
        let endpoint = `${API_URL}/meja`
        const data = {
            nomor_meja: nomor_meja,
            kapasitas: kapasitas,
            status: status
        }
        await axios.post(endpoint, data);
        setNoMeja('')
        setKapasitas('')
        setStatus('')
        setIsMutating(false);
        router.refresh()
        setModal(false)
    };
    return (
        <div>
            <button className="btn" onClick={handleChange}>
                Add New
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
                            <label className="label font-bold">No Meja</label>
                            <input
                                type="text"
                                value={nomor_meja}
                                onChange={(e) => setNoMeja(e.target.value)}
                                className="input w-full input-bordered"
                                placeholder="Menu"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">Kapasitas</label>
                            <input
                                type="text"
                                value={kapasitas}
                                onChange={(e) => setKapasitas(e.target.value)}
                                className="input w-full input-bordered"
                                placeholder="Harga"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">Status</label>
                            <input
                                type="text"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="input w-full input-bordered"
                                placeholder="Status"
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

export default AddMeja;
