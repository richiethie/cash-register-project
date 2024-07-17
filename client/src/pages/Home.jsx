import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { FaPlus } from "react-icons/fa";
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        axios
            .get('http://localhost:3001/products')
            .then((response) => {
                console.log(response.data)
                setProducts(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }, [])
    return (
        <div className='p-4'>
           <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Products List</h1>
                <Link to='/products/add'>
                    <MdOutlineAddBox className='text-sky-800 test-4xl' />
                </Link>
            </div> 
            {loading ? (
                <Spinner />
            ) : (
                <table className='w-full border-separate border-spacing'>
                    <thead>
                        <tr>
                        <th className='border border-slate-600 rounded-md'>No.</th>
                            <th className='border border-slate-600 rounded-md'>Name</th>
                            <th className='border border-slate-600 rounded-md'>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product._id} className='h-8'>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {index + 1}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {product.name}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {product.price}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        {/* change this to adding product to cart */}
                                        <Link to='/products/add'>
                                        <FaPlus className='text-2xl text-green-800' />
                                        </Link>
                                        <Link to={`/products/update/${product._id}`}>
                                            <AiOutlineEdit className='text-2xl text-yellow-600' />
                                        </Link>
                                        <Link to={`/products/delete/${product._id}`}>
                                            <MdOutlineDelete className='text-2xl text-red-600' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Home