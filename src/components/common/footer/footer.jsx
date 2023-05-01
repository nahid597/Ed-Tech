import React from 'react';
import './footer.scss';

function FooterComponent() {
  return (
    <div className='footer'>
        <div className='row'>
            <div className='col col-md-4 col-sm-6'>
                <img height="100px" width="100px"  src="http://localhost:3000/education.png" alt='no-action'/>
                <h3 className='mt-2'>Learn Everything online</h3>
            </div>
            <div className='col col-md-2 col-sm-6'>
                <h3>Company</h3>
                <p>Career</p>
                <p>Join at Teacher</p>
                <p>Privacy & Policy</p>
                <p>Refund Policy</p>
            </div>
            <div className='col col-md-2 col-sm-6'>
                <h3>Others</h3>
                <p>Blogs</p>
                <p>Book Store</p>
                <p>Notes & Guides</p>
                <p>Offers</p>
                <p>Verified Certificates</p>
            </div>
            <div className='col col-md-4 col-sm-6'>
               <h3>Contact</h3>
                <p>Phone - 01867083536</p>
                <p>Email - support@edtech.com</p>
            </div>
        </div>
    </div>
  )
}

export default FooterComponent;