import React from "react";
import { useLocation } from "react-router-dom";


const NewReleases = () => {


    const location = useLocation();
    const path = location.pathname;

    let pageTitle;

    if(path === "/"){
        pageTitle = "NEW RELEASES BOOKS";
    }

    else if(path ==="/Likes"){
        pageTitle = "LIKES";

    }
    else if(path ==="/shoppingCart"){
        pageTitle = "SHOPPING CART";
    }
    else if (path === "/Account"){
        pageTitle = "ACCOUNT"
    }
    



    return(
        <div className="title">
            {pageTitle}
        </div>
    )
}


export default NewReleases