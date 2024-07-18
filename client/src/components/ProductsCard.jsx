import { Link } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { FaPlus, FaCartPlus } from "react-icons/fa";
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const ProductsCard = ({products}) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {products.map((item) => (
                <div
                    key={item._id}
                    className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'
                >
                    <div className='flex justify-center items-center gap-x-2'>
                        <h2 className='my-1'>{item.name}</h2>
                    </div>
                    <div className='flex justify-center items-center gap-x-2'>
                        <h2 className='my-1'>${item.price}</h2>
                    </div>
                    <div className='flex justify-evenly items-center gap-x-2 mt-4 p-4'>
                        {/* add to cart functionality needs to be added */}
                        <Link to={`/products/add`}>
                            <FaCartPlus className='text-2xl text-green-800 hover:text-black' />
                        </Link >
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