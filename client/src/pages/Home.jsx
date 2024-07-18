import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import ProductsCard from '../components/ProductsCard'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { FaPlus, FaCartPlus } from "react-icons/fa";
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
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div> 
            {loading ? (
                <Spinner />
            ) : (
                <ProductsCard products={products} />
            )}
        </div>
    )
}

export default Home