"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API_URL = "http://127.0.0.1:8000/api";
const AddJenis = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [kategori_id, setKategori_id] = useState("");
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);
    let endpoint = `${API_URL}/jenis`;
    const data = { name: name, kategori_id: kategori_id };
    await axios.post(endpoint, data);
    setName("");
    setKategori_id("");
    setIsMutating(false);
    router.refresh();
    setModal(false);
  };
  return (
    <div>
      <button className="btn bg-sky-800 text-white border-none" onClick={handleChange}>
        Add New
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal text-cyan-950">
        <div className="modal-box bg-cyan-200">
          <h3 className="font-bold text-lg">Add New Jenis</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input w-full input-bordered text-gray bg-cyan-100"
                placeholder="Name Jenis"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Kategori</label>
              <input
                type="text"
                value={kategori_id}
                onChange={(e) => setKategori_id(e.target.value)}
                className="input w-full input-bordered text-gray bg-cyan-100"
                placeholder="Kategori"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn border-none" onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn bg-green-400 text-white border-none">
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

export default AddJenis;
