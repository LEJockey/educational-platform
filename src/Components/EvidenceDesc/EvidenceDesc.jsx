import React from 'react'
import './EvidenceDesc.css'

const EvidenceDesc = ({title='', desc='', list1='', list2='', list3='', desc2='', className}) => {
  return (
    <div className='evidence-comp'>
        <h3>{title}</h3>
        <div className='evidence-desc position-relative ps-3'>
            <p>{desc}</p>
            <ul className={className}>
                <li>{list1}</li>
                <li>{list2}</li>
                <li>{list3}</li>
            </ul>
            <p>{desc2}</p>
        </div>

    </div>
  )
}

export default EvidenceDesc