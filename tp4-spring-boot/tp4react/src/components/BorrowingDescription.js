import React from "react";

const BorrowingDescription = ({borrowing, returnBorrowing, account}) => {
    let ids = [account.id, borrowing.id] ;

    return (
        <tr>
            <td>{borrowing.name}</td>
            <td>{borrowing.locationDate}</td>
            <td>{borrowing.returnDate}</td>
            <td><button onClick={() => returnBorrowing(ids)}>Return document</button></td>
        </tr>
    )

}

export default BorrowingDescription;