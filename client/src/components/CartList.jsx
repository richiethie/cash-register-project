import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { FaPlus, FaCartPlus } from "react-icons/fa";
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const CartList = ({cart}) => {
    // console.log(cart)
    return (
        <div className="w-full border-separate border-spacing">
            <table className='w-full border-separate border-spacing'>
                <thead>
                    <tr>
                    <th className='border border-slate-600 rounded-md'>Name</th>
                        <th className='border border-slate-600 rounded-md'>Price</th>
                        <th className='border border-slate-600 rounded-md'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={item._id} className='h-8'>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {item.name}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                ${item.price}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
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
        </div>
    )
}

export default CartList