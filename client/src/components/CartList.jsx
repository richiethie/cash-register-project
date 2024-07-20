import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { FaPlus, FaCartPlus } from "react-icons/fa";
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const CartList = ({cart}) => {
    const [tender, setTender] = useState('')
    const [showModal, setShowModal] = useState(false);
    const [changeDue, setChangeDue] = useState('')
    console.log(cart)
    const priceArr = cart.map((item) => {
        console.log(item.price)
        let arr = []
        const itemPrice = item.price
        // arr.push(itemPrice)
        return itemPrice
    })
    console.log(priceArr)
    let sum = 0
    for (let i = 0; i < priceArr.length; i++) {
        sum += priceArr[i]
    }
    const totalPrice = sum.toFixed(2)
    console.log(totalPrice)

    const handleCheckout = () => {
        const change = tender - totalPrice
        const totalChange = change.toFixed(2)
        setShowModal(true)
        setChangeDue(totalChange)
        console.log(change)
    }
    return (
        <div className="w-full border-separate border-spacing">
            <h1 className='text-3xl my-4'>Cart</h1>
            <table className='w-full border-separate border-spacing'>
                <thead>
                    <tr>
                    <th className='border border-slate-600'>Name</th>
                        <th className='border border-slate-600'>Price</th>
                        <th className='border border-slate-600'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={item._id} className='h-8'>
                            <td className='border border-slate-700 text-center'>
                                {item.name}
                            </td>
                            <td className='border border-slate-700 text-center'>
                                ${item.price}
                            </td>
                            <td className='border border-slate-700 text-center'>
                                <div className='flex justify-center gap-x-4'>
                                    <Link to={`/cart/delete/${item._id}`}>
                                        <MdOutlineDelete className='text-2xl text-red-600' />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>Total: ${totalPrice}</div>
            <div className='flex flex-row'>
                <h2>Tender: </h2>
                <input 
                    type='number' 
                    className='border-2 border-gray-500 ml-2 px-4 py-2 w-[40%]'
                    onChange={(e) => setTender(e.target.value)}
                />
            </div>
            <button className='p-2 bg-sky-300 mt-4' onClick={handleCheckout}>
                    Checkout
            </button>
            {/* Modal logic below */}
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font=semibold">Receipt</h3>
                                    <button
                                        className="flex bg-transparent border-0 text-black float-right"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="flex justify-center items-center pb-1 text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                                        x
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <form className="relative bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full ">
                                        {cart.map((item) => (
                                            <div key={item._id} className='flex flex-row justify-between relative '>
                                                <p className='pr-10'>{item.name}</p>
                                                <p>${item.price}</p>
                                            </div>
                                        ))}
                                        <div className='border-t-2 border-black'>
                                            <div className='flex flex-row justify-between'>
                                                <p>Tender: </p>
                                                <p className='font-semibold'>${tender}</p>
                                            </div>
                                            <div className='flex flex-row justify-between'>
                                                <p>Paid: </p>
                                                <p className='font-semibold'>${totalPrice}</p>
                                            </div>
                                            <div className='flex flex-row justify-between'>
                                                <p>Change: </p>
                                                <p className='font-bold'>${changeDue}</p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-white bg-red-500 font-bold uppercase px-6 py-2 rounded shadow hover:shadow-lg text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    {/* <button
                                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Submit
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default CartList