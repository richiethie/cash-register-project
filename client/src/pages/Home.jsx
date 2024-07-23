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
        <div className='flex flex-col h-dvh bg-slate-100 justify-center items-center'>
            <h1 className='text-3xl font-bold text-slate-700 mt-4 p-4'>CASH REGISTER</h1>
            <div className='flex h-dvh w-[100%] bg-slate-100 justify-evenly items-start'>
                <div className='w-[40%] bg-white p-4 m-4 '>
                    <CartList cart={cart}/>
                </div>
                <div className='w-[60%] bg-white shadow-lg m-4 p-4'>
                    <div className='flex justify-between items-center'>
                        <h1 className='ml-4 text-2xl text-teal-400 font-bold my-8'>PRODUCTS LIST</h1>
                        <Link to='/products/add'>
                            <MdOutlineAddBox className='text-teal-400 hover:text-black text-4xl' />
                        </Link>
                    </div> 
                    {loading ? (
                        <Spinner />
                    ) : (
                        <ProductsCard products={products} />
                    )}
                </div>
            </div>
        </div>
        
    )
}

export default Home