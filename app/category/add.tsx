"use client"
import React, { SyntheticEvent, use } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";


const API_URL = 'http://127.0.0.1:8000/api'
const AddCategory = () => {
  const [modal, setModal] = useState(false)
  const [nama_kategori, setName] = useState("")
  const [isMutating, setIsMutating] = useState(false)
  const router = useRouter()
  const handleChange = () => setModal(!modal)
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    setIsMutating(true)
    let endpoint = `${API_URL}/category`
    const data = { nama_kategori: nama_kategori }
    await axios.post(endpoint, data);
    setName('')
    setIsMutating(false);
    router.refresh()
    setModal(false)
  }
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
          <h3 className="font-bold text-lg">Add New Category</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">Name</label>
              <input
                type="text"
                value={nama_kategori}
                onChange={(e) => setName(e.target.value)}
                className="input w-full input-bordered text-gray bg-cyan-100"
                placeholder="Name Category"
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
}

export default AddCategory