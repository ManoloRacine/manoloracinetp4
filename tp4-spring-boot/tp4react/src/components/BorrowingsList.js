import React from 'react'
import BorrowingDescription from "./BorrowingDescription";


const BorrowingsList = ({account, borrowings, fetchBorrowings}) => {
    return (
        <table>
            <thead>
            <th>document name</th>
            <th>location date</th>
            <th>return date</th>
            </thead>
            <tbody>
            {borrowings.map((borrowing) => <BorrowingDescription borrowing={borrowing}/>)}
            </tbody>
        </table>
    )

}

export default BorrowingsList;