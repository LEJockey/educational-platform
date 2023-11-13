import React from 'react'
import './FeatureCards.css'
import ImageComp from '../ImageComp/ImageComp'

const FeatureCards = ({cards}) => {
  return (
    <div className='row gy-4 feature-cards '>
        {cards?.map((card, idx)=>
        <div className="col-xl-2 col-lg-3 col-md-4 col-12" key={idx}>
            <div className="feature-card py-3 px-2 d-flex justify-content-between flex-column h-100">
                <div className="img-container mx-auto">
                    <ImageComp src={card.Img} alt={card.title}/>
                </div>
                <h5 className='text-center my-4'>{card.title}</h5>
                <p className='text-center m-0'>{card.no}</p>
                
            </div>
        </div>
        )}
    </div>
  )
}

export default FeatureCards