// import React from 'react'
// import './HeaderImg.css'



// const HeaderImg = ({src, desc}) => {
//     const dynamicStyle = {
//         backgroundImage: `linear-gradient(89deg, rgba(19, 92, 81, 0.60) 28.11%, rgba(19, 92, 81, 0.00) 98.5%), url(${src}), lightgray -252.759px 3px / 136.151% 100.399% no-repeat`,
//     };

//     return (
//     <figure className='position-relative main-header d-flex align-items-center' style={dynamicStyle}>
//         <figcaption className='position-absolute'>
//             <h1 className='mx-5'>{desc}</h1>
//         </figcaption>
//     </figure>
//     )
// }

// export default HeaderImg

import React from 'react'

const HeaderImg = ({src, desc}) => {

    const backGround = {
        backgroundImage: `linear-gradient(89deg, rgba(19, 92, 81, 0.60) 28.11%, rgba(19, 92, 81, 0.00) 98.5%), url(${src}), lightgray -252.759px 3px / 136.151% 100.399% no-repeat`
    }
  return (
    <figure className='main-header position-relative d-flex align-items-center' style={backGround}> 
        <figcaption className=' position-absolute'>
            <h1 className='mx-5'>{desc}</h1>
        </figcaption>
    </figure>
  )
}

export default HeaderImg