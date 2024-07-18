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
            <h1 className='text-3xl my-4'>Edit Products</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Name</label>
                    <input
                       type='text'
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                       className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Price</label>
                    <input
                       type='text'
                       value={price}
                       onChange={(e) => setPrice(e.target.value)}
                       className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleEditProduct}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default EditProducts