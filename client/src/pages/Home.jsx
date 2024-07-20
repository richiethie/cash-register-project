import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import ProductsCard from '../components/ProductsCard'
import CartList from '../components/CartList'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { FaPlus, FaCartPlus } from "react-icons/fa";
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
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
    useEffect(() => {
        setLoading(true)
        axios
            .get('http://localhost:3001/cart')
            .then((response) => {
                console.log(response.data)
                setCart(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }, [])
    return (
        <div className='flex justify-evenly items-center'>
            <div className='w-[40%] p-4 mt-12 border-2 border-gray-500 rounded-lg'>
                <CartList cart={cart}/>
            </div>
            <div className='w-[60%] p-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='ml-4 text-3xl my-8'>Products List</h1>
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
        </div>
        
    )
}

export default Home