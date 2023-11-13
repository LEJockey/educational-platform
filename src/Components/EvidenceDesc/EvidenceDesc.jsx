import React from 'react'
import './EvidenceDesc.css'
import parse from 'html-react-parser';

const EvidenceDesc = ({title='', desc=''}) => {
  return (
    <div className='evidence-comp'>
        <h3>{title}</h3>
        <div className='evidence-desc position-relative ps-3'>
            <p>{parse(desc)}</p>
        </div>

    </div>
  )
}

export default EvidenceDesc