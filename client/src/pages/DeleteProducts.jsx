import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteProducts = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()
    const handleDeleteProduct = () => {
        setLoading(true)
        axios.delete(`http://localhost:3001/products/delete/${id}`)
            .then(() => {
                setLoading(false)
                navigate('/')
            })
            .catch((error) => {
                setLoading(false)
                alert("An error has occurred. Please check console.")
                console.log(error)
            })
    }
    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Delete Product</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                <h3 className='text-2xl'>Are you sure you want to delete this product?</h3>
                <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteProduct}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default DeleteProducts