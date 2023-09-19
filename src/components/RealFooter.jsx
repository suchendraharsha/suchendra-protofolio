import React from 'react'
import Footer from './Footer'

const RealFooter = () => {
    return (
        <div className='rf_Cont'>
            <div className="rf_heading">
                <h1 className="rf_hText">
                    Sudeva harsha protfolio
                </h1>
            </div>
            <div className="rf_copyright">
                {/* <h4 className="rf_copyrightText">@Copyright</h4> */}
                <p className="rf_copyrightText">&copy; {new Date().getFullYear()} sudeva harsha. All Rights Reserved.</p>
            </div>
            <div className="footer-contact">
                <h3>Contact Information</h3>
                <p>Email: sudevaharsha1@gmail.com</p>
                <p>Phone: (831) 768-3829</p>
                <p>Address: mandapala street, nellore, india</p>
            </div>

        </div>
    )
}

export default RealFooter