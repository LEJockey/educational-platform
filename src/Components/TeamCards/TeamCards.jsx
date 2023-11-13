import React from 'react'
import Slider from "react-slick";
import './TeamCards.css'
import ImageComp from '../ImageComp/ImageComp';


const TeamCards = ({cards}) => {
    console.log(cards)
    const settings = {
        infinite: true,
        autoplay: true,
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 523,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }
        ]
    }

  return (
    <div className='row gy-4'>
        <Slider {...settings}>
            {cards?.map((card, idx) => (
                <div className="col-md-3 p-3 bg-card" key={idx}>
                    <ImageComp src={card.src} alt={card.title} />
                    <h5 className='text-center'>{card.title}</h5>
                    <h3 className='text-center'>{card.name}</h3>
                </div>

            ))}
        </Slider>
    </div>
    
  )
}

export default TeamCards