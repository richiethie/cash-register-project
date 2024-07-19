import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { FaPlus, FaCartPlus } from "react-icons/fa";
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const CartList = ({cart}) => {
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
    return (
        <div className="w-full border-separate border-spacing">
            <div>Cart</div>
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
        </div>
    )
}

export default CartList