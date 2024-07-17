import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        axios
            .get('http://localhost:3001/products')
            .then((response) => {
                setProducts(response.data.data)
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
        </div>
    )
}

export default Home