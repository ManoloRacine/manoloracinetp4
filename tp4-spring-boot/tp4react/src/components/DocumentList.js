import React from 'react'
import DocumentDescription from "./DocumentDescription";

const DocumentList = ({documents, account, borrow}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>author</th>
                        <th>type</th>
                        <th>nb available</th>
                        <th>borrow</th>
                    </tr>
                </thead>
                <tbody>
                    {documents.map((document) => <DocumentDescription key={document.id} document={document} account={account} borrow={borrow}/>)}
                </tbody>

            </table>
        </div>
    )

}

export default DocumentList ;