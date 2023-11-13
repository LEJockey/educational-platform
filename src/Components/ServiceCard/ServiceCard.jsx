import React from 'react'
import './ServiceCard.css'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser';
import {BiRightArrowAlt} from 'react-icons/bi'



const ServiceCard = ({icon, id, title, desc}) => {
  return (
    <div className='service-card py-4 px-4 h-100 d-flex flex-column justify-content-between'>
        <div className="service-box d-flex justify-content-between align-items-center mb-4">
            <div className="serviceIcon-box rounded-circle p-3">
                {icon}
            </div>
            <div className="serviceNo-box mx-4">
                {id}
            </div>

        </div>

        <h2 className='mb-4'>{parse(title)}</h2>
        <p>{parse(desc)}</p>

        <Link > Read More <BiRightArrowAlt className='mx-2'/></Link>
    </div>
  )
}

export default ServiceCard