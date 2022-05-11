import React from 'react'
import BorrowingDescription from "./BorrowingDescription";
import {Link} from "react-router-dom";

const BorrowingsList = ({account, borrowings, returnBorrowing}) => {
    return (
        <div>
            <Link to='/documents'>documents</Link>
            <div></div>
            <Link to='/documentResearch'>research documents</Link>
            <table>
                <thead>
                <th>document name</th>
                <th>location date</th>
                <th>return date</th>
                <th>return</th>
                </thead>
                <tbody>
                {borrowings.map((borrowing) => <BorrowingDescription key={borrowing.id} borrowing={borrowing} returnBorrowing={returnBorrowing} account={account}/>)}
                </tbody>
            </table>
        </div>

    )

}

export default BorrowingsList;