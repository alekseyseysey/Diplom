import React from "react";


const Footer = () => {

    return(
        <div className="footerWrapper">
            <div className="footer">
            <div className="footerTitle">
                SUBSCRIBE TO NEWSLETTER
            </div>
            <div className="footerSubTitle">
            Be the first to know about new IT books, upcoming releases, exclusive offers and more.
            </div>
            <div className="footerInputWrapper">
                <div className="footerInput">
                    <form action="">
                    <input className="footerEmail" type="email" placeholder="Your email" />
                    </form>
                </div>
                <div className="footerButtonWrapper">
                    <button className="footerButton">
                        SUBSCRIBE
                    </button>
                    
                </div>
            </div>
            </div>
        </div>
    )
}


export default Footer