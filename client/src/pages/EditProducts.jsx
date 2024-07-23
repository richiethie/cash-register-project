import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditProducts = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:3001/products/${id}`)
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
    const handleEditProduct = () => {
        const data = {
            name,
            price
        }
        setLoading(true)
        axios
            .post(`http://localhost:3001/products/update/${id}`, data)
            .then(() => {
                setLoading(false)
                navigate('/')
            })
            .catch((error) => {
                setLoading(false)
                alert('An error has occurred. Please check console.')
                console.log(error)
            })
    }

    return (
        <div className='p-4'>
            <BackButton />
            <div className='flex justify-center text-slate-700 font-bold'>
                <h1 className='text-3xl my-4'>EDIT PRODUCT</h1>
            </div>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col items-center bg-slate-50 shadow-xl w-[600px] p-8 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 font-semibold text-slate-600'>NAME</label>
                    <input
                       type='text'
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                       className='border-2 border-slate-300 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 font-semibold text-slate-600'>PRICE</label>
                    <input
                       type='text'
                       value={price}
                       onChange={(e) => setPrice(e.target.value)}
                       className='border-2 border-slate-300 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-teal-400 m-8 text-white text-xl font-bold' onClick={handleEditProduct}>
                    SAVE
                </button>
            </div>
        </div>
    )
}

export default EditProducts