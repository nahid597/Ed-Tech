import React from 'react';
import './partners.scss';
import { partners } from '../../../global/imagesSource';

function PartnersComponent() {
    
  return (
    <div className='partnersContainer'>
        <div style={{color: "wheat", padding: "20px"}} className='text-center mt-2'>
            <h3>Our global partners</h3>
        </div>
        <div>
            <ul className='partnersList'>
                {partners.map((partner, index) => (
                    <li className='partnerItem' key={index}>
                        <img height="100px" width="100px" src={partner.url} alt='no-action'/>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default PartnersComponent;