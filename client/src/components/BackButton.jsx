import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = ({ destination = '/'}) => {
    return (
        <div className='flex'>
            <Link to={destination} className='bg-teal-400 text-white px-4 py-1 w-fit'>
                <BsArrowLeft className='text-3xl' />
            </Link>
        </div>
    )
}

export default BackButton