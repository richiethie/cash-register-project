import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteCart = () => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:3001/cart/${id}`)
            .then((response) => {
                setName(response.data.name)
                setPrice(response.data.price)
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false)
                alert("An error has occurred. Please check console.")
                console.log(error)
            })
    }, [])
    const handleDeleteProduct = () => {
        setLoading(true)
        axios.delete(`http://localhost:3001/cart/delete/${id}`)
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
            <div className='flex justify-center text-slate-700 font-bold'>
                <h1 className='text-3xl my-4'>REMOVE FROM CART</h1>
            </div>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col items-center bg-slate-50 shadow-xl w-[800px] p-8 mx-auto'>
                <h3 className='text-2xl'>Are you sure you want to remove this item from your Cart?</h3>
                <div className='border-2 border-gray-300 bg-white px-4 py-5 mt-5 w-[80%] relative hover:shadow'>
                    <div className='text-lg font-semibold flex justify-center items-center gap-x-2'>
                        <h2 className='my-1'>{name}</h2>
                    </div>
                    <div className='text-xl font-bold flex justify-center items-center gap-x-2'>
                        <h2 className='my-1'>${price}</h2>
                    </div>
                </div>
                <button className='p-4 bg-red-600 text-white font-semibold m-8 w-[80%]' onClick={handleDeleteProduct}>
                    REMOVE
                </button>
            </div>
        </div>
    )
}

export default DeleteCart