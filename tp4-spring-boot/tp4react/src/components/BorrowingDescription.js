import React from "react";

const BorrowingDescription = ({borrowing}) => {
    return (
        <tr>
            <td>{borrowing.name}</td>
            <td>{borrowing.locationDate}</td>
            <td>{borrowing.returnDate}</td>
        </tr>
    )

}

export default BorrowingDescription;