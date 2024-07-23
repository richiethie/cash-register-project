import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { FaPlus, FaCartPlus } from "react-icons/fa";
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const ProductsCard = ({products}) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const {id} = useParams()
    const handleSaveCart = () => {
        // console.log(name)
        const data = {
            name,
            price
        }
        setLoading(true)
        axios
            .post('http://localhost:3001/cart/add', data)
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
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {products.map((item) => (
                <div
                    key={item._id}
                    className='border-2 border-gray-300 px-4 py-2 m-4 relative hover:shadow-xl'
                >
                    <div className='text-lg font-semibold flex justify-center items-center gap-x-2'>
                        <h2 className='my-1'>{item.name}</h2>
                    </div>
                    <div className='text-xl font-bold flex justify-center items-center gap-x-2'>
                        <h2 className='my-1'>${item.price}</h2>
                    </div>
                    <div className='flex justify-between items-center gap-x-2 mt-4 mb-2 p-2'>
                        {/* add to cart functionality needs to be added */}
                        <Link to={`/cart/${item._id}`}>
                            <FaCartPlus 
                                className='text-2xl text-green-800 hover:text-black' 
                                onClick={() => {
                                    const cartName = item.name
                                    const cartPrice = item.price
                                    setName(cartName)
                                    setPrice(cartPrice)
                                    // handleSaveCart()
                                }}
                            />
                        </Link>
                        
                        <Link to={`/products/update/${item._id}`}>
                            <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                        </Link>
                        <Link to={`/products/delete/${item._id}`}>
                            <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsCard