import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchLike } from "../redux/actions/actionClickLike.ts";





const Like = ({onPropClick}) => {


  
    return (
        <div className="newBookPageLike" onClick={onPropClick} >
        </div>
    )
}


export default Like