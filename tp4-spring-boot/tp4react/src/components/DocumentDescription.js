import React from 'react'


const DocumentDescription = ({document, account, borrow}) => {
    let ids = [] ;
    if (account !== undefined) {
        ids = [document.id, account.id] ;
    }
    return (
        <tr>
            <td>{document.name}</td>
            <td>{document.author}</td>
            <td>{document.type}</td>
            <td>{document.nbAvailable}</td>
            <td><button disabled={document.nbAvailable === 0 || (account.type === "Employee" || account === "no account connected")} onClick={() => {borrow(ids)}}>borrow</button></td>
        </tr>
    )

}

export default DocumentDescription;