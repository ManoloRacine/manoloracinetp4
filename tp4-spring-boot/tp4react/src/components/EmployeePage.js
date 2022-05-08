import React from 'react'
import {Link} from "react-router-dom";

const EmployeePage = () => {
    return (
        <div>
            <Link to='/createBook'>create book</Link>
            <div></div>
            <Link to='/createCD'>create CD</Link>
            <div></div>
            <Link to='/createDVD'>create DVD</Link>
        </div>
    )

}

export default EmployeePage;